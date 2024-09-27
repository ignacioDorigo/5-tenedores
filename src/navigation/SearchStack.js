import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Fichero nombre screens
import { screen } from '../utils'

// Screens
import { SearchScreen } from '../screens/Search/SearchScreen'


export function SearchStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.search.search} component={SearchScreen} />
        </Stack.Navigator>
    )
}