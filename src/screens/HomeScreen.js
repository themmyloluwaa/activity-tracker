import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import HeadingComponent from "../components/HeadingComponent";
import ActivityComponent from "../components/ActivityComponent";

const source = require("../images/background.jpg");
const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground style={styles.container} source={source}>
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
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover"
  }
});
export default HomeScreen;
