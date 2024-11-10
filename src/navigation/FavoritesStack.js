import React from "react";
import { screen } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { FavoritesScreen } from "../screens/Favorites";

export function FavoritesStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.favorites.favorites}
        component={FavoritesScreen}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}
