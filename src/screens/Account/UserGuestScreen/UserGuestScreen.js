import React from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./UserGuestScreen.styles";
import { Image, Button } from "@rneui/themed";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLoginScreen = () => {
    navigation.navigate(screen.account.login);
  };
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require(`../../../../assets/user-guest.png`)}
        style={styles.img}
      />
      <></>
      <Text style={styles.titulo}>Consultar tu perfil de 5 tenedores</Text>
      <Text style={styles.descripcion}>
        {" "}
        Consulta tu perfil en 5 Tenedores y descubre más opciones para mejorar
        tu experiencia gastronómica. Accede a recomendaciones personalizadas,
        gestionando tus reservas y disfrutando de beneficios exclusivos según tu
        actividad en la app.
      </Text>
      <Button
        title={"Ver perfil"}
        onPress={goToLoginScreen}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </ScrollView>
  );
}
