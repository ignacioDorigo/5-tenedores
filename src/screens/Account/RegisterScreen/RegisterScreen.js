import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Image } from "@rneui/themed";
import { styles } from "./RegisterScreen.styles";

export function RegisterScreen() {
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/5-tenedores-letras-icono-logo.png")}
        style={styles.img}
      />
      <Text>RegisterScreen</Text>
    </ScrollView>
  );
}
