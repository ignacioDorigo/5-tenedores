import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Fichero nombre screens
import { screen } from '../utils'

// Screens
import { AccountScreen } from '../screens/Account/AccountScreen'

export function AccountStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.account.account} component={AccountScreen} />
        </Stack.Navigator>
    )
}