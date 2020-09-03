import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import HeadingComponent from "../components/HeadingComponent";
import ActivityComponent from "../components/ActivityComponent";

const source = require("../images/background.jpg");
const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={source}
      accessibilityRole="image"
    >
      <Layout>
        <HeadingComponent />
        <ActivityComponent navigation={navigation} />
      </Layout>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover"
  }
});
export default HomeScreen;
