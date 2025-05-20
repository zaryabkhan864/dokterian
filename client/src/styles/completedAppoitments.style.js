import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  infoContainer: {


  },
  infoTitle:{
    color: "Black",
    fontSize: 20,
    fontFamily: "Poppins_Bold",
  },
  cardContainer: {
    paddingHorizontal: 10,
    backgroundColor:"#FFFFFF",
    color: '#FFFFFF',
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
    color: "#0D1B34",
    fontSize: 16,
    fontFamily: "Poppins_Bold",
  },
  infoCardParagraph: {
    color: '#8696BB',
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
  textStyleLeft: {
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    color: "#FEB052",
    marginLeft: 5,
  },
  textStyleRight: {
    fontFamily: "Poppins_Regular",
    fontSize: 12,
    color: "Black",
    marginLeft: 5,
  },
  detailButtonWrapper: {
    backgroundColor: '#E4EDFF',
    borderRadius: 10,
    width: '100%',
    marginTop: 15,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  detailButtonText: {
    color: '#4894FE',
    fontFamily: 'Poppins_Bold',
    fontSize: 14,
  },

});

export default styles;
