import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Screens
import { UserGuestScreen } from "./UserGuestScreen";
import { UserLoggedScreen } from "./UserLoggedScreen";

// Componentes
import { LoadingModal } from "../../components";

export function AccountScreen() {
  const [hasLogged, setHasLogged] = useState(null);
  useEffect(() => {
    // Obtenemos la instancia del firebase auth
    const auth = getAuth();

    // Es un state observer del resultado del inicio de sesion, "metodo signIn.... de firebase"
    onAuthStateChanged(auth, (user) => {
      // Si se termino de hacer la verifciacion, ponemos true o false, dependiendo lo que de
      const resultadoAuth = user != null ? true : false;
      setHasLogged(resultadoAuth);
    });

  }, []);
  if (hasLogged === null) {
    return <LoadingModal show text={"Cargando"}/>;
  }
  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
}
