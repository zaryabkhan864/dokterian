import { StyleSheet } from "react-native";
import { theme } from '../constants/theme';
const styles = StyleSheet.create({
    searchMainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.white,
        borderRadius: 10,
    },
    searchTouch: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    searchText: {
        color: theme.colors.gray,
        fontSize: 16,
        fontFamily: theme.fonts.regular,
    },
    
})
export default styles;