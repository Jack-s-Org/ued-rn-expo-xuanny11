import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import ChoreographyScreen from "./ChoreographyScreen";
import JoinClassScreen from "./JoinClassScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen
          name="ChoreographyScreen"
          component={ChoreographyScreen}
        />
        <Stack.Screen name="JoinClassScreen" component={JoinClassScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
