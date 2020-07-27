import React, { useState, useEffect } from "react";

import { View, Text, ScrollView, Alert } from "react-native";
import { Icon, Divider, Button, Overlay } from "react-native-elements";
import ActivityInputComponent from "./ActivityInputComponent";
import { defaultAppStyle } from "../utils/appStyles";
import { formateDate } from "../utils/dateFormatter";

const PreviewComponent = props => {
  const [overLayVisible, setOverLayVisible] = useState(false);
  const [data, setData] = useState(props.activity);
  useEffect(() => {
    props.find(props.route.params.key);
  }, [props.route]);
  return (
    <>
      <ScrollView>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            opacity: 0.7
          }}
        >
          {data.title}
        </Text>

        <View
          style={{
            minHeight: 50,
            maxHeight: 400,
            marginVertical: 20
          }}
        >
          {/* <Text style={{ fontSize: 20, paddingBottom: 10 }}>Description</Text> */}
          <Text style={{ fontStyle: "italic", opacity: 0.7 }}>
            {data.description}
          </Text>
        </View>
        <Divider
          style={{
            backgroundColor: defaultAppStyle.secondaryColor,
            height: 4,
            width: 60,
            marginVertical: 15
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20
            }}
          >
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
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20
            }}
          >
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
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20
            }}
          >
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
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20
            }}
          >
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
        onPress={() => {
          Alert.alert("Delete Alert", "Are you sure you want to delete", [
            {
              text: "Yes",
              onPress: () => console.log("yes")
            },
            {
              text: "No",
              onPress: () => null
            }
          ]);
        }}
      />
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
            edit={true}
            cancel={() => setOverLayVisible(false)}
          />
        </View>
      </Overlay>
    </>
  );
};

export default React.memo(PreviewComponent);
