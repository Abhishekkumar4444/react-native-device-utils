import { Dimensions } from "react-native";
import { screenWidth } from "./dimensions";

const iphone6ScreenWidth = 375;

export const smallDevice = screenWidth < iphone6ScreenWidth;
export const mediumDevice = screenWidth <= iphone6ScreenWidth;
export const largeDevice = screenWidth > iphone6ScreenWidth;
export const isDeviceLarge = screenWidth > 600;

export const isTablet = (): boolean => {
  const { width, height } = Dimensions.get("screen");
  return width >= 600 && height >= 600;
};

export const getDeviceOrientation = (): "portrait" | "landscape" => {
  const { width, height } = Dimensions.get("screen");
  return width > height ? "landscape" : "portrait";
};
