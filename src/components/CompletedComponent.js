import React from "react";
import { FlatList, Text } from "react-native";
import ItemComponent from "./ItemComponent";
import { themeStyle, defaultAppStyle } from "../utils/appStyles";
import { connect } from "react-redux";

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
const CompletedComponent = ({ navigation, ...props }) => {
  console.log("completed");
  return (
    <FlatList
      data={props.completed}
      extraData={props.completed}
      renderItem={({ item }) => (
        <ItemComponent
          title={item}
          navigation={navigation}
          icon={{
            name: "check-circle",
            color: defaultAppStyle.primaryColor,
            onPress: () => null
          }}
        />
      )}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => (
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            padding: 20,
            color: defaultAppStyle.whiteColor
          }}
        >
          Completed Activities
        </Text>
      )}
    />
  );
};

const mapStateToProps = state => {
  return {
    completed: state.activitiesReducer.activities.filter(
      activity => new Date() > new Date(activity.endDate)
    )
  };
};

export default connect(mapStateToProps, null)(React.memo(CompletedComponent));
