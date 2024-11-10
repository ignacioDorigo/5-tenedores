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

export default function AppNavigation() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name={screen.account.accountTab} component={AccountStack} />
      <Tab.Screen
        name={screen.favorites.favoritesTab}
        component={FavoritesStack}
      />
      <Tab.Screen name={screen.ranking.rankingTab} component={RankingStack} />
      <Tab.Screen
        name={screen.restaurants.restaurantsTab}
        component={RestaurantsStack}
      />
      <Tab.Screen name={screen.search.searchTab} component={SearchStack} />
    </Tab.Navigator>
  );
}
