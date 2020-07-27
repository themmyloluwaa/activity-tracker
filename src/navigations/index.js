import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
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

const RootNavigator = () => {
  const scheme = useColorScheme();
  console.log(scheme);
  return (
    <NavigationContainer theme={DarkTheme}>
      <WrapperNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
