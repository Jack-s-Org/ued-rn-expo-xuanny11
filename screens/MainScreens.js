import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen from "./HomeScreen";
import CommunityScreen from "./CommunityScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import KpopScreen from "./KpopScreen";
import ChoreographyScreen from "./ChoreographyScreen";
import ProfileScreen from "./ProfileScreen";
import JoinClassScreen from "./JoinClassScreen";
import SelectScreen from "./SelectScreen";
import PositionScreen from "./PositionScreen";
import MovementScreen from "./MovementScreen";
import VideoScreen from "./VideoScreen";

const MainStacks = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(4);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#408086",
        tabBarStyle: {
          borderRadius: 90,
          position: "absolute",
          bottom: 25,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 12,
          backgroundColor: "#1B1B1B",
          width: 350,
          alignSelf: "center",
          marginLeft: 30,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                marginTop: 40,
                width: 40,
                height: 40,
                marginLeft: 20,
              }}
            >
              <FontAwesome name="home" size={size} color={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="library"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                marginTop: 40,
                width: 40,
                height: 40,
                marginLeft: 20,
              }}
            >
              <FontAwesome5 name="folder-open" size={24} color={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="video"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                marginTop: 40,
                width: 40,
                height: 40,
                marginLeft: 20,
              }}
            >
              <Feather name="video" size={24} color={color} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SettingsDrawer"
        component={MeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                marginTop: 40,
                width: 40,
                height: 40,
                marginRight: 20,
              }}
            >
              <AntDesign name="user" size={24} color={color} />
            </View>
          ),
          tabBarLabel: "Me",
        }}
      />
    </Tab.Navigator>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator screenOptions={{ headerShown: false }}>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="KpopScreen"
        component={KpopScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="ChoreographyScreen"
        component={ChoreographyScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="JoinClassScreen"
        component={JoinClassScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="SelectScreen"
        component={SelectScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="PositionScreen"
        component={PositionScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="MovementScreen"
        component={MovementScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{ animation: "fade_from_bottom" }}
      />

      <MainStacks.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
