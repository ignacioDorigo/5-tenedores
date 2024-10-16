import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Fichero nombre screens
import { screen } from "../utils";

// Pantallas
import { FavoritesScreen } from "../screens/Favorites/FavoritesScreen";

export function FavoritesStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={screen.favorites.favorites}>
      <Stack.Screen
        name={screen.favorites.favorites}
        component={FavoritesScreen}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}
