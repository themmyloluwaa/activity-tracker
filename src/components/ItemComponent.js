import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";
import { formateDate } from "../utils/dateFormatter";

const ItemComponent = ({ item, icon, navigation, buttonShow }) => {
  return (
    <ListItem
      containerStyle={styles.containerStyle}
      accessible={true}
      accessibilityRole="button"
      accessibilityHint="Press me for more details on this activity"
      accessibilityLabel="Activity Group"
      onPress={() => {
        navigation.navigate("Preview", { key: item.key, buttonShow });
      }}
      title={
        <View
          style={{
            flexDirection: "row"
          }}
          accessibilityRole="text"
          accessible={true}
        >
          <Text
            accessibilityRole="text"
            accessibilityLabel="Item Title"
            accessible={true}
            style={{
              fontSize: 28
            }}
          >
            {item.title}
          </Text>
          <Icon
            name="dot-single"
            type="entypo"
            color={item.color}
            style={{ paddingTop: 5 }}
            size={30}
          />
        </View>
      }
      titleStyle={styles.titleStyle}
      subtitle={
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10
          }}
          accessibilityRole="text"
          accessibilityLabel="Start and End Time"
          accessible={true}
        >
          <Icon
            name="clock"
            type="feather"
            size={15}
            style={{ paddingRight: 10, fontWeight: "bold", paddingTop: 1 }}
          />
          <Text>
            {formateDate(item.startTime, "en", "time")} -{" "}
            {formateDate(item.endTime, "en", "time")}
          </Text>
        </View>
      }
      rightElement={() => (
        <Icon
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Press Me!"
          accessibilityHint="Deletes this activity"
          name={icon.name}
          color={icon.color}
          onPress={() => icon.onPress(item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    minHeight: 80,
    borderRadius: 10,
    backgroundColor: "#F9FAFC",
    marginBottom: 15,
    maxWidth: defaultAppStyle.width - 32
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default React.memo(ItemComponent);
