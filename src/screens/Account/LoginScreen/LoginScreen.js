import { Image } from "@rneui/themed";
import React from "react";
import { View, Text, ScrollView } from "react-native";

export function LoginScreen() {
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/5-tenedores-letras-icono-logo.png")}
        style={styles.img}
      />
    </ScrollView>
  );
}
