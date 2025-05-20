import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
  
  },
  textContainer: {
    flexDirection: "column",
  },
  helloText: {
    color: "gray",
    fontSize: 16,
    fontFamily: "Poppins_Regular",
  },
  nameText: {
    color: "Black",
    fontSize: 20,
    fontFamily: "Poppins_Bold",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default styles;
