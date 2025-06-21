import { Dimensions, PixelRatio } from "react-native";

export const DesignWidth = 393;
export const DesignHeight = 852;

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

const scale = screenWidth / 375;

export function normalize(size: number): number {
  return PixelRatio.roundToNearestPixel(size * scale);
}

export const vw = (width: number): number => {
  const percent = (width / DesignWidth) * 100;
  return PixelRatio.roundToNearestPixel((screenWidth * percent) / 100);
};

export const vh = (height: number): number => {
  const percent = (height / DesignHeight) * 100;
  return PixelRatio.roundToNearestPixel((screenHeight * percent) / 100);
};
