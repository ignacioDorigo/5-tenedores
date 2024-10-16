import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Pantallas
import { AccountStack } from "./AccountStack";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { RestaurantsStack } from "./RestaurantsStack";

// Fichero nombre screens
import { screen } from "../utils/screenName";
import { Icon } from "@rneui/themed";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={screen.restaurants.tab}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: "#646464",
        tabBarActiveTintColor: "#00A680",
        tabBarIcon: ({ focused, color, size }) =>
          asignarIconoTab(route, color, size, focused),
      })}
    >
      <Tab.Screen
        name={screen.restaurants.tab}
        component={RestaurantsStack}
        options={{ title: "Restaurants" }}
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

function asignarIconoTab(route, color, size, focused) {
  let nombreIcono;
  if (route.name === screen.restaurants.tab) {
    nombreIcono = focused ? "compass" : "compass-outline";
  }
  if (route.name === screen.account.tab) {
    nombreIcono = focused ? "account" : "account-outline";
  }
  if (route.name === screen.favorites.tab) {
    nombreIcono = focused ? "heart" : "heart-outline";
  }
  if (route.name === screen.search.tab) {
    nombreIcono = focused ? "magnify" : "magnify";
  }
  if (route.name === screen.ranking.tab) {
    nombreIcono = focused ? "star" : "star-outline";
  }
  return (
    <Icon
      type="material-community"
      name={nombreIcono}
      color={color}
      size={size}
    />
  );
}
