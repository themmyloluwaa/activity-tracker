import React from "react";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Overlay, Button } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";

const DateModalComponent = props => {
  const [modalVisible, setModalVisible, start] = props.modal;
  return (
    <Overlay isVisible={modalVisible}>
      <View
        style={{
          backgroundColor: "#fff",
          width: defaultAppStyle.width
        }}
      >
        {props.mode === "date" ? (
          <DateTimePicker
            value={props.value}
            minimumDate={props.minimumDate}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) =>
              props.onChange(selectedDate, start)
            }
          />
        ) : (
          <DateTimePicker
            value={props.value}
            minimumDate={props.minimumDate}
            mode="time"
            minuteInterval={30}
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) =>
              props.onChange(selectedDate, start)
            }
          />
        )}

        <Button
          title="Done"
          buttonStyle={{
            backgroundColor: defaultAppStyle.tertiaryColor
          }}
          onPress={() => setModalVisible(false)}
          containerStyle={{
            paddingHorizontal: 20,
            marginVertical: 10
          }}
        />
      </View>
    </Overlay>
  );
};

export default React.memo(DateModalComponent);
