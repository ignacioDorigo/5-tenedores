import React from "react";
import { screen } from "../utils";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Pantallas
import { RestaurantsStack } from "./RestaurantsStack";
import { RankingStack } from "./RankingStack";
import { FavoritesStack } from "./FavoritesStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator initialRouteName={screen.restaurants.tab}>
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
