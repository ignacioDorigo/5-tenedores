import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Fichero nombre screens
import { screen } from "../utils";

// Pantallas
import { RankingScreen } from "../screens/Ranking/RankingScreen";

export function RankingStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={screen.ranking.ranking}>
      <Stack.Screen
        name={screen.ranking.ranking}
        component={RankingScreen}
        options={{ title: "Ranking" }}
      />
    </Stack.Navigator>
  );
}
