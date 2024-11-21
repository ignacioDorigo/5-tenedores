import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from "./UserGuestScreen";
import { UserLoggedScreen } from "./UserLoggedScreen";

export function AccountScreen() {
  const [logueado, setLogueado] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      setLogueado(user ? true : false);
      console.log(user);
    });
  }, []);

  return logueado ? <UserLoggedScreen /> : <UserGuestScreen />;
}
