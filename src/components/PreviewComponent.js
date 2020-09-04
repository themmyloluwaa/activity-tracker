import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Alert, StyleSheet } from "react-native";
import { Icon, Divider, Button, Overlay } from "react-native-elements";
import ActivityInputComponent from "./ActivityInputComponent";
import { defaultAppStyle } from "../utils/appStyles";
import { formateDate } from "../utils/dateFormatter";

const PreviewComponent = props => {
  const [overLayVisible, setOverLayVisible] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", () => {
      const activityVariable = props.activities.find(
        activity => activity.key === props.route.params.key
      );

      setData(activityVariable);
    });

    return unsubscribe;
  }, [props.navigation, props.route, props.activities]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener("blur", () => {
      setData({});
    });

    return unsubscribe;
  }, [props.navigation, props.route, props.activities]);

  const handleDeleteClick = () => {
    Alert.alert("Delete Alert", "Are you sure you want to delete", [
      {
        text: "Yes",
        onPress: () => {
          props.delete(data.key);
          props.navigation.goBack();
        }
      },
      {
        text: "No",
        onPress: () => null
      }
    ]);
  };

  return (
    <>
      <ScrollView>
        <Text
          style={styles.textStyle}
          accessible={true}
          accessibilityLabel="Title"
          accessibilityHint="Title of the activity"
          accessibilityRole="text"
        >
          {data.title}
        </Text>

        <View style={styles.descriptionContainer}>
          <Text
            style={{
              fontWeight: "900",
              fontStyle: "italic",
              fontSize: 15,
              lineHeight: 24,
              color: defaultAppStyle.whiteColor
            }}
          >
            {data.description}
          </Text>
        </View>

        <Divider style={styles.dividerStyle} accessible={false} />

        <View style={styles.dateContainer}>
          <View style={styles.innerDateContainer}>
            <Icon
              color={defaultAppStyle.secondaryColor}
              name="calendar"
              type="antdesign"
              accesible={false}
              containerStyle={{
                paddingRight: 20
              }}
            />
            <View>
              <Text
                style={{ fontWeight: "bold", color: "#fff" }}
                accessible={true}
                accessibilityLabel="Start Date"
                accessibilityHint="Start date of the activity"
                accessibilityRole="text"
              >
                {formateDate(data.startDate)}
              </Text>
              <Text style={{ color: "#fff" }} accessible={false}>
                Start Date
              </Text>
            </View>
          </View>
          <View style={styles.innerDateContainer}>
            <Icon
              color={defaultAppStyle.secondaryColor}
              name="clock"
              type="feather"
              accessible={false}
              containerStyle={{
                paddingRight: 20
              }}
            />
            <View>
              <Text
                style={{ fontWeight: "bold", color: "#fff" }}
                accessible={true}
                accessibilityLabel="Start Time"
                accessibilityHint="Start time of the activity"
                accessibilityRole="text"
              >
                {formateDate(data.startTime, "en", "time")}
              </Text>
              <Text style={{ color: "#fff" }}>Start Time</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10
          }}
        >
          <View style={styles.innerDateContainer}>
            <Icon
              color={defaultAppStyle.secondaryColor}
              name="calendar"
              type="antdesign"
              accessible={false}
              containerStyle={{
                paddingRight: 20
              }}
            />
            <View>
              <Text
                style={{ fontWeight: "bold", color: "#fff" }}
                accessible={true}
                accessibilityLabel="End Date"
                accessibilityHint="End date of the activity"
                accessibilityRole="text"
              >
                {formateDate(data.endDate)}
              </Text>
              <Text style={{ color: "#fff" }}>End Date</Text>
            </View>
          </View>

          <View style={styles.innerDateContainer}>
            <Icon
              color={defaultAppStyle.secondaryColor}
              name="clock"
              accessible={false}
              type="feather"
              containerStyle={{
                paddingRight: 20
              }}
            />
            <View>
              <Text
                style={{ fontWeight: "bold", color: "#fff" }}
                accessible={true}
                accessibilityLabel="End Time"
                accessibilityHint="End time of the activity"
                accessibilityRole="text"
              >
                {" "}
                {formateDate(data.endTime, "en", "time")}
              </Text>
              <Text style={{ color: "#fff" }}>End Time</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {props.route.params.buttonShow && (
        <>
          <Button
            title="EDIT"
            accessible={true}
            accessibilityLabel="Edit"
            accessibilityHint="Edit this activity"
            accessibilityRole="button"
            buttonStyle={{
              backgroundColor: defaultAppStyle.secondaryColor
            }}
            onPress={() => setOverLayVisible(true)}
            containerStyle={{
              marginVertical: 10
            }}
          />

          <Button
            title="DELETE"
            accessible={true}
            accessibilityLabel="Delete"
            accessibilityHint="Delete this activity. I will return to homescreen when pressed."
            accessibilityRole="button"
            type="outline"
            buttonStyle={{}}
            containerStyle={{
              marginVertical: 10
            }}
            buttonStyle={{
              borderColor: defaultAppStyle.blackColor,
              backgroundColor: "#fff"
            }}
            titleStyle={{
              color: "red"
            }}
            onPress={() => handleDeleteClick()}
          />
        </>
      )}
      <Overlay
        isVisible={overLayVisible}
        overlayStyle={{
          backgroundColor: "transparent"
        }}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="red"
      >
        <View
          style={{
            paddingTop: 200,
            height: "100%"
          }}
          accessible={false}
        >
          <ActivityInputComponent
            cancel={() => setOverLayVisible(false)}
            editData={data}
            handleClick={editData => {
              const dataToEdit = { ...data, ...editData };
              props.edit(dataToEdit);
              setData(dataToEdit);
              setOverLayVisible(false);
            }}
          />
        </View>
      </Overlay>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: defaultAppStyle.whiteColor
  },
  dividerStyle: {
    backgroundColor: defaultAppStyle.secondaryColor,
    height: 4,
    width: 60,
    marginVertical: 15
  },
  descriptionContainer: {
    minHeight: 50,
    maxHeight: 400,
    marginVertical: 20,
    backgroundColor: "#000",
    padding: 10,
    opacity: 0.76
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10
  },
  innerDateContainer: {
    flexDirection: "row",
    marginHorizontal: 20
  }
});

export default React.memo(PreviewComponent);
