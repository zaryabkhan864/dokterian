import { StyleSheet } from "react-native";
import {theme} from "../constants/theme.js"
const styles = StyleSheet.create({
  infoContainer: {
    paddingTop: 30,

  },
  infoTitle:{
    color: theme.colors.primary,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
  cardContainer: {
    paddingHorizontal: 10,
    marginVertical:10,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 10, // Optional for rounded corners
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoCardTitle: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily:theme.fonts.bold
  },
  infoCardParagraph: {
    color: theme.colors.white,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
  },
  divider: {
    backgroundColor: theme.colors.gray,
    height: 1,
    marginVertical: 10,
  },
  infoAppointmentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.white,
    marginLeft: 5,
  },
  detailButton: {
    backgroundColor: theme.colors.tertiary, // light blue jesa image mein
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  
  detailButtonText: {
    color: theme.colors.tertiary, // match text color with your primary theme
    fontFamily: theme.fonts.bold,
    fontSize: 14,
  },
  textStyleLeft:{
    color:theme.colors.white
  },
  textStyleRight:{
    color:theme.colors.white
  },
  textLocation:{
    color:theme.colors.white
  }
});

export default styles;
