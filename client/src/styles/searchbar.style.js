import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchMainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "#FAFAFA",
        borderRadius: 10,
    },
    searchTouch: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    searchText: {
        color: "gray",
        fontSize: 16,
        fontFamily: "Poppins_Regular",
    },
    
})
export default styles;