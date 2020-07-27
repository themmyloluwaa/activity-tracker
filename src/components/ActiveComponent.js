import React from "react";
import { FlatList, Text } from "react-native";
import ItemComponent from "./ItemComponent";
import { themeStyle, defaultAppStyle } from "../utils/appStyles";
import { connect } from "react-redux";
import { deleteActivity } from "../redux/actions/activityAction";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-33ikad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fskdd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145dkdkd71e29d72",
    title: "Third Item"
  }
];
const ActiveComponent = ({ navigation, ...props }) => {
  return (
    <FlatList
      data={props.activities}
      extraData={props.activities}
      renderItem={({ item }) => (
        <ItemComponent
          item={item}
          navigation={navigation}
          icon={{
            name: "delete",
            color: "red",
            onPress: key => props.delete(key)
          }}
        />
      )}
      keyExtractor={item => item.key}
      ListHeaderComponent={() => (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            padding: 20,
            color: defaultAppStyle.whiteColor
          }}
        >
          Ongoing Activities
        </Text>
      )}
    />
  );
};

const mapStateToProps = state => {
  return {
    activities: state.activitiesReducer.activities
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deleteActivity(key))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ActiveComponent));
