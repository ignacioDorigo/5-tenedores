import React from "react";
import { screen } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { AccountScreen } from "../screens/Account";

export function AccountStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={screen.account.account} component={AccountScreen} />
    </Stack.Navigator>
  );
}
