import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { defaultAppStyle, themeStyle } from "../utils/appStyles";

const HeadingComponent = () => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingPrimary}>Hello,</Text>
      <Text style={styles.headingSecondary}>
        Temiloluwa Ojo Philipiiddididi
      </Text>
    </View>
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

export default HeadingComponent;
