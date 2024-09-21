import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const backgroundImage = require("@/images/background.jpg");
const backButtonImage = require("@/images/backbutton.png");
const selectmember1Image = require("@/images/selectmember1.png");
const selectmember2Image = require("@/images/selectmember2.png");
const selectmember3Image = require("@/images/selectmember3.png");
const selectmember4Image = require("@/images/selectmember4.png");
const karinapositionImage = require("@/images/karinaposition.png");
const ningningpositionImage = require("@/images/ningningposition.png");
const winterpositionImage = require("@/images/winterposition.png");
const gisellepositionImage = require("@/images/giselleposition.png");

const SelectScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleStartPress = () => {
    navigation.navigate("PositionScreen");
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
        <Text style={styles.titleText}>Select a member!</Text>
        <Text style={styles.subtitleText}>
          to choose the positions and movements
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.imageWrapper}>
          <Image source={selectmember1Image} style={styles.memberImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.nameText}>Karina</Text>
            <Text style={styles.roleText}>Role Description</Text>
            <Text style={styles.descriptionText}>Leader, Main Dancer</Text>
            <Text style={styles.difficultyText}>Difficulty</Text>
            <View style={styles.starContainer}>
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star-o" size={18} color="#D1ADFF" />
            </View>
            <Image source={karinapositionImage} style={styles.positionImage} />
          </View>

          <View style={styles.startButtonContainer}>
            <TouchableOpacity
              onPress={handleStartPress}
              style={styles.startButton}
            >
              <View style={styles.iconAndText}>
                <Text style={styles.startButtonText}>Start</Text>

                <FontAwesome
                  name="play"
                  size={18}
                  color="white"
                  style={styles.iconStyle}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imageWrapper}>
          <Image source={selectmember2Image} style={styles.memberImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.nameText}>Ningning</Text>
            <Text style={styles.roleText}>Role Description</Text>
            <Text style={styles.descriptionText}>Main Dancer</Text>
            <Text style={styles.difficultyText}>Difficulty</Text>
            <View style={styles.starContainer}>
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star-o" size={18} color="#D1ADFF" />
              <FontAwesome name="star-o" size={18} color="#D1ADFF" />
            </View>
            <Image
              source={ningningpositionImage}
              style={styles.positionImage}
            />
          </View>

          <View style={styles.startButtonContainer}>
            <TouchableOpacity
              onPress={handleStartPress}
              style={styles.startButton}
            >
              <View style={styles.iconAndText}>
                <Text style={styles.startButtonText}>Start</Text>

                <FontAwesome
                  name="play"
                  size={18}
                  color="white"
                  style={styles.iconStyle}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imageWrapper}>
          <Image source={selectmember3Image} style={styles.memberImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.nameText}>Winter</Text>
            <Text style={styles.roleText}>Role Description</Text>
            <Text style={styles.descriptionText}>
              Main Vocalist, Lead dancer
            </Text>
            <Text style={styles.difficultyText}>Difficulty</Text>
            <View style={styles.starContainer}>
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star-o" size={18} color="#D1ADFF" />
            </View>
            <Image source={winterpositionImage} style={styles.positionImage} />
          </View>
          <View style={styles.startButtonContainer}>
            <TouchableOpacity
              onPress={handleStartPress}
              style={styles.startButton}
            >
              <View style={styles.iconAndText}>
                <Text style={styles.startButtonText}>Start</Text>

                <FontAwesome
                  name="play"
                  size={18}
                  color="white"
                  style={styles.iconStyle}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imageWrapper}>
          <Image source={selectmember4Image} style={styles.memberImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.nameText}>Giselle</Text>
            <Text style={styles.roleText}>Role Description</Text>
            <Text style={styles.descriptionText}>Main Dancer</Text>
            <Text style={styles.difficultyText}>Difficulty</Text>
            <View style={styles.starContainer}>
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star-o" size={18} color="#D1ADFF" />
              <FontAwesome name="star-o" size={18} color="#D1ADFF" />
              <FontAwesome name="star-half-full" size={18} color="#D1ADFF" />
            </View>
            <Image source={gisellepositionImage} style={styles.positionImage} />
          </View>
          <View style={styles.startButtonContainer}>
            <TouchableOpacity
              onPress={handleStartPress}
              style={styles.startButton}
            >
              <View style={styles.iconAndText}>
                <Text style={styles.startButtonText}>Start</Text>

                <FontAwesome
                  name="play"
                  size={18}
                  color="white"
                  style={styles.iconStyle}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },

  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 40,
  },

  imageWrapper: {
    position: "relative",
    marginRight: 10,
  },

  memberImage: {
    width: 345,
    height: 600,
    borderRadius: 10,
  },

  textOverlay: {
    position: "absolute",
    bottom: 85,
    left: 10,
    right: 10,
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 8,
  },

  nameText: {
    color: "#000097",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },

  roleText: {
    color: "#10071F",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },

  descriptionText: {
    color: "purple",
    fontWeight: "regular",
    fontSize: 14,
    textAlign: "center",
    flex: 1,
  },

  difficultyText: {
    color: "#10071F",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },

  starContainer: {
    flexDirection: "row",
    marginBottom: 10,
    left: 115,
  },

  positionImage: {
    width: 60,
    height: 60,
    left: 132,
    bottom: 6,
    resizeMode: "contain",
  },

  startButtonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },

  startButton: {
    // backgroundColor: "#D1ADFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },

  iconAndText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconStyle: {
    marginRight: 0,
  },

  startButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SelectScreen;
