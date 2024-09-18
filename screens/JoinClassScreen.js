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

const JoinClassScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={joinClassImage} style={styles.joinClassImage} />
          <View style={styles.overlayContainer}>
            <Text style={styles.joinClassText}>Join Class</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
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

  backButton: {
    backgroundColor: "#6200EE",
    padding: 10,
    borderRadius: 5,
  },

  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default JoinClassScreen;
