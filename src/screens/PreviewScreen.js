import React from "react";
import Layout from "../components/Layout";
import { Icon } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";
import PreviewComponent from "../components/PreviewComponent";
import { connect } from "react-redux";
import { editActivity, deleteActivity } from "../redux/actions/activityAction";

const PreviewScreen = props => {
  return (
    <Layout
      style={{
        backgroundColor: "#fff"
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
        color={defaultAppStyle.blackColor}
      />
      <PreviewComponent {...props} />
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
    delete: key => dispatch(deleteActivity(key)),
    edit: data => dispatch(editActivity(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PreviewScreen);
