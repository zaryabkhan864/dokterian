import { StyleSheet } from "react-native";
import { theme } from '../constants/theme';
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  cardWrapper: {
    marginRight: 10,
  },
  cardContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    width: 280, // Card ka fixed width
    paddingVertical: 8,
    paddingHorizontal: 2,
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
    color: "white",
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
  infoCardParagraph: {
    color: theme.colors.offWhite,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
  },
  divider: {
    backgroundColor: theme.colors.lightWhite,
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
    color: theme.colors.lightWhite,
    marginLeft: 5,
  },
  icon:{
    color:theme.colors.lightWhite
  }
});

export default styles;
