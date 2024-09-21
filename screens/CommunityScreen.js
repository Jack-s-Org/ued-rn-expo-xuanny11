import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const backgroundImage = require("@/images/community.png");
const overlayImage = require("@/images/overlayblue.png");
const trendingBoxImage = require("@/images/trendingbox.png");

const CommunityScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToTrending = () => {
    navigation.navigate("TrendingScreen");
  };

  return (
    <TouchableOpacity
      onPress={handleNavigateToTrending}
      style={styles.container}
    >
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overlayContainer}>
          <Image source={overlayImage} style={styles.overlayImage} />
          <Image source={trendingBoxImage} style={styles.trendingBoxImage} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  overlayImage: {
    width: 420,
    height: 300,
    position: "absolute",
    top: -448,
  },
  trendingBoxImage: {
    width: 380,
    height: 55,
    position: "absolute",
    top: -360,
  },
});

export default CommunityScreen;
