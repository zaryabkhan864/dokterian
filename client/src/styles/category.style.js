import { StyleSheet } from "react-native";

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
    categoryCircle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: "#e0f7fa",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 8,
    },
    
    categoryText: {
      textAlign: "center",
      fontSize: 14,
      paddingTop: 2, // Reduce spacing
      fontFamily: "Poppins_Regular",
      color: "#8696BB",
    },
  });

export default styles;