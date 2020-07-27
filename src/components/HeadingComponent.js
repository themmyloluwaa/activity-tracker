import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { defaultAppStyle, themeStyle } from "../utils/appStyles";
import { connect } from "react-redux";

const HeadingComponent = props => {
  return (
    <View style={styles.headingContainer}>
      {props.name.length === 0 && (
        <Text style={styles.headingPrimary}>Hello,</Text>
      )}
      <Text style={styles.headingSecondary}>
        {props.name.length === 0 ? "There" : `${props.name}'s Activities`}
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

const mapStateToProps = state => {
  return {
    name: state.settingsReducer.name
  };
};

export default connect(mapStateToProps, null)(React.memo(HeadingComponent));
