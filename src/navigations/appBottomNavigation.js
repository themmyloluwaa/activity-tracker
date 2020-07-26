import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";

import HomeScreen from "../screens/HomeScreen";
import NewActivityScreen from "../screens/NewActivityScreen";
import SettingScreen from "../screens/SettingScreen";
const BottomNavigator = createMaterialBottomTabNavigator();

const createAppBottomNavigator = () => (
  <BottomNavigator.Navigator initialRouteName="Home" labeled={false}>
    <BottomNavigator.Screen
      name="Home"
      options={{
        tabBarIcon: () => <Icon name="home" size={25} color="#fff" />
      }}
      component={HomeScreen}
    />
    <BottomNavigator.Screen
      name="New"
      options={{
        tabBarIcon: () => (
          <Icon name="plus" type="antdesign" color="#fff" size={25} />
        )
      }}
      component={NewActivityScreen}
    />
    <BottomNavigator.Screen
      name="Settings"
      options={{
        tabBarIcon: () => <Icon name="settings" color="#fff" size={25} />
      }}
      component={SettingScreen}
    />
  </BottomNavigator.Navigator>
);

export default createAppBottomNavigator;
