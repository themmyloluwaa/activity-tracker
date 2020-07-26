import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";

const SortComponent = () => {
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
    </View>
  );
};

export default React.memo(SortComponent);
