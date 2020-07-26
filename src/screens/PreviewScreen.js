import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import Layout from "../components/Layout";
import { Icon, Divider, Button, Overlay } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";
import ActivityInputComponent from "../components/ActivityInputComponent";
import PreviewComponent from "../components/PreviewComponent";
const PreviewScreen = ({ navigation }) => {
  return (
    <Layout
      style={{
        backgroundColor: "#fff"
      }}
    >
      <Icon
        containerStyle={{
          alignSelf: "flex-start",
          marginVertical: 30
        }}
        onPress={() => navigation.goBack()}
        name="arrowleft"
        size={30}
        type="antdesign"
        color={defaultAppStyle.blackColor}
      />
      <PreviewComponent />
    </Layout>
  );
};

export default PreviewScreen;
