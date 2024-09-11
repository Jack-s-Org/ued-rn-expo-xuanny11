import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const backgroundImage = require("@/images/background.jpg");
const box1BackgroundImage = require("@/images/homepagebackground.png");
const innerBox1BackgroundImage = require("@/images/innerbox.png");
const innerBox2BackgroundImage = require("@/images/innerbox.png");
const recommendationBoxBackgroundImage = require("@/images/recommendationbox.png");
const exploreBoxBackgroundImage = require("@/images/explorebox.png");
const songBoxBackgroundImage = require("@/images/songbox.png");
const danceworkoutBoxBackgroundImage = require("@/images/danceworkoutbox.png");

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.headerContainer}>
          <Text style={styles.logoText}>STEEZY</Text>
          <Icon
            name="notifications-outline"
            size={35}
            style={styles.notificationIcon}
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ImageBackground source={box1BackgroundImage} style={styles.box1}>
            <View style={styles.innerBoxesContainer}>
              <ImageBackground
                source={innerBox1BackgroundImage}
                style={styles.innerBox1}
              >
                <Text style={styles.eventTitle}>Events</Text>
                <Text style={styles.eventDate}>August - December 2024</Text>
                <ImageBackground
                  source={{
                    uri: "https://newsroom.korea.net/upload/content/editImage/20210709101435973_F7B00CQ6.png",
                  }}
                  style={styles.image1}
                />
              </ImageBackground>
              <ImageBackground
                source={innerBox2BackgroundImage}
                style={styles.innerBox2}
              >
                <Text style={styles.eventTitle}>Today's</Text>
                <Text style={styles.eventTitle}>Live Classes</Text>
                <ImageBackground
                  source={{
                    uri: "https://i.ytimg.com/vi/NU611fxGyPU/maxresdefault.jpg",
                  }}
                  style={styles.image2}
                >
                  <View style={styles.imageTextContainer}>
                    <Text style={styles.imageText1}>Black Mamba</Text>
                    <Text style={styles.imageText2}>
                      K-POP | INTERMEDIATE | CHOREOGRAPHY
                    </Text>
                  </View>
                </ImageBackground>
              </ImageBackground>
            </View>

            <ImageBackground
              source={recommendationBoxBackgroundImage}
              style={styles.recommendationBox}
              imageStyle={{ borderRadius: 25 }}
            >
              <Text style={styles.recommendationTitle}>Recommendations</Text>

              <ImageBackground
                source={songBoxBackgroundImage}
                style={styles.songBox}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={{ width: 270 }}>
                  <Text style={styles.songTitle}>Girls Never Die</Text>
                </View>
                <Icon name="heart-outline" size={20} color="#000" />
              </ImageBackground>

              <ImageBackground
                source={songBoxBackgroundImage}
                style={styles.songBox}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={{ width: 270 }}>
                  <Text style={styles.songTitle}>Maestro</Text>
                </View>
                <Icon name="heart" size={20} color="red" />
              </ImageBackground>

              <ImageBackground
                source={songBoxBackgroundImage}
                style={styles.songBox}
                imageStyle={{ borderRadius: 10 }}
              >
                <View style={{ width: 270 }}>
                  <Text style={styles.songTitle}>You Were Beautiful</Text>
                </View>
                <Icon name="heart" size={20} color="red" />
              </ImageBackground>
            </ImageBackground>

            <ImageBackground
              source={exploreBoxBackgroundImage}
              style={styles.exploreBox}
              imageStyle={{ borderRadius: 25 }}
            >
              <Text style={styles.recommendationTitle}>Explore More</Text>
              <ImageBackground
                source={{
                  uri: "https://web-cf-image.cjenm.com/public/share/metamng/boards/en/streetwomanfighter-01.jpg?v=1654568281",
                }}
                style={styles.image3}
              >
                <View style={styles.imageTextContainer}>
                  <Text style={styles.exploreTitle}>K-Pop</Text>
                </View>
              </ImageBackground>

              <ImageBackground
                source={{
                  uri: "https://puchong.co/uploads/default/optimized/2X/c/c0227ee24014bcc9f162cedeca22aace95c0b7d4_2_1035x538.jpeg",
                }}
                style={styles.image3}
              >
                <View style={styles.imageTextContainer}>
                  <Text style={styles.exploreTitle}>Hip Hop</Text>
                </View>
              </ImageBackground>
            </ImageBackground>

            <ImageBackground
              source={danceworkoutBoxBackgroundImage}
              style={styles.danceworkoutBox}
              imageStyle={{ borderRadius: 25 }}
            >
              <Text style={styles.recommendationTitle}>Dance Workouts</Text>
              <ScrollView
                horizontal
                contentContainerStyle={styles.danceworkoutScroll}
              >
                <ImageBackground
                  source={{
                    uri: "https://ca-times.brightspotcdn.com/dims4/default/ba225b2/2147483647/strip/true/crop/1986x1324+31+0/resize/1440x960!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F45%2Fda%2Fb50246c9f3a8f3678e244f334590%2Fla-he-dance-workouts-pg-20151029-006",
                  }}
                  style={styles.danceworkoutImage}
                />
                <ImageBackground
                  source={{
                    uri: "https://www.communityfitness.com/wp-content/uploads/2019/03/DanceClub-1280x630.jpg",
                  }}
                  style={styles.danceworkoutImage}
                />
                <ImageBackground
                  source={{
                    uri: "https://cdn.vox-cdn.com/thumbor/Jy0xpoevzTT2GUtR-bbd2yFm2-0=/0x9:612x468/1200x800/filters:focal(0x9:612x468)/cdn.vox-cdn.com/uploads/chorus_image/image/45273674/brukwine_2C_201.0.jpeg",
                  }}
                  style={styles.danceworkoutImage}
                />
              </ScrollView>
            </ImageBackground>
          </ImageBackground>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  scrollContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },

  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000097",
  },

  notificationIcon: {
    color: "#000097",
  },

  box1: {
    width: 393,
    height: "auto",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: 20,
    padding: 20,
    overflow: "hidden",
  },

  innerBoxesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  innerBox1: {
    width: 170,
    height: 210,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
    padding: 15,
    borderRadius: 25,
    backgroundColor: "transparent",
  },

  image1: {
    width: 140,
    height: 120,
    marginTop: 6,
    borderRadius: 10,
  },

  eventTitle: {
    color: "#000097",
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14,
    marginTop: 4,
  },

  eventDate: {
    color: "#000097",
    fontFamily: "Montserrat",
    fontSize: 6,
    fontWeight: "400",
    lineHeight: 8,
  },

  innerBox2: {
    width: 170,
    height: 210,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
    padding: 15,
    borderRadius: 25,
    backgroundColor: "transparent",
  },

  image2: {
    width: 140,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "flex-end",
    padding: 5,
  },

  imageTextContainer: {
    width: 113,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 4,
    position: "absolute",
    bottom: 5,
    left: 5,
    padding: 5,
    borderRadius: 5,
  },

  imageText1: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },

  imageText2: {
    color: "#ffffff",
    fontSize: 4,
    fontWeight: "medium",
  },

  recommendationBox: {
    display: "flex",
    width: 375,
    height: 295,
    padding: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
    flexShrink: 0,
    borderRadius: 25,
    marginBottom: 10,
    marginLeft: -10,
  },

  recommendationTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000097",
    marginBottom: 0,
  },

  songBox: {
    display: "flex",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    alignSelf: "stretch",
    paddingLeft: 10,
    borderRadius: 10,
    overflow: "hidden",
  },

  songTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000097",
  },

  exploreBox: {
    display: "flex",
    width: 380,
    padding: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
    flexShrink: 0,
    borderRadius: 25,
    marginBottom: 10,
    marginLeft: -15,
  },

  exploreTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 0,
  },

  image3: {
    width: 325,
    height: 90,
    marginBottom: 5,
    borderRadius: 15,
  },

  danceworkoutBox: {
    display: "flex",
    width: 380,
    height: 170,
    padding: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
    flexShrink: 0,
    borderRadius: 25,
    marginBottom: 20,
    marginLeft: -15,
  },

  danceworkoutScroll: {
    flexDirection: "row",
  },

  danceworkoutImage: {
    width: 205,
    height: 100,
    marginRight: 10,
    borderRadius: 15,
  },
});

export default HomeScreen;
