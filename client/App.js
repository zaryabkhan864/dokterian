import React, { useCallback } from "react";
import BottomTabs from "./src/components/BottomTabs";
import AppointmentDetails from "./src/components/AppointmentDetails";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import ForgetPassword from "./src/screens/ForgetPassword";
import 'leaflet/dist/leaflet.css';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen?.hideAsync?.();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Details" component={AppointmentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
