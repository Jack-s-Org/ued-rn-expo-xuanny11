import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";

const MeScreen = () => {
  const imageSource = require("@/images/profile.png"); // Replace with your image path

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={imageSource} style={styles.image} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 1300,
  },
  image: {
    top: -65,
    width: 415,
    height: 1300,
    resizeMode: "contain",
  },
});

export default MeScreen;
