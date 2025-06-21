import { Platform } from "react-native";

export const isIOS = (): boolean => Platform.OS === "ios";
export const isAndroid = (): boolean => Platform.OS === "android";
export const platformVersion = Platform.Version;
export const isWeb = (): boolean => Platform.OS === "web";
