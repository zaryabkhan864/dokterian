import { StyleSheet } from "react-native";
import {theme} from '../constants/theme.js'
const styles = StyleSheet.create({
  infoContainer: {


  },
  infoTitle:{
    color: theme.colors.primary,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
  cardContainer: {
    paddingHorizontal: 10,
    backgroundColor:theme.colors.white,
    color: theme.colors.white,
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
    fontFamily: theme.colors.bold,
  },
  infoCardParagraph: {
    color: theme.colors.secondary,
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
  textStyleLeft: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.tertiary,
    marginLeft: 5,
  },
  textStyleRight: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.black,
    marginLeft: 5,
  },
  detailButtonWrapper: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    width: '100%',
    marginTop: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  detailButtonText: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
    fontSize: 14,
  },

});

export default styles;
