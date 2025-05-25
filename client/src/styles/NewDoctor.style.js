import { StyleSheet } from "react-native";
import {theme} from "../constants/theme.js"
const styles = StyleSheet.create({
  infoTitle:{
    color: theme.colors.black,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
  cardContainer: {
    paddingHorizontal: 10,
    backgroundColor:theme.colors.lightWhite,
    color: theme.colors.primary,
    borderRadius: 10, // Optional for rounded corners
    marginVertical: 10,
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
    color: theme.colors.primary,
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
  infoCardParagraph: {
    color: theme.colors.gray,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
  },
  divider: {
    backgroundColor: theme.colors.primary,
    height: 1,
    marginVertical: 10,
  },
  infoAppointmentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyleLeft: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.tertiary,
    marginLeft: 5,
  },
  textStyleRight: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.primary,
    marginLeft: 5,
  },
  icon:{
    color:theme.colors.primary
  }
});

export default styles;
