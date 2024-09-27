import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Fichero nombre screens
import { screen } from '../utils'

// Screens
import { RestaurantsScreen } from '../screens/Restaurants/RestaurantsScreen'
import { AddCollection } from '../screens/Restaurants/AddCollection'


export function RestaurantsStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.restaurants.restaurants} component={RestaurantsScreen} />
            <Stack.Screen name={screen.restaurants.addCollection} component={AddCollection} />
        </Stack.Navigator>
    )
}