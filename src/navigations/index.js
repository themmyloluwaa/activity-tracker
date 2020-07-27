import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import createAppBottomNavigator from "./appBottomNavigation";

import PreviewScreen from "../screens/PreviewScreen";
const AppStackNavigator = createStackNavigator();

const WrapperNavigator = () => {
  return (
    <AppStackNavigator.Navigator
      initialRouteName="App"
      screenOptions={{
        header: () => null
      }}
    >
      <AppStackNavigator.Screen
        component={createAppBottomNavigator}
        name="App"
      />
      <AppStackNavigator.Screen component={PreviewScreen} name="Preview" />
    </AppStackNavigator.Navigator>
  );
};

// navigation definition for all screens in the app
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <WrapperNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
