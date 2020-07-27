import React from "react";
import { FlatList, Text } from "react-native";
import ItemComponent from "./ItemComponent";
import { defaultAppStyle } from "../utils/appStyles";
import { connect } from "react-redux";
import { deleteActivity } from "../redux/actions/activityAction";
import SortComponent from "./SortComponent";

const ActiveComponent = ({ navigation, ...props }) => {
  return (
    <>
      {/* import the sort component for sorting activities */}
      <SortComponent />

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
            buttonShow={true}
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
    </>
  );
};

// retrieve activities from redux store
const mapStateToProps = state => {
  return {
    activities: state.activitiesReducer.activities
  };
};

// retrieve actions for redux
const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deleteActivity(key))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ActiveComponent));
