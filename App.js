import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { initFirebase } from "./src/utils";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
