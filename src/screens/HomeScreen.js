import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { themeStyle, defaultAppStyle } from "../utils/appStyles";
import Layout from "../components/Layout";
import { ButtonGroup } from "react-native-elements";
import HeadingComponent from "../components/HeadingComponent";
import ActiveComponent from "../components/ActiveComponent";
import CompletedComponent from "../components/CompletedComponent";

const renderComponent = (index, navigation) => {
  if (index === 0) {
    return <ActiveComponent navigation={navigation} />;
  } else {
    return <CompletedComponent navigation={navigation} />;
  }
};
const HomeScreen = ({ navigation, ...props }) => {
  const [index, setIndex] = useState(0);
  //   const [counter, setCounter] = useState(0);

  const buttons = ["Active", "Completed"];
  return (
    <Layout>
      <HeadingComponent />
      <ButtonGroup
        onPress={i => {
          setIndex(i);
        }}
        selectedIndex={index}
        buttons={buttons}
        containerStyle={{
          height: 48,
          width: "100%",
          backgroundColor: themeStyle.textColor
        }}
        selectedButtonStyle={{
          backgroundColor: defaultAppStyle.primaryColor

          // borderBottomWidth: defaultAppStyle.whiteColor
        }}
        selectedTextStyle={{
          color: defaultAppStyle.whiteColor
        }}
        textStyle={{
          fontWeight: "bold",
          fontSize: 14
        }}
      />
      {renderComponent(index, navigation)}
      {/* <Text
        style={{
          color: "#fff"
        }}
      >
        counter:{counter}
      </Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <Text
          style={{
            color: "#fff"
          }}
        >
          Press me
        </Text>
      </TouchableOpacity> */}
    </Layout>
  );
};

// const mapStateToProps = state => {
//   return {
//     data: {
//       activities: state.activitiesReducer.activities,
//       completed: state.activitiesReducer.activities
//     }
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     delete: key => dispatch(deleteActivity(key))
//   };
// };
export default HomeScreen;
