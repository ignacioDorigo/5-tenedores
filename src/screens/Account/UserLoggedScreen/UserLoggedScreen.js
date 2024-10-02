import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "@rneui/base";
import { InfoUser } from "../../../components/Account/InfoUser";
import { styles } from "./UserLoggedScreen.styles";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../../components/Shared/LoadingModal";
import { AccountOption } from "../../../components/Account";

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);

  // Se usa para forzar una recarga de un componente
  const onReload = () => {
    setReload((prevState) => !prevState);
  };

  const logOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <AccountOption onReload={onReload} />

      <Button
        title="Cerrar Sesión"
        buttonStyle={styles.btnStyle}
        titleStyle={styles.title}
        onPress={logOut}
      />
      <LoadingModal show={loading} text={loadingText} />
    </View>
  );
}
