import React, { useState } from "react";

import { View, Text, ScrollView, Alert } from "react-native";
import { Icon, Divider, Button, Overlay } from "react-native-elements";
import ActivityInputComponent from "./ActivityInputComponent";
import { defaultAppStyle } from "../utils/appStyles";

const PreviewComponent = () => {
  const [overLayVisible, setOverLayVisible] = useState(false);

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
          Information About Selected Activity
        </Text>

        <View
          style={{
            minHeight: 200,
            maxHeight: 400,
            marginVertical: 20
          }}
        >
          {/* <Text style={{ fontSize: 20, paddingBottom: 10 }}>Description</Text> */}
          <Text style={{ fontStyle: "italic", opacity: 0.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
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
              <Text style={{ fontWeight: "bold" }}>22/10/2020</Text>
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
              <Text style={{ fontWeight: "bold" }}>22/10/2020</Text>
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
              <Text style={{ fontWeight: "bold" }}>22/10/2020</Text>
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
              <Text style={{ fontWeight: "bold" }}>22/10/2020</Text>
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
