import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const backgroundImage = require("@/images/background.jpg");
const categoryImage = require("@/images/catbox.png");
const programImage = require("@/images/programbox.png");
const categoriescardImage = require("@/images/categoriescard.png");

const categoryCardsData = [
  {
    text: "Krump",
    imageUri: "https://i.ytimg.com/vi/HisXcTeo4mc/maxresdefault.jpg",
  },
  {
    text: "Hip Hop",
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WMZb5OwwTwGR7ANRFi8CcpU4vYt0edZ5-w&s",
  },
  {
    text: "K-Pop",
    imageUri:
      "https://imagevars.gulfnews.com/2019/10/18/TAB-191017-SPOT-K-POP-18-1571388353341_16dde0b6b3e_large.jpg",
  },
  {
    text: "Contemporary",
    imageUri:
      "https://www.sa-dance.co.uk/wp-content/uploads/2019/03/Contemporary-Dance.jpg",
  },
  {
    text: "Ballet",
    imageUri:
      "https://balletmemphis.org/imager/assets/site-media/Homepage/2363/HomepageVideoBG_35ac9b3331b57c185c9691fcedc762ec.jpg",
  },
  {
    text: "Popping",
    imageUri:
      "https://clubsixteen.com.np/wp-content/uploads/2023/06/club_sixteen_popping-and-locking-dance.jpg",
  },
  {
    text: "Jazz",
    imageUri: "https://www.panoramadance.com/files/2018/03/IMG_2563-scaled.jpg",
  },
  {
    text: "Salsa",
    imageUri:
      "https://cdn.prod.website-files.com/5e2b8863ba7fff8df8949888/6271683ee42cbb81b709efc3_Let%27s%20Salsa.png",
  },
];

const DiscoverScreen = () => {
  const navigation = useNavigation();

  const handleCardPress = (category) => {
    if (category === "K-Pop") {
      navigation.navigate("KpopScreen");
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.headerContainer}>
        <Text style={styles.logoText}>Library</Text>
        <View style={styles.iconContainer}>
          <Icon name="filter-outline" size={35} style={styles.libraryIcon} />
          <Icon
            name="notifications-outline"
            size={35}
            style={styles.notificationIcon}
          />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
          <ImageBackground source={categoryImage} style={styles.scrollImage1}>
            <Text style={styles.scrollText}>Categories</Text>
          </ImageBackground>
          <ImageBackground source={programImage} style={styles.scrollImage2}>
            <Text style={styles.scrollText}>Classes</Text>
          </ImageBackground>
          <ImageBackground source={programImage} style={styles.scrollImage2}>
            <Text style={styles.scrollText}>Program</Text>
          </ImageBackground>
          <ImageBackground source={programImage} style={styles.scrollImage2}>
            <Text style={styles.scrollText}>Instructor</Text>
          </ImageBackground>
        </ScrollView>

        <ScrollView
          style={{ height: "100%" }}
          contentContainerStyle={styles.categoriesScrollContainer}
        >
          {categoryCardsData.map((card, index) => (
            <TouchableOpacity
              key={index}
              style={styles.categoriesCardContainer}
              onPress={() => handleCardPress(card.text)}
            >
              <ImageBackground
                source={categoriescardImage}
                style={styles.categoriesCardImage}
              >
                <Text style={styles.cardText}>{card.text}</Text>
                <Image
                  source={{ uri: card.imageUri }}
                  style={styles.innerCardImage}
                />
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
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

  contentContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },

  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  categoriesScrollContainer: {
    flexDirection: "column",
    paddingTop: 20,
  },

  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: -20,
  },

  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000097",
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  libraryIcon: {
    color: "#000097",
    marginRight: 10,
  },

  notificationIcon: {
    color: "#000097",
  },

  scrollImage1: {
    width: 190,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  scrollImage2: {
    width: 165,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },

  scrollText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "medium",
    textAlign: "center",
    backgroundColor: "transparent",
    padding: 5,
    borderRadius: 5,
  },

  categoriesCardContainer: {
    width: 395,
    height: 250,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
    marginBottom: -90,
  },

  categoriesCardImage: {
    width: 400,
    height: 250,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 10,
    marginBottom: 4,
    overflow: "hidden",
    gap: 12,
  },

  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000097",
    marginTop: 16,
    marginLeft: 20,
    alignItems: "flex-start",
  },

  innerCardImage: {
    width: 340,
    height: 145,
    marginLeft: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export default DiscoverScreen;
