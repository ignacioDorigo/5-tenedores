import React from "react";
import { View, Text } from "react-native";
import { InfoUser } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";
import { Button } from "@rneui/themed";
import { getAuth, signOut } from "firebase/auth";

export function UserLoggedScreen() {
  const logout = () => {
    console.log("Cerrando Sesion ....");
    const auth = getAuth();
    signOut(auth);
  };
  return (
    <View>
      <InfoUser />

      <Button
        title={"Cerrar Sesión"}
        onPress={logout}
        titleStyle={styles.btnTitle}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
