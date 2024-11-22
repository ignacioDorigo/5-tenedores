import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Image } from "@rneui/themed";
import { styles } from "./RegisterScreen.styles";
import { RegisterForm } from "../../../components/Auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/5-tenedores-letras-icono-logo.png")}
        style={styles.img}
      />

      <View style={styles.viewRegister}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
