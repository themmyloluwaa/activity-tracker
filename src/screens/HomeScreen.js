import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { themeStyle, defaultAppStyle } from "../utils/appStyles";
import Layout from "../components/Layout";
import { ButtonGroup } from "react-native-elements";

const Active = () => <Text>Active</Text>;
const Completed = () => <Text>Completed</Text>;

const HomeScreen = () => {
  const [index, setIndex] = useState(0);

  const buttons = ["Active", "Completed"];
  return (
    <Layout>
      <View style={styles.headingContainer}>
        <Text style={styles.headingPrimary}>Hello,</Text>
        <Text style={styles.headingSecondary}>
          Temiloluwa Ojo Philipiiddididi
        </Text>
      </View>
      <ButtonGroup
        onPress={a => {
          setIndex(a);
        }}
        selectedIndex={index}
        buttons={buttons}
        containerStyle={{
          height: 48,
          width: "100%",
          backgroundColor: themeStyle.textColor
        }}
        selectedButtonStyle={{
          backgroundColor: defaultAppStyle.primaryColor,

          borderBottomWidth: defaultAppStyle.whiteColor
        }}
        selectedTextStyle={{
          color: defaultAppStyle.whiteColor
        }}
        textStyle={{
          fontWeight: "bold",
          fontSize: 14
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    maxWidth: defaultAppStyle.width,
    marginVertical: 30
  },
  headingPrimary: {
    color: defaultAppStyle.greyColor,
    fontSize: 30,
    paddingBottom: 10
  },
  headingSecondary: {
    color: themeStyle.textColor,
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default HomeScreen;
