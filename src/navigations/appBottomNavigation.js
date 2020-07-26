import React from "react";
import { Dimensions } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "react-native-elements";

import HomeScreen from "../screens/HomeScreen";
import NewActivityScreen from "../screens/NewActivityScreen";
import SettingScreen from "../screens/SettingScreen";
import { defaultAppStyle, themeStyle } from "../utils/appStyles";

const { width, height } = Dimensions.get("window");
const BottomNavigator = createMaterialBottomTabNavigator();

const createAppBottomNavigator = () => (
  <BottomNavigator.Navigator
    initialRouteName="Home"
    labeled={false}
    barStyle={{ backgroundColor: "#000", width }}
  >
    <BottomNavigator.Screen
      name="Home"
      options={{
        tabBarIcon: () => <Icon name="home" size={30} color="#fff" />
      }}
      component={HomeScreen}
    />
    <BottomNavigator.Screen
      name="New"
      options={{
        tabBarIcon: () => (
          <Icon
            name="plus"
            type="antdesign"
            containerStyle={{
              backgroundColor: defaultAppStyle.secondaryColor,
              borderRadius: 5,
              width: 35,
              height: 35
            }}
            style={{}}
            color="#fff"
            size={30}
          />
        )
      }}
      component={NewActivityScreen}
    />
    <BottomNavigator.Screen
      name="Settings"
      options={{
        tabBarIcon: () => (
          <Icon
            name="settings"
            containerStyle={{
              marginRight: -2
            }}
            size={30}
            color="#fff"
          />
        )
      }}
      component={SettingScreen}
    />
  </BottomNavigator.Navigator>
);

export default createAppBottomNavigator;
