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

      <AccountOption />

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
