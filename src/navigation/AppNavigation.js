import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// Import de iconos de react native elements
import { Icon } from '@rneui/base'

// Import de fichero que tiene nombre de screens
import { screen } from '../utils'

// Import de stacks
import { RestaurantsStack } from "./RestaurantsStack";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from './SearchStack';
import { AccountStack } from './AccountStack';


export function AppNavigation() {

    // Es la funcion para crear lo que tenga que ver con el nav inferior (tanto el contenedor, como las screen)
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarInactiveTintColor: "#646464",
            tabBarActiveTintColor: "#00A680",
            tabBarIcon: ({ size, color, focused }) => iconoTab(route, size, color, focused)
        })}>
            <Tab.Screen name={screen.restaurants.tab} component={RestaurantsStack} options={{ title: "Restaurantes" }} />
            <Tab.Screen name={screen.favorites.tab} component={FavoritesStack} options={{ title: "Favoritos" }} />
            <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{ title: "Ranking" }} />
            <Tab.Screen name={screen.search.tab} component={SearchStack} options={{ title: "Buscar" }} />
            <Tab.Screen name={screen.account.tab} component={AccountStack} options={{ title: "Cuenta" }} />
        </Tab.Navigator>
    )
}

function iconoTab(route, size, color, focused) {
    let nombreIcono;
    if (route.name === screen.restaurants.tab) {
        nombreIcono = focused ? "compass" : "compass-outline";
    }
    if (route.name === screen.favorites.tab) {
        nombreIcono = focused ? "heart" : "heart-outline";
    }
    if (route.name === screen.ranking.tab) {
        nombreIcono = focused ? "star" : "star-outline";
    }
    if (route.name === screen.search.tab) {
        nombreIcono = "magnify";
    }
    if (route.name === screen.account.tab) {
        nombreIcono = focused ? "account" : "account-outline";
    }
    return (<Icon type='material-community' name={nombreIcono} color={color} size={size} />)
}