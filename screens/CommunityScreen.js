import React from "react";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";

const backgroundImage = require("@/images/community.png");
const overlayImage = require("@/images/overlayblue.png");

const CommunityScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlayContainer}>
        <Image source={overlayImage} style={styles.overlayImage} />
        <Text style={styles.title}>Community</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  overlayImage: {
    width: 200,
    height: 200,
    position: "absolute",
    top: "20%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 220,
  },
});

export default CommunityScreen;
