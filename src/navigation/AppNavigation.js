import React from "react";
import { screen } from "../utils";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Creador del Bottom Tab.
const Tab = createBottomTabNavigator();

// Stacks
import { AccountStack } from "./AccountStack";
import {FavoritesStack} from './FavoritesStack';

export default function AppNavigation() {
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name={screen.account.accountTab} component={AccountStack} />
      <Tab.Screen name={screen.favorites.favoritesTab} component={FavoritesStack} />
      {/* <Tab.Screen name={screen.ranking.rankingTab} component={} />
      <Tab.Screen name={screen.restaurants.restaurantsTab} component={} />
      <Tab.Screen name={screen.search.searchTab} component={} /> */}
    </Tab.Navigator>
  );
}
