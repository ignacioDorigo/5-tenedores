import React from "react";
import { screen } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { RestaurantsScreen } from "../screens/RestaurantsScreen";

const Stack = createNativeStackNavigator();

export function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.restaurants.restaurants}
        component={RestaurantsScreen}
      />
    </Stack.Navigator>
  );
}
