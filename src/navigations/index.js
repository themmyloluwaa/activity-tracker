import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import createAppBottomNavigator from "./appBottomNavigation";

import PreviewScreen from "../screens/PreviewScreen";
import EditSettings from "../screens/EditSettingScreen";
const AppStackNavigator = createStackNavigator();

const WrapperNavigator = () => (
  <AppStackNavigator.Navigator
    initialRouteName="App"
    screenOptions={{
      header: () => null
    }}
  >
    <AppStackNavigator.Screen component={createAppBottomNavigator} name="App" />
    <AppStackNavigator.Screen component={PreviewScreen} name="Preview" />
    <AppStackNavigator.Screen component={EditSettings} name="EditSetting" />
  </AppStackNavigator.Navigator>
);

const RootNavigator = () => (
  <NavigationContainer>
    <WrapperNavigator />
  </NavigationContainer>
);

export default RootNavigator;