import Constants from "expo-constants";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const defaultAppStyle = {
  marginTop: Constants.statusBarHeight,
  primaryColor: "#18ce69",
  whiteColor: "#ffffff",
  blackColor: "#294948",
  secondaryColor: "#2ABEFD",
  tertiaryColor: "#2ABEFD",
  greyColor: "#eee",
  backgroundColor: "#000",
  textColor: "#fff",
  width,
  height,
  greyish: "#F7F8FA"
};

export { defaultAppStyle };
