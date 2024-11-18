import React from "react";
import { screen } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { RankingScreen } from "../screens/RankingScreen";

const Stack = createNativeStackNavigator();

export function RankingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.ranking.ranking} component={RankingScreen} />
    </Stack.Navigator>
  );
}
