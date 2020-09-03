import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { defaultAppStyle } from "../utils/appStyles";
import { connect } from "react-redux";

const HeadingComponent = props => {
  return (
    <View
      style={styles.headingContainer}
      accessible={true}
      accessibilityLabel="Greeting Header"
      accessibilityRole="header"
    >
      {props.name.length === 0 && (
        <Text style={styles.headingPrimary}>Hello, There</Text>
      )}
      {props.name.length > 0 && (
        <Text style={styles.headingSecondary}>
          {`${props.name}'s Activities`}
        </Text>
      )}
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
    color: defaultAppStyle.textColor,
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
