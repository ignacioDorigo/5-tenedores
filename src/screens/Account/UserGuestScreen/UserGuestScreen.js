import React from "react";
import { ScrollView } from "react-native";
import { styles } from "./UserGuestScreen.styles";
import { Text, Button, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

// Fichero de Screens
import { screen } from "../../../utils";

export function UserGuestScreen() {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de 5 tenedores</Text>
      <Text style={styles.description}>
        Encuentra restaurantes cercanos, explora menús, revisa reseñas de otros
        usuarios y califica tus visitas. Descubre los mejores lugares para
        disfrutar de una experiencia gastronómica inolvidable.
      </Text>

      <Button
        title={"Ver tu perfil"}
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
}
