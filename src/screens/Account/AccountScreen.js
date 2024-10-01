import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Componentes
import { UserGuestScreen } from '../Account/UserGuestScreen'
import { UserLoggedScreen } from '../Account/UserLoggedScreen'


// Modal de Carga
import { LoadingModal } from '../../components/Shared'

export function AccountScreen() {

  // Es un state para saber si el usuario esta logueado
  // inicialmente es null, despues de que se hace la verificacion
  // da false si no se logueo
  // true si se logueo correcamtente
  const [hasLogged, setHasLogged] = useState(null);


  useEffect(() => {
    // Auth nos devuelve 
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
      // console.log(hasLogged);

    });

  }, []);

  // El loading modal va a mostrarse solo cuando la peticion asincronica este en proceso
  if (hasLogged === null) {
    return (<LoadingModal show={true} text='Cargando' />);
  }

  return (

    hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />
  )
}