import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Fichero nombre screens
import { screen } from "../utils";

// Pantallas
import { AccountScreen } from "../screens/Account/AccountScreen";

export function AccountStack() {
  
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={screen.account.account}>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "Cuenta" }}
      />
    </Stack.Navigator>
  );
}
