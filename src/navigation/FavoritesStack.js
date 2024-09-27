import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// Fichero nombre screens
import { screen } from '../utils'

// Screens
import { FavoritesScreen } from '../screens/Favorites/FavoritesScreen'

export function FavoritesStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.favorites.favorites} component={FavoritesScreen} />
        </Stack.Navigator>
    )
}