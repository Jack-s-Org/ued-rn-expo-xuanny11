import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "./components/VideoPlayer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DiscoverScreen from "./screens/DiscoverScreen";
import KPopScreen from "./screens/KpopScreen";
import ChoreographyScreen from "./screens/ChoreographyScreen";
import JoinClassScreen from "./screens/JoinClassScreen";
import PositionScreen from "./screens/PositionScreen";
import MovementScreen from "./screens/MovementScreen";

const Icon = createIconSetFromIcoMoon(
  require("./assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/icomoon/icomoon.ttf"),
    "Anton-Regular": require("@/assets/fonts/Anton-Regular.ttf"),
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
    MontserratMedium: require("@/assets/fonts/Montserrat-Medium.ttf"),
    MontserratRegular: require("@/assets/fonts/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ height: "100%" }}>
      {<RootNavigator />}
      {/* <Icon name="home" size={50} color="red" />
      <Image
        source={require("@/assets/add.png")}
        style={{ height: 124, width: 64 }}
      />
      <Text style={{ fontFamily: "Gilker-Regular" }}>Hello</Text> */}
      {/* <VideoPlayer /> */}
    </SafeAreaView>
  );
}
