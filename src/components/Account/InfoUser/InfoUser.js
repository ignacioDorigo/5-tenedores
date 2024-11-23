import React from "react";
import { View } from "react-native";
import { Avatar, Button, Icon, ListItem, Text } from "@rneui/themed";
import { getAuth } from "firebase/auth";
import { styles } from "./InfoUser.styles";
import * as ImagePicker from "expo-image-picker";

export function InfoUser() {
  const { uid, email, displayName, photoURL } = getAuth().currentUser;

  const changeAvatar = async () => {
    try {
      console.log("Cambiando avatar");
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images", "videos"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        console.log("SELECCIONAR FOTO: FOTO SELECCIONADA");
        console.log(result.assets[0].uri);
      } else {
        console.log("SELECCIONAR FOTO: CANCELADO");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={styles.content}>
      <Avatar
        size={"large"}
        rounded
        containerStyle={styles.avatar}
        icon={{ type: "material", name: "person" }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text>{email || "Sin mail"}</Text>
      </View>
    </View>
  );
}
