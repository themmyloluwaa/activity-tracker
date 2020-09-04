import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
import { Card, Button, Input } from "react-native-elements";
import DateModalComponent from "../components/DateModalComponent";
import { defaultAppStyle } from "../utils/appStyles";
import { formateDate, isDateEqual } from "../utils/dateFormatter";
import dayjs from "dayjs";

dayjs().format();

const ActivityInputComponent = ({ navigation, ...props }) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [defaultDate, setDefaultTime] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartDate, setShowStartDate] = useState(false);
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    // check that all required fields have been inputed
    setButtonEnable();
  }, [
    title,
    description,
    showStartDate,
    showStartTime,
    showEndDate,
    showEndTime,
    startDate,
    endDate,
    startTime,
    endTime
  ]);

  useEffect(() => {
    // check if it's a creation request or editing request
    if (props.hasOwnProperty("editData") && props.editData !== undefined) {
      setDescription(props.editData.description);
      setTitle(props.editData.title);
      setStartDate(new Date(props.editData.startDate));
      setEndDate(new Date(props.editData.endDate));
      setStartTime(new Date(props.editData.startTime));
      setEndTime(new Date(props.editData.endTime));
    }
  }, [props.editData]);

  // reset all input fields
  const resetInputs = () => {
    setTitle("");
    setDescription("");
    setStartDate(new Date());
    setEndDate(new Date());
    setStartTime(new Date());
    setEndTime(new Date());
    setDefaultTime(new Date());
    setButtonDisabled(true);
  };

  // check input fields are filled
  const setButtonEnable = () => {
    // check that date values are filled
    const dateEqualityCheck = isDateEqual(
      [startTime.getTime(), endTime.getTime(), endDate.getTime()],
      defaultDate.getTime()
    );
    if (title.length === 0 || description.length === 0 || dateEqualityCheck) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

  // date change handler
  const DateOnChange = (date, start = true) => {
    // polyfill to ensure date picker is always closed upon rendering
    if (Platform.OS === "android") {
      setShowStartDate(false);
      setShowStartDate(false);
    }
    if (date !== undefined) {
      return start ? setStartDate(date) : setEndDate(date);
    }
  };

  // time change handler
  const TimeOnChange = (time, start = true) => {
    // polyfill to ensure date picker is always closed upon rendering
    if (Platform.OS === "android") {
      setShowStartTime(false);
      setShowEndTime(false);
    }

    if (time != undefined) {
      // if the modal is not closed
      let minutes = time.getMinutes();
      // if selected date minute is less than, set minute interval to 0
      if (minutes < 30) {
        time.setMinutes("00");
        // else set minute interval to 30
      } else {
        time.setMinutes(30);
      }

      // ensures time is always greater than selected time
      const newTime = dayjs(time)
        .add(10, "day")
        .toDate();

      return start ? setStartTime(newTime) : setEndTime(newTime);
    }
  };

  // data submittion handler
  const handleSubmit = () => {
    const dataToSubmit = {
      title,
      description,
      startDate,
      startTime,
      endDate,
      endTime
    };

    // click handler passed as props
    props.handleClick(dataToSubmit);

    // reset all inputs
    resetInputs();
  };
  return (
    <ScrollView
      style={{
        flex: 1
      }}
    >
      <Card containerStyle={styles.cardContainerStyle}>
        <Text
          style={styles.cardTitleStyle}
          accessible={true}
          accessibilityLabel="Card Header"
        >
          {!!props.editData ? "Edit This Activity" : "Create a New Activity"}
        </Text>
        <View
          style={{
            marginTop: 10
          }}
        >
          <Input
            label={
              <Text style={styles.descriptionLabelStyle}>
                Title{" "}
                <Text
                  style={{
                    fontSize: 10
                  }}
                >
                  {title.length}/25
                </Text>
              </Text>
            }
            accessible={true}
            accessibilityLabel="Title"
            accessibilityHint="Input the title of the activity"
            accessibilityRole="keyboardkey"
            defaultValue={title}
            onChangeText={text => {
              setTitle(text);
            }}
            maxLength={25}
          />
          <Text
            style={styles.descriptionLabelStyle}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Description Label"
          >
            Description{" "}
            <Text
              style={{
                fontSize: 10,
                marginHorizontal: 15
              }}
            >
              {description.length}/250
            </Text>
          </Text>
          <View style={styles.descriptionInputContainerStyle}>
            <TextInput
              style={{ height: "100%" }}
              onChangeText={text => {
                setDescription(text);
              }}
              accessible={true}
              accessibilityLabel="Description"
              accessibilityHint="Input the description of the activity"
              accessibilityRole="keyboardkey"
              maxLength={250}
              defaultValue={description}
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
                  accessible={true}
                  accessibilityLabel="Start Date"
                  accessibilityRole="button"
                  accessibilityHint="Choose a start date"
                >
                  <View style={styles.dateContainer}>
                    <Text style={styles.textStyle}>
                      {formateDate(startDate)}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  accessible={true}
                  accessibilityLabel="Start Time"
                  accessibilityRole="button"
                  accessibilityHint="Choose a start time"
                  onPress={() => setShowStartTime(true)}
                >
                  <View style={styles.timeContainer}>
                    <Text style={styles.textStyle}>
                      {startTime > defaultDate
                        ? formateDate(startTime, "en", "time")
                        : "Start Time"}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <DateModalComponent
                minimumDate={defaultDate}
                onChange={DateOnChange}
                mode="date"
                value={startDate}
                modal={[showStartDate, setShowStartDate, true]}
              />
              <DateModalComponent
                minimumDate={Platform.OS === "android" && dayjs().add(7, "day")}
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
                <TouchableWithoutFeedback
                  onPress={() => setShowEndDate(true)}
                  accessible={true}
                  accessibilityLabel="End Date"
                  accessibilityRole="button"
                  accessibilityHint="Choose an end date"
                >
                  <View style={styles.dateContainer}>
                    <Text style={styles.textStyle}>
                      {endDate.getTime() > defaultDate.getTime()
                        ? formateDate(endDate)
                        : "End Date"}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => setShowEndTime(true)}
                  accessible={true}
                  accessibilityLabel="End Time"
                  accessibilityRole="button"
                  accessibilityHint="Choose an end time"
                >
                  <View style={styles.timeContainer}>
                    <Text style={styles.textStyle}>
                      {endTime > defaultDate
                        ? formateDate(endTime, "en", "time")
                        : "End Time"}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <DateModalComponent
                minimumDate={startDate}
                onChange={DateOnChange}
                mode="date"
                value={endDate}
                modal={[showEndDate, setShowEndDate, false]}
              />
              <DateModalComponent
                minimumDate={Platform.OS === "android" && dayjs().add(7, "day")}
                onChange={TimeOnChange}
                mode="time"
                value={endTime}
                modal={[showEndTime, setShowEndTime, false]}
              />
            </View>
          </View>
        </View>
        <Button
          accessible={true}
          accessibilityLabel="Done"
          accessibilityRole="button"
          accessibilityHint="Press me to complete this action"
          title="DONE"
          buttonStyle={{
            backgroundColor: defaultAppStyle.secondaryColor,
            marginTop: 10
          }}
          disabled={buttonDisabled}
          onPress={() => {
            handleSubmit();
          }}
        />
        <Button
          accessible={true}
          accessibilityLabel="Cancel"
          accessibilityRole="button"
          accessibilityHint="Press me to cancel this action"
          title="CANCEL"
          type="outline"
          buttonStyle={{
            backgroundColor: defaultAppStyle.whiteColor,
            borderColor: defaultAppStyle.blackColor
          }}
          titleStyle={{
            color: defaultAppStyle.secondaryColor
          }}
          onPress={() => {
            props.cancel ? props.cancel() : navigation.navigate("Home");
            resetInputs();
          }}
          containerStyle={{
            marginVertical: 10
          }}
        />
      </Card>
    </ScrollView>
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
    paddingVertical: 20,
    backgroundColor: "#F9FAFC"
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
    marginTop: 5
  },
  timeContainer: {
    paddingRight: 50,
    minWidth: 70,
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  textStyle: {
    textAlign: "center",
    color: defaultAppStyle.secondaryColor,
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
