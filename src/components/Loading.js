import React, { PureComponent } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  ActivityIndicator
} from "react-native";

const source = require("../images/background.jpg");
export default class Loading extends PureComponent {
  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={source}
        accessible={false}
      >
        <ActivityIndicator
          color="#fff"
          size="large"
          style={{
            height: 200,
            backgroundColor: "transparent"
          }}
        />
        <Text
          style={{ fontSize: 40, color: "#fff" }}
          accessible={true}
          accessibilityRole="text"
          accessibilityLabel="Loading"
        >
          Loading
        </Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover"
  }
});
