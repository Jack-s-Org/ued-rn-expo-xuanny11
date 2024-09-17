import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const backgroundImage = require("@/images/background.jpg");
const loginpage = require("@/images/loginpage.png");
const loginbutton = require("@/images/loginbutton.png");

const SignInScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.signInText}>LOGIN</Text>

        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image source={loginpage} style={styles.image} />
            <View style={styles.overlay}>
              <MaterialIcons
                name="person"
                size={24}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.usernameText}>Username</Text>
            </View>
          </View>

          <View style={styles.imageWrapper}>
            <Image source={loginpage} style={styles.image} />
            <View style={styles.overlay}>
              <MaterialIcons
                name="lock"
                size={24}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.usernameText}>Password</Text>
            </View>
          </View>
        </View>

        <Text style={styles.forgotPassword}>Forgot Password?</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonImageWrapper}
            onPress={() => navigation.replace("Main", { screen: "Home" })}
          >
            <Image source={loginbutton} style={styles.buttonImage} />
            <Text style={styles.buttonText1}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonImageWrapper}
            onPress={() => navigation.replace("Main", { screen: "Home" })}
          >
            <Image source={loginbutton} style={styles.buttonImage} />
            <Text style={styles.buttonText2}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialIconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="facebook" size={24} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="instagram" size={24} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome5 name="google" size={24} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="apple" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  signInText: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },

  imageContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },

  imageWrapper: {
    position: "relative",
    marginVertical: 4,
  },

  image: {
    width: 315,
    height: 55,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 10,
    right: 10,
    bottom: 6,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },

  icon: {
    marginBottom: 4,
    left: 20,
    color: "#000097",
  },

  usernameText: {
    color: "#000097",
    fontSize: 12,
    left: 35,
  },

  forgotPassword: {
    color: "#000097",
    fontSize: 12,
    marginTop: 20,
    textDecorationLine: "underline",
    bottom: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },

  buttonImageWrapper: {
    position: "relative",
    marginHorizontal: 10,
  },

  buttonImage: {
    width: 150,
    height: 40,
  },

  buttonText1: {
    position: "absolute",
    top: 12,
    left: 53,
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },

  buttonText2: {
    position: "absolute",
    top: 12,
    left: 60,
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },

  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  iconButton: {
    marginHorizontal: 10,
    marginTop: -10,
  },
});

export default SignInScreen;
