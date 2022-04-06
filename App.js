import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import Home from "./app/src/screens/Home";
import Details from "./app/src/screens/Details";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backround: "transparent",
  },
};

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./app/src/assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./app/src/assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./app/src/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./app/src/assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./app/src/assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
