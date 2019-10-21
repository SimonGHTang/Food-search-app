import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";

import SearchScreen from "./src/screens/SearchScreen";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  { initialRouteName: "Search", defaultNavigationOptions: { title: "Business Search" } }
);

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
