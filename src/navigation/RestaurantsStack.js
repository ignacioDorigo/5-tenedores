import React from "react";
import { screen } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { RestaurantsScreen } from "../screens/Restaurants";
import { AddRestaurant } from "../screens/Restaurants";

export function RestaurantsStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurants.restaurants}
        component={RestaurantsScreen}
        options={{ title: "Restaurants" }}
      />
      <Stack.Screen
        name={screen.restaurants.addRestaurant}
        component={AddRestaurant}
        options={{ title: "Añadir Restaurante" }}
      />
    </Stack.Navigator>
  );
}
