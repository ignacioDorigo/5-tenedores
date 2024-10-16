import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Fichero nombre screens
import { screen } from "../utils";

// Pantallas
import { SearchScreen } from "../screens/Search/SearchScreen";

export function SearchStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={screen.search.search}>
      <Stack.Screen
        name={screen.search.search}
        component={SearchScreen}
        options={{ title: "Buscar" }}
      />
    </Stack.Navigator>
  );
}
