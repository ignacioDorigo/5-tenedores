import React from "react";
import { screen } from "../utils";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Pantallas
import { RestaurantsStack } from "./RestaurantsStack";
import { RankingStack } from "./RankingStack";
import { FavoritesStack } from "./FavoritesStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={screen.restaurants.tab}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00A680",
        tabBarInactiveTintColor: "#C1C1C1",
        tabBarIcon: ({ focused, color, size }) =>
          asignarIcono(route, focused, size, color),
      })}
    >
      <Tab.Screen
        name={screen.restaurants.tab}
        component={RestaurantsStack}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function asignarIcono(route, focused, size, color) {
  let icono;
  console.log(route.name);
  if (route.name === screen.account.tab) {
    icono = focused ? "cog" : "cog-outline";
  }
  if (route.name === screen.favorites.tab) {
    icono = focused ? "heart" : "heart-outline";
  }
  if (route.name === screen.ranking.tab) {
    icono = focused ? "star" : "star-outline";
  }
  if (route.name === screen.restaurants.tab) {
    icono = focused ? "compass" : "compass-outline";
  }
  if (route.name === screen.search.tab) {
    icono = focused ? "magnify" : "magnify";
  }
  return (
    <Icon type="material-community" name={icono} size={size} color={color} />
  );
}
