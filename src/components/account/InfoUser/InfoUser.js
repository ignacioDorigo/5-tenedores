import React from "react";
import { Avatar, Text } from "@rneui/themed";
import { View } from "react-native";
import { getAuth } from "firebase/auth";
import { styles } from "./InfoUser.styles";
import * as ImagePicker from "expo-image-picker";

export function InfoUser() {
  const { uid, photoURL, email, displayName } = getAuth().currentUser;

  const changeAvatar = async () => {
    try {
      const posibleFoto = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
      });
      if (!posibleFoto.canceled) {
        console.log("FOTO SELECCIONADA");
        const datosFoto = posibleFoto.assets[0];
        const uriFoto = datosFoto.uri;
        uploadImage(uriFoto);
      } else {
        console.log("FOTO CANCELADA");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (uri) => {
    try {
      console.log(uri);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.content}>
      <Avatar
        size={"large"}
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
        source={{ uri: photoURL }}
        // Si no existe la photoURL me muestra el icono person
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text>{email || "sinmail"}</Text>
      </View>
    </View>
  );
}
