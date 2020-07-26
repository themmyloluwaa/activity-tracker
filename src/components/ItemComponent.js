import React from "react";
import { View, Text } from "react-native";
import { ButtonGroup, ListItem, Icon } from "react-native-elements";
import genColors from "../utils/genColors";
import { themeStyle, defaultAppStyle } from "../utils/appStyles";

const ItemComponent = ({ title, icon, navigation }) => {
  return (
    <ListItem
      containerStyle={{
        minHeight: 80,
        borderRadius: 10,
        backgroundColor: "#F9FAFC",
        marginBottom: 15,
        maxWidth: defaultAppStyle.width - 32
      }}
      onPress={() => navigation.navigate("Preview", { data: title })}
      title={() => (
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
            {title}
          </Text>
          <Icon name="dot-single" type="entypo" color={genColors()} size={30} />
        </View>
      )}
      titleStyle={{
        fontSize: 25,
        fontWeight: "bold"
      }}
      subtitle={() => (
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
          <Text>7:30am - 8:00am</Text>
        </View>
      )}
      rightElement={() => (
        <Icon name={icon.name} color={icon.color} onPress={icon.onPress} />
      )}
    />
  );
};

export default ItemComponent;
