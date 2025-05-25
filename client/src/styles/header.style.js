import { StyleSheet } from "react-native";
import { theme } from '../constants/theme';
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
    color: theme.colors.gray,
    fontSize: 16,
    fontFamily: theme.fonts.regular,
  },
  nameText: {
    color: theme.colors.black,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default styles;
