import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  cardWrapper: {
    marginRight: 15,
  },
  cardContainer: {
    backgroundColor: '#4894FE',
    borderRadius: 10,
    width: 280, // Card ka fixed width
    padding: 10,
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
    fontFamily: "Poppins_Bold",
  },
  infoCardParagraph: {
    color: '#CBE1FF',
    fontSize: 14,
    fontFamily: "Poppins_Regular",
  },
  divider: {
    backgroundColor: "#CBE1FF",
    height: 1,
    marginVertical: 10,
  },
  infoAppointmentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    color: "white",
    marginLeft: 5,
  },
});

export default styles;
