import { screenHeight, screenWidth } from "./dimensions";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const getResponsiveDimension = (
  mobileValue: number,
  tabletPortraitValue: number,
  tabletLandscapeValue: number
): number => {
  const isTablet =
    (screenWidth >= 600 && screenHeight >= 600) ||
    (screenWidth >= 600 && screenHeight >= 960);

  if (isTablet) {
    return screenWidth > screenHeight
      ? tabletLandscapeValue
      : tabletPortraitValue;
  }

  return mobileValue;
};

export const getHp = (
  mobileHeight: number,
  tabletPortraitHeight: number,
  tabletLandscapeHeight: number
): number => {
  const isTablet =
    (screenWidth >= 600 && screenHeight >= 600) ||
    (screenWidth >= 600 && screenHeight >= 960);

  if (isTablet) {
    return screenWidth > screenHeight
      ? hp(`${(tabletLandscapeHeight / screenHeight) * 100}%`)
      : hp(`${(tabletPortraitHeight / screenHeight) * 100}%`);
  }

  return hp(`${(mobileHeight / screenHeight) * 100}%`);
};

export const getWp = (
  mobileWidth: number,
  tabletPortraitWidth: number,
  tabletLandscapeWidth: number
): number => {
  const isTablet =
    (screenWidth >= 600 && screenHeight >= 600) ||
    (screenWidth >= 600 && screenHeight >= 960);

  if (isTablet) {
    return screenWidth > screenHeight
      ? wp(`${(tabletLandscapeWidth / screenWidth) * 100}%`)
      : wp(`${(tabletPortraitWidth / screenWidth) * 100}%`);
  }

  return wp(`${(mobileWidth / screenWidth) * 100}%`);
};
