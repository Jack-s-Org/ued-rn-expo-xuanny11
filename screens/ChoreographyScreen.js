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
import { FontAwesome } from "@expo/vector-icons"; // For star icons

const backgroundImage = require("@/images/background.jpg");
const backButtonImage = require("@/images/backbutton.png");
const searchBarImage = require("@/images/Searchbar.png");
const dramaImage = require("@/images/drama.png");
const loveIconImage = require("@/images/loveicon.png");
const shareIconImage = require("@/images/shareicon.png");
const programBoxImage = require("@/images/programbox.png");
const blackmambaImage = require("@/images/blackmamba.png");
const dreamscometrueImage = require("@/images/dreamscometrue.png");
const armageddonImage = require("@/images/armageddon.png");

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

          <View style={styles.iconContainer}>
            <Image source={loveIconImage} style={styles.iconImage} />
            <Image source={shareIconImage} style={styles.iconImage} />
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Difficulty Level</Text>
            <View style={styles.starContainer}>
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star" size={18} color="#D1ADFF" />
              <FontAwesome name="star-half-full" size={18} color="#D1ADFF" />
              <FontAwesome name="star-o" size={18} color="#D1ADFF" />
            </View>
            <Text style={styles.infoText}>Length</Text>
            <Text style={styles.timeText}>3 mins 34 secs</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <ImageBackground
                  source={programBoxImage}
                  style={styles.buttonImage}
                >
                  <Text style={styles.buttonText}>Create Class</Text>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity>
                <ImageBackground
                  source={programBoxImage}
                  style={styles.buttonImage}
                >
                  <Text style={styles.buttonText}>Join Class</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
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
    height: 200,
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

  searchBarImage: {
    width: 400,
    height: 60,
    position: "relative",
    alignSelf: "center",
    left: 0,
    top: -30,
  },

  searchIcon: {
    position: "absolute",
    left: 25,
    top: -15,
    color: "#000097",
  },

  searchText: {
    position: "absolute",
    left: 60,
    top: -15,
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
    marginTop: -20,
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
    top: 40,
    right: -10,
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  iconImage: {
    width: 80,
    height: 80,
    marginTop: -20,
  },

  infoContainer: {
    position: "absolute",
    top: 405,
    left: 10,
    flexDirection: "column",
    alignItems: "flex-start",
  },

  infoText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },

  starContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },

  timeText: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },

  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 158,
    flexDirection: "column",
    gap: 8,
  },

  buttonImage: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ChoreographyScreen;
