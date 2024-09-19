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

const backgroundImage = require("@/images/background.jpg");
const backButtonImage = require("@/images/backbutton.png");
// const selectmember1Image = require("@/images/selectmember1.png");
// const selectmember2Image = require("@/images/selectmember2.png");
// const selectmember3Image = require("@/images/selectmember3.png");
// const selectmember4Image = require("@/images/selectmember4.png");

const SelectScreen = () => {
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
        <Text style={styles.titleText}>Select a member!</Text>
        <Text style={styles.subtitleText}>
          to choose the positions and movements
        </Text>
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

  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default SelectScreen;
