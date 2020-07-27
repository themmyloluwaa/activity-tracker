import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import HeadingComponent from "../components/HeadingComponent";
import { Card, Input, Button } from "react-native-elements";
import { defaultAppStyle } from "../utils/appStyles";

const SettingScreen = () => {
  const [disabled, setDisable] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    !disabled && setIsEnabled(previousState => !previousState);
  return (
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
            placeholder="BASIC INPUT"
            value={"sksks"}
            label="Display Name"
            labelStyle={{ paddingBottom: 10 }}
            containerStyle={{
              marginTop: 10
            }}
            disabled={disabled}
          />
        </View>
        <View
          style={{
            marginTop: 10
          }}
        >
          <Text style={styles.switchLabelStyle}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <Button
          title={disabled ? "EDIT" : "SAVE"}
          containerStyle={{
            marginTop: 30
          }}
          buttonStyle={{
            backgroundColor: defaultAppStyle.secondaryColor,
            borderRadius: 10
          }}
        />
      </Card>
    </Layout>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    maxWidth: defaultAppStyle.width,
    margin: 0,
    backgroundColor: defaultAppStyle.greyish,
    minHeight: 300,
    paddingHorizontal: 16
  },
  switchLabelStyle: {
    fontSize: 16,
    paddingBottom: 10
  }
});
export default SettingScreen;
