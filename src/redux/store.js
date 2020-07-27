import { createStore, combineReducers } from "redux";
import activityReducer from "./reducers/activityReducer";
import settingsReducer from "./reducers/settingsReducer";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

// persisting the state accross app restart configuration
const persisConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["activitiesReducer", "settingsReducer"],
  stateReconciler: hardSet
};

// combining reducers of the app
const rootReducer = combineReducers({
  activitiesReducer: activityReducer,
  settingsReducer: settingsReducer
});

// persisted reducer configuration by combining the configuration and the root reducer
const persistedReducer = persistReducer(persisConfig, rootReducer);

// store creation
const configureStore = createStore(persistedReducer);

// persisted store creation
const persistedStore = persistStore(configureStore);

export default configureStore;
export { persistedStore };
