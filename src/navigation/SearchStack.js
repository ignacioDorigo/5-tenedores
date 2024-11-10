import React from "react";
import { screen } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { SearchScreen } from "../screens/Search";

export function SearchStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.search.search} component={SearchScreen} />
    </Stack.Navigator>
  );
}
