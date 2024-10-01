import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Fichero nombre screens
import { screen } from '../utils'

// Screens
import { RestaurantsScreen } from '../screens/Restaurants/RestaurantsScreen'
import { AddRestaurant } from '../screens/Restaurants/AddRestaurant'


export function RestaurantsStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.restaurants.restaurants} component={RestaurantsScreen} />
            <Stack.Screen name={screen.restaurants.addRestaurant} component={AddRestaurant} />
        </Stack.Navigator>
    )
}