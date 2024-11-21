import { Button, Image } from "@rneui/themed";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./LoginScreen.styles";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function LoginScreen() {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {/* Imagen de logo */}
      <Image
        source={require("../../../../assets/5-tenedores-letras-icono-logo.png")}
        style={styles.img}
      />

      {/* Login Form*/}
      <Text>Estamos en el login</Text>

      {/* Boton para registrarse */}
      <Text style={styles.todavia}>
        Todavía no te has registrado?{" "}
        <Text onPress={goToRegister} style={styles.clickAqui}>
          Click aquí
        </Text>
      </Text>
    </ScrollView>
  );
}
