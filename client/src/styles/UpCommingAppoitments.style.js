import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  infoContainer: {
    paddingTop: 30,

  },
  infoTitle:{
    color: "Black",
    fontSize: 20,
    fontFamily: "Poppins_Bold",
  },
  cardContainer: {
    paddingHorizontal: 10,
    marginVertical:10,
    backgroundColor: '#4894FE',
    color: 'white',
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
  detailButton: {
    backgroundColor: "#E4EDFF", // light blue jesa image mein
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  
  detailButtonText: {
    color: "#4894FE", // match text color with your primary theme
    fontFamily: "Poppins_Bold",
    fontSize: 14,
  },
  textStyleLeft:{
    color:"white"
  },
  textStyleRight:{
     color:"white"
  },
  textLocation:{
    color:"white"
  }
});

export default styles;
