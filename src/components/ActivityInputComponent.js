import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { Card, Button, Input } from "react-native-elements";
import DateModalComponent from "../components/DateModalComponent";
import { defaultAppStyle } from "../utils/appStyles";
import { formateDate } from "../utils/dateFormatter";
const ActivityInputComponent = ({ navigation }) => {
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [startDate, setStartDate] = useState(new Date());
  const [defaultDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartDate, setShowStartDate] = useState(false);
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const DateOnChange = (start = true, date) => {
    if (start) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };
  const TimeOnChange = (start = true, time) => {
    console.log(time);

    if (start) {
      setStartTime(time);
    } else {
      setEndTime(time);
    }
  };
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Card containerStyle={styles.cardContainerStyle}>
        <Text style={styles.cardTitleStyle}>Create a New Activity</Text>
        <View
          style={{
            marginTop: 10
          }}
        >
          <Input label="Title" placeholder="50 Characters Maximum" />

          <Text style={styles.descriptionLabelStyle}>Description: max</Text>
          <View style={styles.descriptionInputContainerStyle}>
            <TextInput
              style={{ height: "100%" }}
              onChangeText={text => {
                setDescription(text);
              }}
              value={description}
              placeholder="Start typing"
              multiline
              numberOfLines={4}
            />
          </View>

          <View
            style={{
              marginTop: 10
            }}
          >
            <Text>Choose Start Date & Time</Text>

            <View>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <TouchableWithoutFeedback
                  onPress={() => setShowStartDate(true)}
                >
                  <View style={styles.dateContainer}>
                    <Text style={styles.textStyle}>
                      {startDate.getTime() > defaultDate.getTime()
                        ? formateDate(startDate)
                        : "Start Date"}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => setShowStartTime(true)}
                >
                  <View style={styles.timeContainer}>
                    <Text style={styles.textStyle}>
                      {startTime.getTime() > defaultDate.getTime()
                        ? formateDate(startTime, "en", "time")
                        : "Start Time"}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <DateModalComponent
                onChange={DateOnChange}
                mode="date"
                value={startDate}
                modal={[showStartDate, setShowStartDate, true]}
              />
              <DateModalComponent
                onChange={TimeOnChange}
                mode="time"
                value={startTime}
                modal={[showStartTime, setShowStartTime, true]}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 10
            }}
          >
            <Text>Choose End Date & Time</Text>
            <View>
              <View
                style={{
                  flexDirection: "row"
                }}
              >
                <TouchableWithoutFeedback onPress={() => setShowEndDate(true)}>
                  <View style={styles.dateContainer}>
                    <Text style={styles.textStyle}>
                      {endDate.getTime() > defaultDate.getTime()
                        ? formateDate(endDate)
                        : "End Date"}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setShowEndTime(true)}>
                  <View style={styles.timeContainer}>
                    <Text style={styles.textStyle}>
                      {endTime.getTime() > defaultDate.getTime()
                        ? formateDate(endTime, "en", "time")
                        : "End Time"}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <DateModalComponent
                onChange={DateOnChange}
                mode="date"
                value={endDate}
                modal={[showEndDate, setShowEndDate, false]}
              />
              <DateModalComponent
                onChange={TimeOnChange}
                mode="time"
                value={endTime}
                modal={[showEndTime, setShowEndTime, false]}
              />
            </View>
          </View>
        </View>
        <Button
          title="Done"
          buttonStyle={{
            backgroundColor: defaultAppStyle.secondaryColor,
            marginTop: 10
          }}
          // onPress={() => setModalVisible(false)}
        />
        <Button
          title="Cancel"
          type="outline"
          buttonStyle={{
            backgroundColor: defaultAppStyle.whiteColor
          }}
          titleStyle={{
            color: defaultAppStyle.secondaryColor
          }}
          onPress={() => navigation.navigate("Home")}
          containerStyle={{
            marginVertical: 10
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    padding: 0,
    margin: 0,
    marginTop: 30,
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  cardTitleStyle: {
    color: "#000",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    opacity: 0.6
  },
  dateContainer: {
    paddingRight: 50,
    minWidth: 70,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginTop: 5,
    backgroundColor: defaultAppStyle.greyish
  },
  timeContainer: {
    paddingRight: 50,
    minWidth: 70,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    backgroundColor: defaultAppStyle.greyish
  },
  textStyle: {
    textAlign: "center",
    color: "#000",
    paddingLeft: 10,
    fontWeight: "bold",
    minWidth: 100
  },
  descriptionInputContainerStyle: {
    minHeight: 40,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: "#86939e",
    borderRadius: 5
  },
  descriptionLabelStyle: {
    marginTop: 10,
    color: "#86939e",
    fontSize: 16,
    paddingLeft: 13,
    paddingBottom: 10,
    fontWeight: "bold"
  }
});

export default React.memo(ActivityInputComponent);
