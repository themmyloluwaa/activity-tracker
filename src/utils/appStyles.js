import Constants from "expo-constants";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const defaultAppStyle = {
  marginTop: Constants.statusBarHeight,
  primaryColor: "#18ce69",
  whiteColor: "#ffffff",
  blackColor: "#294948",
  secondaryColor: "#f5a522",
  tertiaryColor: "#2ABEFD",
  greyColor: "#eee",
  width,
  height,
  greyish: "#F7F8FA"
};

const themeStyle = {
  backgroundColor: "#000",
  textColor: "#fff"
};

export { defaultAppStyle, themeStyle };
