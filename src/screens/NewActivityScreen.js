import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import HeadingComponent from "../components/HeadingComponent";
import ActivityInputComponent from "../components/ActivityInputComponent";
import { connect } from "react-redux";
import { addActivity } from "../redux/actions/activityAction";

const source = require("../images/background.jpg");

const NewActivityScreen = ({ navigation, ...props }) => {
  return (
    <ImageBackground style={styles.container} source={source}>
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
          handleClick={data => {
            props.add(data);
            navigation.navigate("Home");
          }}
        />
      </Layout>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    resizeMode: "cover"
  }
});

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
