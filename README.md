# React Native Device Utils

A utility toolkit for React Native apps that provides responsive layout helpers, device type detection, and platform-specific utilities. Ideal for building consistent UI across different screen sizes, devices, and orientations.

## 📦 Features

- 📐 Responsive utilities (`vw`, `vh`, `normalize`)
- 📱 Device type detection (tablet, phone, small/medium/large devices)
- 🎯 Platform checks (`isIOS`, `isAndroid`)
- 🔁 Orientation helpers (`getDeviceOrientation`)
- 📊 Responsive screen percentage (`getHp`, `getWp`)

---

## 🚀 Installation

```bash
npm install react-native-device-utils react-native-responsive-screen
```

### 📌 Peer Dependencies

Make sure to also install:

```bash
npm install react-native-responsive-screen
```

---

## 📦 Usage

### 1. Responsive Dimensions

```ts
import { vw, vh, normalize } from "react-native-device-utils";

const width90 = vw(90); // 90px based on 393 design width
const height50 = vh(50); // 50px based on 852 design height
const textSize = normalize(14); // Scales according to screen size
```

### 2. Device Info

```ts
import {
  isTablet,
  smallDevice,
  mediumDevice,
  largeDevice,
  getDeviceOrientation,
} from "react-native-device-utils";

if (isTablet()) {
  console.log("Running on tablet");
}
```

### 3. Platform Info

```ts
import { isIOS, isAndroid, platformVersion } from "react-native-device-utils";

if (isIOS()) {
  console.log("iOS Version:", platformVersion);
}
```

### 4. Percentage Based Heights & Widths

```ts
import { getHp, getWp } from "react-native-device-utils";

const cardHeight = getHp(200, 300, 250); // mobile, tablet-portrait, tablet-landscape
const cardWidth = getWp(150, 250, 200);
```

---

## 🧪 Example App

Add this file as `example.ts` inside a demo app or test project:

```ts
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  vw,
  vh,
  isTablet,
  getDeviceOrientation,
  normalize,
} from "react-native-device-utils";

export const ExampleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Orientation: {getDeviceOrientation()}</Text>
      <Text style={styles.text}>Tablet: {isTablet() ? "Yes" : "No"}</Text>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: vw(16),
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: normalize(16),
    marginBottom: vh(2),
  },
  box: {
    width: vw(50),
    height: vh(20),
    backgroundColor: "#4caf50",
    borderRadius: normalize(8),
  },
});
```

---

## 📁 File Structure

```
src/
├── device.ts       # Device size/orientation utils
├── dimensions.ts   # vw, vh, normalize
├── platform.ts     # isIOS, isAndroid, platformVersion
├── responsive.ts   # getHp, getWp, getResponsiveDimension
└── index.ts        # Export all
```

---

## ✨ Author

**Abhishek Kumar**  
GitHub: [Abhishekkumar4444](https://github.com/Abhishekkumar4444)

---

## 📄 License

MIT
