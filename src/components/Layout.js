import React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
const Layout = props => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={[
          {
            flex: 1
          },
          props.layoutStyle
        ]}
      >
        <View
          style={[styles.innerContainerStyle, props.style]}
          importantForAccessibility="no"
        >
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
