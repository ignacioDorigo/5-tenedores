import React from "react";
import { screen } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { RankingScreen } from "../screens/Ranking";

export function RankingStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.ranking.ranking} component={RankingScreen} options={{title:"Ranking"}}/>
    </Stack.Navigator>
  );
}
