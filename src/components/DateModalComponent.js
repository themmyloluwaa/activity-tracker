import React, { useState } from "react";
import { View, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Overlay, Button } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";

const DateModalComponent = props => {
  // desctructure the modal props options passed into the date modal

  useState(() => undefined, [props]);
  const [modalVisible, setModalVisible, start] = props.modal;
  if (Platform.OS === "ios") {
    return (
      <Overlay isVisible={modalVisible}>
        <View
          style={{
            backgroundColor: "#fff",
            width: defaultAppStyle.width
          }}
        >
          <DateTimePicker
            value={props.value}
            minimumDate={props.mode === "date" && props.minimumDate}
            accessibilityHint={
              props.mode === "date"
                ? "Swipe up and down to select the day, month and year"
                : "Swipe up and down to select the hour minute and pm or am"
            }
            accessibilityLabel={props.mode === "date" ? "Date" : "Time"}
            mode={props.mode}
            minuteInterval={30}
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) =>
              props.onChange(selectedDate, start)
            }
          />
          <Button
            title="Done"
            buttonStyle={{
              backgroundColor: defaultAppStyle.tertiaryColor
            }}
            accessibilityHint="Press me to close the picker"
            accessibilityLabel="Done Button"
            onPress={() => setModalVisible(false)}
            containerStyle={{
              paddingHorizontal: 20,
              marginVertical: 10
            }}
          />
        </View>
      </Overlay>
    );
  } else if (Platform.OS === "android" && modalVisible) {
    return (
      <DateTimePicker
        value={
          Platform.OS === "android" && props.mode === "time"
            ? new Date(props.minimumDate)
            : props.value
        }
        accessibilityHint={
          props.mode === "date"
            ? "Swipe up and down to select the day, month and year"
            : "Swipe up and down to select the hour minute and pm or am"
        }
        accessibilityLabel={props.mode === "date" ? "Date" : "Time"}
        minimumDate={props.minimumDate}
        mode={props.mode}
        is24Hour={false}
        display={props.mode === "date" ? "calendar" : "clock"}
        onChange={(event, selectedDate) => {
          setModalVisible(false);
          props.onChange(selectedDate, start);
        }}
      />
    );
  }
};

export default React.memo(DateModalComponent);
