import React from "react";
import { Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import styles from "../styles/header.style";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import profile_Picture from "../assets/images/p1.jpg";

const Header = () => {
  const [fontsLoaded] = useFonts({
    Poppins_Regular: Poppins_400Regular,
    Poppins_Bold: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Jab tak font load nahi hota, kuch render mat karo
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.nameText}>Hi! Abdullah,</Text>
      </View>
      <View>
        <Image
          source={profile_Picture} // ✅ Local image yahan use ho rahi hai
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default Header;
