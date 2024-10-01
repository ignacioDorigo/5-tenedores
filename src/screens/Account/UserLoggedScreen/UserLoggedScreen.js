import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";
import { getAuth, signOut } from "firebase/auth";
import { styles } from "./UserLoggedScreen.styles";
import { InfoUser } from "../../../components/Account";

export function UserLoggedScreen() {
  const cerrarSesion = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {}
  };

  return (
    <View style={styles.content}>
      <InfoUser />
      <Button title="Cerrar Sesión" onPress={cerrarSesion} />
    </View>
  );
}
