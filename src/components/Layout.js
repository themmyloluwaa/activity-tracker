import React from "react";
import { View, StatusBar } from "react-native";
import { defaultAppStyle, themeStyle } from "../utils/appStyles";
const Layout = props => {
  return (
    <View
      style={{
        backgroundColor: themeStyle.backgroundColor,
        flex: 1,
        paddingHorizontal: 32
      }}
    >
      <StatusBar barStyle="light-content" />
      <View
        style={{
          marginTop: defaultAppStyle.marginTop * 2
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

export default Layout;
