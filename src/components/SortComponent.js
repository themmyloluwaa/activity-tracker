import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Icon } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";
import { connect } from "react-redux";
import { sortActivity } from "../redux/actions/activityAction";
import { SORT_ASC, SORT_DES } from "../redux/actions/types";
const SortComponent = props => {
  const isTrue = false;
  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <Text
        style={{
          color: defaultAppStyle.blackColor,
          fontSize: 20,
          fontWeight: "900"
        }}
      >
        Sort By :
      </Text>
      <TouchableWithoutFeedback onPress={() => props.sort(SORT_ASC)}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            paddingHorizontal: 10
          }}
        >
          <Icon
            name="sort-ascending"
            type="material-community"
            color={isTrue ? defaultAppStyle.blackColor : "#fff"}
          />
          <Text
            style={{
              color: isTrue ? defaultAppStyle.blackColor : "#fff",
              fontSize: 16
            }}
          >
            New
          </Text>
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
            color={isTrue ? defaultAppStyle.blackColor : "#fff"}
          />

          <Text
            style={{
              color: isTrue ? defaultAppStyle.blackColor : "#fff",
              fontSize: 16,
              paddingTop: 2
            }}
          >
            Old
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    sort: type => dispatch(sortActivity(type))
  };
};

export default connect(null, mapDispatchToProps)(React.memo(SortComponent));
