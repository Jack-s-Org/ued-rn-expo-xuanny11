import React from "react";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import { Video } from "expo-av";

const backgroundImage = require("@/images/background.jpg");
const videoSource = require("@/images/rockwithyou.mp4");
const backarrowImage = require("@/images/backarrow.png");
const friendsImage = require("@/images/friendsbutton.png");
const trendingImage = require("@/images/trendingbutton.png");

const TrendingScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {/* Video Container */}
      <View style={styles.videoContainer}>
        <Video
          source={videoSource}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
      </View>

      {/* Image Overlay Container */}
      <View style={styles.imageRowContainer}>
        <Image source={backarrowImage} style={styles.iconImage} />

        <View style={styles.buttonContainer}>
          <Image source={friendsImage} style={styles.button1Image} />
          <Text style={styles.buttonText}>Friends</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Image source={trendingImage} style={styles.button2Image} />
          <Text style={styles.button2Text}>Trending</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Image source={friendsImage} style={styles.button1Image} />
          <Text style={styles.buttonText}>Friends</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  imageRowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    position: "absolute",
    top: 60,
    left: 15,
    zIndex: 1,
  },
  iconImage: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
  },
  buttonContainer: {
    position: "relative",
    alignItems: "center",
    marginHorizontal: -4,
  },
  button1Image: {
    width: 95,
    height: 40,
  },
  button2Image: {
    width: 145,
    height: 50,
  },
  buttonText: {
    position: "absolute",
    top: "122%",
    left: "75%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "MontserratBold",
  },
  button2Text: {
    position: "absolute",
    top: "130%",
    left: "62%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "MontserratBold",
  },
  videoContainer: {
    width: "90%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  video: {
    width: 390,
    height: 830,
    borderRadius: 30,
    top: -210,
  },
});

export default TrendingScreen;
