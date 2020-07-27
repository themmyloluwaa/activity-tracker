import { createStore, combineReducers } from "redux";
import activityReducer from "./reducers/activityReducer";
import settingsReducer from "./reducers/settingsReducer";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
const persisConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["activitiesReducer", "settingsReducer"]
  // stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
  activitiesReducer: activityReducer,
  settingsReducer: settingsReducer
});
const persistedReducer = persistReducer(persisConfig, rootReducer);

const configureStore = createStore(persistedReducer);
const persistedStore = persistStore(configureStore);

export default configureStore;
export { persistedStore };
