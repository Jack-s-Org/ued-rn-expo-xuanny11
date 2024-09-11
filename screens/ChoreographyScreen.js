import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const backgroundImage = require("@/images/background.jpg");
const backButtonImage = require("@/images/backbutton.png");
const searchBarImage = require("@/images/Searchbar.png");

const ChoreographyScreen = () => {
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
          <View style={styles.backButtonWrapper}>
            <Image source={backButtonImage} style={styles.backButtonImage} />
            <MaterialIcons
              name="arrow-back"
              size={24}
              color="white"
              style={styles.backButtonIcon}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.searchBarContainer}>
          <Image source={searchBarImage} style={styles.searchBarImage} />
          <MaterialIcons
            name="search"
            size={24}
            color="white"
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>Search Aespa's Song</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      ></ScrollView>
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
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 60,
  },

  backButtonWrapper: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },

  backButtonImage: {
    width: 80,
    height: 80,
    left: -15,
  },

  backButtonIcon: {
    position: "absolute",
    top: 24,
    left: 13,
    color: "#000097",
  },

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  searchBarImage: {
    width: "110%",
    height: 120,
    resizeMode: "contain",
    position: "relative",
    left: -12,
    top: -70,
  },

  searchIcon: {
    position: "absolute",
    left: 25,
    top: -25,
    color: "#000097",
  },

  searchText: {
    position: "absolute",
    left: 60,
    top: -23,
    color: "#000097",
    fontSize: 16,
  },

  scrollViewContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
  },
});

export default ChoreographyScreen;
