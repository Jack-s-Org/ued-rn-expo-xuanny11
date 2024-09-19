import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const backgroundImage = require("@/images/background.jpg");
const joinClassImage = require("@/images/joinclass.png");
const classcodeImage = require("@/images/classcode.png");
const codeImage = require("@/images/code.png");
const doneImage = require("@/images/done.png");

const JoinClassScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleDonePress = () => {
    navigation.navigate("SelectScreen");
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={joinClassImage} style={styles.joinClassImage} />
          <View style={styles.overlayContainer}>
            <Text style={styles.joinClassText}>Join Class</Text>

            <View style={styles.imageColumn}>
              <View style={styles.classImageWrapper}>
                <Image source={classcodeImage} style={styles.classImage} />
                <View style={styles.overlayTextContainer}>
                  <Text style={styles.classcodeText}>Class Code</Text>
                </View>
              </View>

              <View style={styles.codeImageWrapper}>
                <Image source={codeImage} style={styles.classImage} />
                <View style={styles.overlayTextContainer}>
                  <Text style={styles.codeText}>Enter the code here</Text>
                </View>
              </View>

              <View style={styles.doneImageWrapper}>
                <Image source={doneImage} style={styles.doneImage} />
                <TouchableOpacity
                  onPress={handleDonePress}
                  style={styles.doneButton}
                >
                  <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
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

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    position: "relative",
    alignItems: "center",
    marginBottom: 20,
  },

  joinClassImage: {
    width: 400,
    height: 300,
    alignContent: "center",
  },

  overlayContainer: {
    position: "absolute",
    top: "50%",
    alignItems: "center",
  },

  joinClassText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    bottom: 120,
  },

  imageColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -145,
  },

  classImageWrapper: {
    position: "relative",
    marginBottom: -80,
  },

  codeImageWrapper: {
    position: "relative",
    marginBottom: -80,
  },

  classImage: {
    width: 370,
    height: 150,
    resizeMode: "contain",
  },

  overlayTextContainer: {
    position: "absolute",
    top: 62,
    left: 30,
    flexDirection: "row",
    alignItems: "center",
  },

  classcodeText: {
    color: "#000097",
    fontSize: 16,
    fontWeight: "medium",
  },

  codeText: {
    color: "#000097",
    fontSize: 12,
    fontWeight: "medium",
  },

  doneImageWrapper: {
    position: "relative",
  },

  doneImage: {
    width: 380,
    height: 150,
    resizeMode: "contain",
  },

  doneButton: {
    position: "absolute",
    bottom: 57,
    left: 160,
    padding: 10,
    // backgroundColor: "#6200EE",
    borderRadius: 5,
  },

  doneButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default JoinClassScreen;
