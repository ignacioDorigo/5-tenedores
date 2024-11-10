import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { screen } from "../../utils";

export function RestaurantsScreen() {
  const navigation = useNavigation();
  const goToAddRestaurant = () => {
    const mail = "leomessi2022@gmail.com";
    const password = "river1234";
    navigation.navigate(screen.restaurants.addRestaurant, {
      mail: mail,
      password: password,
    });
  };
  return (
    <View>
      <Text>RestaurantsScreen</Text>
      <Button title={"Crear Restaurante"} onPress={goToAddRestaurant} />
    </View>
  );
}
