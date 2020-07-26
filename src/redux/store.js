import { createStore, combineReducers } from "redux";
import activityReducer from "./reducers/activityReducer";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

const persisConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["activities"]
};

const rootReducer = combineReducers({
  activities: activityReducer
});
const persistedReducer = persistReducer(persisConfig, rootReducer);

const configureStore = createStore(persistedReducer);
const persistedStore = persistStore(configureStore);

export default configureStore;
export { persistedStore };
