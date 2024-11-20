import React from "react";
import { screen } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { AccountScreen } from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "Cuenta" }}
      />
    </Stack.Navigator>
  );
}
