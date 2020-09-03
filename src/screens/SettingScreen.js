import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Layout from "../components/Layout";
import HeadingComponent from "../components/HeadingComponent";
import { Card, Input, Button } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";
import { connect } from "react-redux";
import { setName } from "../redux/actions/settingsAction";

const source = require("../images/background.jpg");

const SettingScreen = props => {
  const [disabled, setDisable] = useState(true);
  const [nameValue, setNameValue] = useState(props.name);

  const handleOnPress = () => {
    if (disabled) {
      setDisable(false);
    } else {
      props.setName(nameValue);
      setDisable(true);
    }
  };
  return (
    <ImageBackground style={styles.container} source={source}>
      <Layout
        style={{
          marginTop: 100
        }}
      >
        <HeadingComponent />

        <Card containerStyle={styles.cardContainer}>
          <View
            style={{
              marginTop: 10
            }}
          >
            <Input
              defaultValue={nameValue}
              onChangeText={text => setNameValue(text)}
              label="Display Name"
              labelStyle={{ paddingBottom: 10 }}
              containerStyle={{
                marginTop: 10
              }}
              maxLength={30}
              disabled={disabled}
            />
          </View>

          <Button
            title={disabled ? "EDIT" : "SAVE"}
            containerStyle={{
              marginTop: 30
            }}
            onPress={() => handleOnPress()}
            buttonStyle={{
              backgroundColor: disabled
                ? defaultAppStyle.secondaryColor
                : "green",
              borderRadius: 10
            }}
          />
        </Card>
      </Layout>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    maxWidth: defaultAppStyle.width,
    margin: 0,
    backgroundColor: defaultAppStyle.greyish,
    minHeight: 300,
    paddingHorizontal: 16,
    justifyContent: "center"
  },
  switchLabelStyle: {
    fontSize: 16,
    paddingBottom: 10
  },
  container: {
    flex: 1,

    resizeMode: "cover"
  }
});

const mapStateToProps = state => {
  return {
    name: state.settingsReducer.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch(setName(name))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
