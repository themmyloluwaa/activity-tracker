import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";
import { connect } from "react-redux";
import { sortActivity } from "../redux/actions/activityAction";
import { SORT_ASC, SORT_DES } from "../redux/actions/types";

const SortComponent = props => {
  return (
    <View style={styles.containerContainer}>
      <Text style={styles.sortTextStyle}>Filter By :</Text>

      <TouchableWithoutFeedback onPress={() => props.sort(SORT_ASC)}>
        <View style={styles.sortChildContainer}>
          <Icon
            name="sort-ascending"
            type="material-community"
            color={defaultAppStyle.blackColor}
          />
          <Text style={styles.newTextStyle}>New</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => props.sort(SORT_DES)}>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <Icon
            name="sort-descending"
            type="material-community"
            color={defaultAppStyle.blackColor}
          />
          <Text style={styles.oldTextStyle}>Old</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  containerContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F7F8FA",
    paddingVertical: 10,
    borderRadius: 5
  },
  sortTextStyle: {
    color: defaultAppStyle.blackColor,
    fontSize: 20,
    fontWeight: "900"
  },
  sortChildContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10
  },
  newTextStyle: {
    color: defaultAppStyle.blackColor,
    fontSize: 16
  },
  oldTextStyle: {
    color: defaultAppStyle.blackColor,
    fontSize: 16,
    paddingTop: 2
  }
});

const mapDispatchToProps = dispatch => {
  return {
    sort: type => dispatch(sortActivity(type))
  };
};

export default connect(null, mapDispatchToProps)(React.memo(SortComponent));
