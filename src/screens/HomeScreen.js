import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { themeStyle, defaultAppStyle } from "../utils/appStyles";
import Layout from "../components/Layout";
import { ButtonGroup } from "react-native-elements";
import HeadingComponent from "../components/HeadingComponent";
import ActiveComponent from "../components/ActiveComponent";
import CompletedComponent from "../components/CompletedComponent";
import SortComponent from "../components/SortComponent";
import { connect } from "react-redux";
import { deleteActivity } from "../redux/actions/activityAction";

const renderComponent = (index, navigation, data) => {
  if (index === 0) {
    return <ActiveComponent navigation={navigation} data={data.activities} />;
  } else {
    return <CompletedComponent navigation={navigation} data={data.completed} />;
  }
};
const HomeScreen = ({ navigation, ...props }) => {
  console.log(props.data.activities.length);
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
      <SortComponent />
      {renderComponent(index, navigation, props.data)}
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

const mapStateToProps = state => {
  return {
    data: {
      activities: state.activitiesReducer.activities,
      completed: state.activitiesReducer.activities
    }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deleteActivity(key))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
