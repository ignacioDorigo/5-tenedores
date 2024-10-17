import React from "react";
import { View } from "react-native";
import { Image, Text } from "@rneui/themed";
import { styles } from "./LoginScreen.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { LoginForm } from "../../../components/auth/LoginForm/LoginForm";

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
        <View style={styles.viewRegister}>
          <Text>
            ¿Todavía no te has registrado?{" "}
            <Text onPress={goToRegister} style={styles.click}>Click aquí</Text>
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
