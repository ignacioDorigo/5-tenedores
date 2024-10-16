import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Fichero nombre screens
import { screen } from "../utils";

// Pantallas
import { RestaurantsScreen } from "../screens/Restaurants/RestaurantsScreen";

export function RestaurantsStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={screen.restaurants.restaurants}>
      <Stack.Screen
        name={screen.restaurants.restaurants}
        component={RestaurantsScreen}
        options={{ title: "Restaurants" }}
      />
    </Stack.Navigator>
  );
}
