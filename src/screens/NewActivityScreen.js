import React, { useState } from "react";
import { View } from "react-native";
import Layout from "../components/Layout";
import HeadingComponent from "../components/HeadingComponent";
import ActivityInputComponent from "../components/ActivityInputComponent";
import { connect } from "react-redux";
import { addActivity } from "../redux/actions/activityAction";
const NewActivityScreen = ({ navigation, ...props }) => {
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'ios');
    console.log(selectedDate);
    setDate(currentDate);
  };
  return (
    <Layout
      style={{
        paddingHorizontal: 0
      }}
    >
      <View style={{ paddingHorizontal: 32 }}>
        <HeadingComponent />
      </View>
      <ActivityInputComponent
        navigation={navigation}
        handleClick={data => props.add(data)}
      />
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    activities: state.activitiesReducer.activities
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: data => dispatch(addActivity(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewActivityScreen);
