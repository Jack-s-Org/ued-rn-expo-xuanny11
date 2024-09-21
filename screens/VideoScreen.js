import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/native";

const backgroundVideo = require("@/images/winterdance.mp4");
const danceicon1Image = require("@/images/2ddanceicon2.png");
const videoiconImage = require("@/images/videoicon1.png");
const danceicon2Image = require("@/images/3Ddanceicon2.png");

const VideoScreen = () => {
  const navigation = useNavigation();

  const handleIconPress = (iconType) => {
    if (iconType === "2D Dance") {
      navigation.navigate("PositionScreen");
    } else if (iconType === "3D Dance") {
      navigation.navigate("MovementScreen");
    } else {
      console.log(`${iconType} pressed`);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={backgroundVideo}
        style={styles.backgroundVideo}
        shouldPlay
        isLooping
        resizeMode="cover"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleIconPress("2D Dance")}
          style={styles.iconButton}
        >
          <Image source={danceicon1Image} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleIconPress("Video")}
          style={styles.iconButton}
        >
          <Image source={videoiconImage} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleIconPress("3D Dance")}
          style={styles.iconButton}
        >
          <Image source={danceicon2Image} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },

  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },

  iconImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default VideoScreen;
