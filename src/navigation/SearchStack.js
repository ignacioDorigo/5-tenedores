import React from "react";
import { screen } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { SearchScreen } from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.search.search} component={SearchScreen} options={{ title: "Buscar" }}/>
    </Stack.Navigator>
  );
}
