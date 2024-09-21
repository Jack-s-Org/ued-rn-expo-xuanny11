import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Video } from "expo-av";

const backgroundImage = require("@/images/background.jpg");
const backButtonImage = require("@/images/backbutton.png");

const PositionScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={handleBackPress}
          style={styles.backButtonWrapper}
        >
          <Image source={backButtonImage} style={styles.backButtonImage} />
          <MaterialIcons
            name="arrow-back"
            size={24}
            color="white"
            style={styles.backButtonIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Positions & Movements</Text>
      </View>

      <View style={styles.rectangleBox}>
        <Text style={styles.rectangleText}>Link with dancing mat</Text>
      </View>

      <View style={styles.videoContainer}>
        <Video
          source={require("@/images/animation.mp4")}
          style={styles.video}
          shouldPlay
          isLooping
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginLeft: 10,
  },
  backButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButtonImage: {
    width: 80,
    height: 80,
    top: 20,
  },
  backButtonIcon: {
    position: "absolute",
    top: 45,
    left: 27,
    color: "#000097",
  },
  textContainer: {
    position: "absolute",
    top: 130,
    left: "10%",
    right: "10%",
    alignItems: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  rectangleBox: {
    borderColor: "#fff",
    borderWidth: 2,
    width: 300,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 90,
    marginTop: 60,
    alignSelf: "center",
  },
  rectangleText: {
    fontSize: 16,
    fontWeight: "regular",
    color: "#fff",
  },
  videoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  video: {
    width: "90%",
    height: 200,
  },
});

export default PositionScreen;
