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
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const backgroundImage = require("@/images/background.jpg");
const categoriescardImage = require("@/images/categoriescard.png");

const cardData = [
  {
    id: "1",
    title: "Aespa",
    imageUri: "https://i.ytimg.com/vi/N_u-ReaTu7w/maxresdefault.jpg",
  },
  {
    id: "2",
    title: "Baby Monster",
    imageUri:
      "https://www.asianjunkie.com/wp-content/uploads/2023/05/BABYMONSTERDREAM.png",
  },
  {
    id: "3",
    title: "Blackpink",
    imageUri:
      "https://media.vogue.co.uk/photos/638a1bbcea0309a1184f5da8/master/w_1600%2Cc_limit/%255BBK%255D%2520LONDON_6.jpg",
  },
  {
    id: "4",
    title: "(G)-Idle",
    imageUri:
      "https://pbs.twimg.com/media/FbUtDUHVQAADZ17?format=jpg&name=large",
  },
  {
    id: "5",
    title: "Red Velvet",
    imageUri: "https://pbs.twimg.com/media/GUKlZ4pWIAAlv0t.jpg",
  },
  {
    id: "6",
    title: "New Jeans",
    imageUri:
      "https://flexible.img.hani.co.kr/flexible/normal/970/665/imgdb/original/2024/0701/4117198219154857.jpg",
  },
];

const KpopScreen = () => {
  const navigation = useNavigation();

  const handleCardPress = (category) => {
    if (category === "1") {
      navigation.navigate("ChoreographyScreen");
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>K-Pop</Text>

        <View style={styles.imageTextContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={require("@/images/programbox.png")}
              style={styles.iconImage}
            />
            <Text style={styles.iconText}>Boy Group</Text>
          </View>

          <View style={styles.imageWrapper}>
            <Image
              source={require("@/images/selectgroup.png")}
              style={styles.iconImage2}
            />
            <Text style={styles.iconText2}>Girl Group</Text>
            <MaterialIcons
              name="close"
              size={20}
              color="white"
              style={styles.closeIcon}
            />
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.categoriesCardContainer}
        showsVerticalScrollIndicator={false}
      >
        {cardData.map((card) => (
          <TouchableOpacity
            key={card.id}
            onPress={() => handleCardPress(card.id)}
            activeOpacity={0.7}
            style={styles.categoriesCardImageWrapper}
          >
            <ImageBackground
              source={categoriescardImage}
              style={styles.categoriesCardImage}
            >
              <Text style={styles.cardText}>{card.title}</Text>
              <Image
                source={{ uri: card.imageUri }}
                style={styles.innerCardImage}
              />
            </ImageBackground>
          </TouchableOpacity>
        ))}
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 5,
  },

  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000097",
  },

  imageTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
  },

  imageWrapper: {
    width: 130,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
    position: "relative",
  },

  iconImage: {
    width: 104,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },

  iconImage2: {
    width: 130,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  iconText: {
    fontSize: 12,
    color: "#fff",
    position: "absolute",
    textAlign: "center",
  },

  iconText2: {
    fontSize: 12,
    color: "#fff",
    position: "absolute",
    textAlign: "center",
  },

  closeIcon: {
    position: "absolute",
    top: 30,
    right: 10,
  },

  categoriesCardContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    paddingBottom: 100,
  },

  categoriesCardImageWrapper: {
    marginBottom: -90,
  },

  categoriesCardImage: {
    width: 400,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
  },

  innerCardImage: {
    width: 340,
    height: 145,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },

  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000097",
    marginBottom: 10,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
});

export default KpopScreen;
