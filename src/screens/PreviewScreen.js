import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import { Icon } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";
import PreviewComponent from "../components/PreviewComponent";
import { connect } from "react-redux";
import { editActivity, deleteActivity } from "../redux/actions/activityAction";

const source = require("../images/background.jpg");

const PreviewScreen = props => {
  return (
    <ImageBackground style={styles.container} source={source}>
      <Layout
        style={{
          backgroundColor: "transparent"
        }}
      >
        <Icon
          containerStyle={{
            alignSelf: "flex-start",
            marginVertical: 30
          }}
          onPress={() => props.navigation.goBack()}
          name="arrowleft"
          size={30}
          type="antdesign"
          color="#fff"
        />
        <PreviewComponent {...props} />
      </Layout>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  return {
    activities: state.activitiesReducer.activities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: key => dispatch(deleteActivity(key)),
    edit: data => dispatch(editActivity(data))
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover"
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(PreviewScreen);
