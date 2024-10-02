import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./InfoUser.styles";
import { Avatar, Text } from "@rneui/base";
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";

export function InfoUser(props) {
  const { setLoading, setLoadingText } = props;

  const auth = getAuth().currentUser;
  const { uid, photoURL, email, displayName } = auth;
  const [avatar, setAvatar] = useState(photoURL);

  
  const changeAvatar = async () => {
    // Abre la galerai de imagenes para que el usuairo suba un video o img
    // Recibe un objeto
    const result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes indica que tipo de archivoos puede subir (fotos, video, etc)
      // Nosotros ponemos All pero puede ser Image o Videos
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // Permite edicion
      allowsEditing: true,
      // Es un recorte de la foto
      aspect: [4, 3],
    });

    // En result queda un objeto con 2 propiedades --> una es assets(es un objeto con un array que tiene muchas propiedades)
    //                                             --> la otra es canceled (es true si no subio nada, si subio una foto es false)
    // console.log(result);

    if (!result.canceled) {
      const { assets } = result;
      const datosAssets = assets[0];
      console.log();
      // En datosAssets queda un objeto con muchas propiedades, ya nos sacamos de encima el array
      // console.log(datosAssets);
      uploadImage(datosAssets.uri);
    }
  };

  const uploadImage = async (uri) => {
    try {
      setLoading(true);
      setLoadingText("Subiendo avatar");
      // Busca el recurso
      // Si la uri es una ruta local (como un archivo en el dispositivo), recupera ese archivo
      const response = await fetch(uri);

      // Convierte lo que trajo (la img en un blob)
      const blob = await response.blob();

      // Inicializa el storage de firebase y me trae una instancia
      const storage = getStorage();

      // Crea una referencia usando al instancia para saber de que app se trata
      // y le pasamos donde la va a guardar y como
      const storageRef = ref(storage, `avatar/${uid}`);

      // Lo sube a firebase y nos devuelve lo que guardo
      uploadBytes(storageRef, blob).then((snapshot) => {
        updatePhotoUrl(snapshot.metadata.fullPath);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage();
    const storageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(storageRef);

    const auth = getAuth();
    await updateProfile(auth.currentUser, { photoURL: imageUrl });
    setAvatar(imageUrl);
    setLoading(false);
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar}></Avatar.Accessory>
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
