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
const dramaImage = require("@/images/drama.png");
const loveIconImage = require("@/images/loveicon.png");
const shareIconImage = require("@/images/shareicon.png");

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
      >
        <View style={styles.dramaContainer}>
          <Image source={dramaImage} style={styles.belowSearchBarImage} />
          <Text style={styles.dramaText}>Drama</Text>

          {/* Love and Share icons container */}
          <View style={styles.iconContainer}>
            <Image source={loveIconImage} style={styles.iconImage} />
            <Image source={shareIconImage} style={styles.iconImage} />
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
    marginTop: 16,
    paddingBottom: 10,
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

  dramaContainer: {
    width: 300,
    height: 200,
    position: "relative",
    marginTop: -10,
    alignItems: "center",
  },

  dramaImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  dramaText: {
    position: "absolute",
    top: 35,
    left: 10,
    color: "#000097",
    fontSize: 18,
    fontWeight: "bold",
  },

  iconContainer: {
    position: "absolute",
    top: 20,
    right: -5,
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  iconImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
});

export default ChoreographyScreen;
