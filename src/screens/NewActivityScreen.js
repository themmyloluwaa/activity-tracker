import React, { useState } from "react";
import { View } from "react-native";
import Layout from "../components/Layout";
import HeadingComponent from "../components/HeadingComponent";
import ActivityInputComponent from "../components/ActivityInputComponent";

const NewActivityScreen = ({ navigation }) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    console.log(selectedDate);
    setDate(currentDate);
  };
  return (
    <Layout
      style={{
        paddingHorizontal: 0
      }}
    >
      <View style={{ paddingHorizontal: 32 }}>
        <HeadingComponent />
      </View>
      <ActivityInputComponent navigation={navigation} />
    </Layout>
  );
};

export default NewActivityScreen;
