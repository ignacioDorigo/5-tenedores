import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Fichero nombre screens
import { screen } from '../utils'

// Screens
import { AccountScreen } from '../screens/Account/AccountScreen'
import { LoginScreen } from '../screens/Account/LoginScreen'
import { RegisterScreen } from '../screens/Account/RegisterScreen'

export function AccountStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.account.account} component={AccountScreen} options={{ title: 'Cuenta' }} />
            <Stack.Screen name={screen.account.login} component={LoginScreen} options={{ title: 'Iniciar Sesión' }} />
            <Stack.Screen name={screen.account.register} component={RegisterScreen} options={{title:'Crea tu cuenta'}} />
        </Stack.Navigator>
    )
}