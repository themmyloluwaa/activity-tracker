import React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { defaultAppStyle } from "../utils/appStyles";
const Layout = props => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          backgroundColor: defaultAppStyle.backgroundColor,
          flex: 1
        }}
      >
        <View style={[styles.innerContainerStyle, props.style]}>
          {props.children}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  innerContainerStyle: {
    flex: 1,
    paddingHorizontal: 32
  }
});

export default React.memo(Layout);
