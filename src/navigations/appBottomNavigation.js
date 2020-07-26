import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";
const BottomNavigator = createMaterialBottomTabNavigator();

const createAppBottomNavigator = () => (
  <BottomNavigator.Navigator>
    <BottomNavigator.Screen
      name="Home"
      options={{
        tabBarIcon: () => <Icon name="home-outline" type="ionicon" size={25} />
      }}
    />
    <BottomNavigator.Screen
      name="New"
      options={{
        tabBarIcon: () => <Icon name="home-outline" type="ionicon" size={25} />
      }}
    />
    <BottomNavigator.Screen
      name="Settings"
      options={{
        tabBarIcon: () => <Icon name="home-outline" type="ionicon" size={25} />
      }}
    />
  </BottomNavigator.Navigator>
);
