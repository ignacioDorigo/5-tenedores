import React from "react";
import { screen } from "../utils";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Creador del Bottom Tab.
const Tab = createBottomTabNavigator();

// Stacks
import { AccountStack } from "./AccountStack";
import { FavoritesStack } from "./FavoritesStack";
import { RankingStack } from "./RankingStack";
import { RestaurantsStack } from "./RestaurantsStack";
import { SearchStack } from "./SearchStack";
import { Icon } from "@rneui/themed";

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00A680",
        tabBarInactiveTintColor: "#000",
        tabBarIcon: ({ focused, color, size }) =>
          designarIcono(route, focused, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurants.restaurantsTab}
        component={RestaurantsStack}
        options={{ title: "Restaurants" }}
      />
      <Tab.Screen
        name={screen.favorites.favoritesTab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.ranking.rankingTab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />

      <Tab.Screen
        name={screen.search.searchTab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.accountTab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function designarIcono(route, focused, color, size) {
  let nombreIcono = "";
  if (route.name === screen.account.accountTab) {
    nombreIcono = focused ? "account" : "account-outline";
  }
  if (route.name === screen.favorites.favoritesTab) {
    nombreIcono = focused ? "heart" : "heart-outline";
  }

  if (route.name === screen.ranking.rankingTab) {
    nombreIcono = focused ? "star" : "star-outline";
  }

  if (route.name === screen.search.searchTab) {
    nombreIcono = "magnify";
  }

  if (route.name === screen.restaurants.restaurantsTab) {
    nombreIcono = focused ? "compass" : "compass-outline";
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
