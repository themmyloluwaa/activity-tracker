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
        <Text style={styles.textStyle}>{data.title}</Text>

        <View style={styles.descriptionContainer}>
          <Text style={{ fontStyle: "italic", opacity: 0.7 }}>
            {data.description}
          </Text>
        </View>

        <Divider style={styles.dividerStyle} />

        <View style={styles.dateContainer}>
          <View style={styles.innerDateContainer}>
            <Icon
              color={defaultAppStyle.secondaryColor}
              name="calendar"
              type="antdesign"
              containerStyle={{
                paddingRight: 20
              }}
            />
            <View>
              <Text style={{ fontWeight: "bold" }}>
                {formateDate(data.startDate)}
              </Text>
              <Text style={{ color: "grey" }}>Start Date</Text>
            </View>
          </View>
          <View style={styles.innerDateContainer}>
            <Icon
              color={defaultAppStyle.secondaryColor}
              name="clock"
              type="feather"
              containerStyle={{
                paddingRight: 20
              }}
            />
            <View>
              <Text style={{ fontWeight: "bold" }}>
                {formateDate(data.startTime, "en", "time")}
              </Text>
              <Text style={{ color: "grey" }}>Start Time</Text>
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
              containerStyle={{
                paddingRight: 20
              }}
            />
            <View>
              <Text style={{ fontWeight: "bold" }}>
                {formateDate(data.endDate)}
              </Text>
              <Text style={{ color: "grey" }}>End Date</Text>
            </View>
          </View>

          <View style={styles.innerDateContainer}>
            <Icon
              color={defaultAppStyle.secondaryColor}
              name="clock"
              type="feather"
              containerStyle={{
                paddingRight: 20
              }}
            />
            <View>
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                {formateDate(data.endTime, "en", "time")}
              </Text>
              <Text style={{ color: "grey" }}>End Time</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {props.route.params.buttonShow && (
        <>
          <Button
            title="EDIT"
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
            type="outline"
            buttonStyle={{}}
            containerStyle={{
              marginVertical: 10
            }}
            buttonStyle={{
              borderColor: defaultAppStyle.blackColor
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
    opacity: 0.7
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
    marginVertical: 20
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
