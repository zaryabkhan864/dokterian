import { StyleSheet } from "react-native";
import {theme} from '../constants/theme.js'
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center", // Ensure items align properly
    },
    categoryMainContainer: {
      alignItems: "center", // Centers image and text
      justifyContent: "center",
      marginHorizontal: 5, // Reduce spacing between items
      marginVertical: 10, // Add some vertical margin
      padding: 5, // Add padding around each item
    },
    categoryIcon:{

      color:theme.colors.white
    },
    categoryCircle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: theme.colors.secondary,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 8,
    },
    
    categoryText: {
      textAlign: "center",
      fontSize: 14,
      paddingTop: 2, // Reduce spacing
      fontFamily: theme.fonts.regular,
      color: theme.colors.primary,
    },
  });

export default styles;