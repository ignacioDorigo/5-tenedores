import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Fichero nombre screens
import { screen } from '../utils'

// Screens
import { RankingScreen } from '../screens/Ranking/RankingScreen'


export function RankingStack() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.ranking.ranking} component={RankingScreen} />
        </Stack.Navigator>
    )
}