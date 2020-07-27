import React from "react";
import { View } from "react-native";
import Layout from "../components/Layout";
import HeadingComponent from "../components/HeadingComponent";
import ActivityInputComponent from "../components/ActivityInputComponent";
import { connect } from "react-redux";
import { addActivity } from "../redux/actions/activityAction";
const NewActivityScreen = ({ navigation, ...props }) => {
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
        // custom onclick handler passed as props for the activity input component
        handleClick={data => {
          props.add(data);
          navigation.navigate("Home");
        }}
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
