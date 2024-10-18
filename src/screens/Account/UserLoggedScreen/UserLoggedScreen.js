import React from "react";
import { Button } from "@rneui/themed";
import { getAuth, signOut } from "firebase/auth";
import { View } from "react-native";
import { styles } from "./UserLoggedScreen.styles";
import { InfoUser } from "../../../components/account";

export function UserLoggedScreen() {
  const cerrarSesion = () => {
    try {
      const auth = getAuth();
      signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.content}>
      <InfoUser></InfoUser>

      <Button
        title={"Cerrar Sesión"}
        onPress={cerrarSesion}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
