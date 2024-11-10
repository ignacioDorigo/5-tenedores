import React from 'react'
import {screen} from '../utils'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas

export default function RestaurantsStack() {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator>
        <Stack.Screen name={} component={}/>
      </Stack.Navigator>
    );
  }