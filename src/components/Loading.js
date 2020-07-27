import React, { PureComponent } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import BouncingBalls from "react-native-bouncing-ball";

const source = require("../background.jpg");
export default class Loading extends PureComponent {
  render() {
    return (
      <ImageBackground style={styles.container} source={source}>
        <BouncingBalls
          amount={10}
          animationDuration={5000}
          minSpeed={30}
          maxSpeed={200}
          minSize={40}
          maxSize={100}
          style={{
            backgroundColor: "#CDFFCD"
          }}
          useNativeDriver={true}
        />
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
