import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { defaultAppStyle, themeStyle } from "../utils/appStyles";
const Layout = props => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          backgroundColor: themeStyle.backgroundColor,
          flex: 1
          // marginTop: StatusBar.currentHeight || 0
        }}
      >
        <View
          style={[
            {
              flex: 1,
              paddingHorizontal: 32
            },
            props.style
          ]}
        >
          {props.children}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Layout;
