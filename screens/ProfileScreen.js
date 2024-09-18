import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import SwipeDetector from "@/components/carousel_swipe_workshop/SwipeDetector";

const backgroundImage = require("@/images/background.jpg");
const introImage = require("@/images/intro.png");
const savageImage = require("@/images/savage.jpg");
const programBoxImage = require("@/images/programbox.png");
const introductionImage = require("@/images/introduction.png");

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
            <View style={styles.aespaContainer}>
              <Text style={styles.aespaText}>Aespa</Text>

              <View style={styles.programBoxContainer}>
                <Image
                  source={programBoxImage}
                  style={styles.programBoxImage}
                />
                <Text style={styles.programBoxText}>Follow</Text>
              </View>
            </View>

            <View>
              <Image
                source={introductionImage}
                style={styles.introductionboxImage}
              />
              <Text style={styles.introductionboxText}>Introduction</Text>
              <Text style={styles.descriptionText}>
                Aespa is a South Korean girl group formed by SM Entertainment.
                The group consists of four members: Karina, Giselle, Winter, and
                Ningning. The group is known for popularizing metaverse concept
                and hyperpop music in K-pop.
              </Text>
            </View>
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

  aespaContainer: {
    flexDirection: "row",
    alignItems: "center",
    bottom: 650,
    width: 355,
    left: 40,
  },

  aespaText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 10,
  },

  programBoxContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    left: 140,
  },

  programBoxImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  programBoxText: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  introductionboxContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    // left: 140,
  },

  introductionboxImage: {
    width: 410,
    height: 200,
    left: 10,
    bottom: 660,
  },

  introductionboxText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    bottom: 835,
    left: 45,
  },

  descriptionText: {
    width: 350,
    marginTop: 12,
    fontSize: 14,
    color: "#fff",
    bottom: 830,
    left: 35,
    alignContent: "center",
    lineHeight: 20,
    textAlign: "left",
    paddingHorizontal: 10,
  },
});

export default ProfileScreen;
