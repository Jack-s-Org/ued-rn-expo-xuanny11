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
import { Video } from "expo-av";
import MovementScreen from "./MovementScreen";

const backgroundImage = require("@/images/background.jpg");
const backButtonImage = require("@/images/backbutton.png");
const timelineImage = require("@/images/timeline.png");
const notesImage = require("@/images/notes.png");
const danceicon1Image = require("@/images/2Ddanceicon1.png");
const danceicon2Image = require("@/images/3Ddanceicon2.png");
const videoiconImage = require("@/images/videoicon2.png");

const notesData = [
  {
    title: "1. Verse",
    subheading: "wave Motion",
    description:
      "Start with an arm wave from shoulders to hands. Transition smoothly into a body roll from shoulders to hips.",
  },
  {
    title: "2. Pre-Chorus",
    subheading: "swing arms",
    description:
      "Step side to side, swinging your arms in sync with the beat. Sway your hips smoothly, adding flowing arm movements.",
  },
  {
    title: "3. Chorus",
    subheading: "strike pose",
    description:
      "Strike a snake-like pose with one arm up and the other down. Perform body waves and arm undulations to embody the Black Mamba theme.",
  },
  {
    title: "4. Bridge",
    subheading: "match beats",
    description:
      "Execute sharp, precise arm and leg movements to match the beats. Add dynamic floor work, such as quickly dropping to a knee and getting up.",
  },
];

const PositionScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleIconPress = (iconType) => {
    if (iconType === "3D Dance") {
      navigation.navigate("MovementScreen");
    } else if (iconType === "Video") {
      navigation.navigate("VideoScreen");
    } else {
      console.log(`${iconType} pressed`);
    }
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

      <ScrollView contentContainerStyle={styles.notesScrollView}>
        {notesData.map((note, index) => (
          <View key={index} style={styles.notesWrapper}>
            <Image source={timelineImage} style={styles.timelineImage} />
            <Image source={notesImage} style={styles.notesImage} />
            <View style={styles.textColumns}>
              <View style={styles.columnRow}>
                <Text style={styles.headerText}>{note.title}</Text>
                <Text style={styles.columnText}>{note.subheading}</Text>
                <Text style={styles.danceText}>{note.description}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleIconPress("2D Dance")}
          style={styles.iconButton}
        >
          <Image source={danceicon1Image} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleIconPress("Video")}
          style={styles.iconButton}
        >
          <Image source={videoiconImage} style={styles.iconImage} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleIconPress("3D Dance")}
          style={styles.iconButton}
        >
          <Image source={danceicon2Image} style={styles.iconImage} />
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
    height: 310,
  },

  imageContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: 25,
  },

  timelineImage: {
    width: 12,
    height: 515,
    left: -15,
    // resizeMode: "contain",
  },

  notesScrollView: {
    flexGrow: 1,
    paddingHorizontal: 60,
    paddingBottom: 60,
  },

  notesWrapper: {
    width: 310,
    height: 150,
    left: -5,
    position: "relative",
    marginBottom: 20,
  },

  notesImage: {
    width: "100%",
    height: "100%",
    bottom: 510,
  },

  textColumns: {
    position: "absolute",
    top: 20,
    left: 10,
    right: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  columnRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
    gap: 6,
  },

  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    width: "55%",
    left: 10,
    textAlign: "flex-start",
  },

  columnText: {
    fontSize: 12,
    color: "#fff",
    width: "40%",
    left: 5,
    textAlign: "left",
  },

  danceText: {
    fontSize: 12,
    color: "#fff",
    width: "100%",
    textAlign: "left",
    lineHeight: 15,
    left: 5,
  },

  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },

  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },

  iconImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default PositionScreen;
