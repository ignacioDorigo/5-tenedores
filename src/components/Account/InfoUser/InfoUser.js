import React from "react";
import { View } from "react-native";
import { styles } from "./InfoUser.styles";
import { Avatar, Text } from "@rneui/base";
import { getAuth } from "firebase/auth";

export function InfoUser() {
  const auth = getAuth().currentUser;
  const { uid, photoURL, email, displayName } = auth;
  const changeAvatar = () => {
    console.log("Cambiar avatar");
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
      >
        <Avatar.Accessory
          size={24}
          onPress={changeAvatar}
          source={{ uri: photoURL }}
        ></Avatar.Accessory>
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Anonimo"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
