import React from "react";
import Layout from "../components/Layout";
import HeadingComponent from "../components/HeadingComponent";
import ActivityComponent from "../components/ActivityComponent";

const HomeScreen = ({ navigation }) => {
  return (
    <Layout>
      <HeadingComponent />
      <ActivityComponent navigation={navigation} />
    </Layout>
  );
};

export default HomeScreen;
