import React from "react";
import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Overlay, Button } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";

const DateModalComponent = props => {
  // desctructure the modal props options passed into the date modal
  const [modalVisible, setModalVisible, start] = props.modal;
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
          minimumDate={props.minimumDate}
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
