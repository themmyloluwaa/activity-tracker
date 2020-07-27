import React from "react";
import { View, Text } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";
import { formateDate } from "../utils/dateFormatter";

const ItemComponent = ({ item, icon, navigation, buttonShow }) => {
  return (
    <ListItem
      containerStyle={{
        minHeight: 80,
        borderRadius: 10,
        backgroundColor: "#F9FAFC",
        marginBottom: 15,
        maxWidth: defaultAppStyle.width - 32
      }}
      contentContainerStyle={{
        minHeight: 80,
        backgroundColor: "#F9FAFC"
      }}
      onPress={() => {
        navigation.navigate("Preview", { key: item.key, buttonShow });
      }}
      title={
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              fontSize: 28
            }}
          >
            {item.title}
          </Text>
          <Icon name="dot-single" type="entypo" color={item.color} size={30} />
        </View>
      }
      titleStyle={{
        fontSize: 25,
        fontWeight: "bold"
      }}
      subtitle={
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10
          }}
        >
          <Icon
            name="clock"
            type="feather"
            size={15}
            style={{ paddingRight: 10, fontWeight: "bold" }}
          />
          <Text>
            {formateDate(item.startTime, "en", "time")} -{" "}
            {formateDate(item.endTime, "en", "time")}
          </Text>
        </View>
      }
      rightElement={() => (
        <Icon
          name={icon.name}
          color={icon.color}
          onPress={() => icon.onPress(item.key)}
        />
      )}
    />
  );
};

export default React.memo(ItemComponent);
