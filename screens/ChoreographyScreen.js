import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const backgroundImage = require("@/images/background.jpg");

const ChoreographyScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>STEEZY</Text>
        <Icon
          name="notifications-outline"
          size={35}
          style={styles.notificationIcon}
        />
      </View>
    </ImageBackground>
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
});

export default ChoreographyScreen;
