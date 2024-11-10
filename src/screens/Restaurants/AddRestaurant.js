import React from "react";
import { View, Text } from "react-native";

export function AddRestaurant({ route }) {
  console.log(route.params);
  const { mail, password } = route.params;
  console.log(mail);
  console.log(password);

  return (
    <View>
      <Text>AddRestaurant</Text>
    </View>
  );
}
