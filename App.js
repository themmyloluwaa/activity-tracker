import React from "react";
import { StyleSheet, Text } from "react-native";
import RootNavigator from "./src/navigations";
import { PersistState } from "redux-persist";
import { Provider } from "react-redux";
import configureStore, { persistedStore } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistedStore} loading={null}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
