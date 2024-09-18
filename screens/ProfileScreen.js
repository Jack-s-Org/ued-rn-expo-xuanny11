import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import SwipeDetector from "@/components/carousel_swipe_workshop/SwipeDetector";

const backgroundImage = require("@/images/background.jpg");
const introImage = require("@/images/intro.png");
const savageImage = require("@/images/savage.jpg");

const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleSwipe = (directionY) => {
    if (directionY === "up" || directionY === "down") {
      navigation.navigate("ChoreographyScreen");
    }
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SwipeDetector onSwipe={handleSwipe}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleBackPress}>
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.imageContainer}>
            <Image source={introImage} style={styles.introImage} />
            <Image source={savageImage} style={styles.savageImage} />
          </View>
        </ScrollView>
      </ImageBackground>
    </SwipeDetector>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  headerContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 60,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    position: "relative",
  },

  introImage: {
    width: 430,
    height: 920,
    top: 50,
  },

  savageImage: {
    position: "absolute",
    width: 370,
    height: 200,
    top: 80,
    left: 30,
    borderRadius: 25,
  },
});

export default ProfileScreen;
