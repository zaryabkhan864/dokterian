import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const theme = {
    colors: {
        primary: "#3b3b98",
        secondary: "#7d7dc8",
        tertiary: "#FF7754",
        gray: "#8696BB",
        offWhite:"#F3F4F8",
        white: "#FFFFFF",
        black:"#0D1B34",
        lightWhite:"#FAFAFC",
    },
    sizes: {
        xSmall: 10,
        small: 12,
        medium: 16,
        large: 20,
        xLarge: 24,
        xxlarge: 44,
        width,
        height
    },
    fonts: {
        regular: "Poppins-Regular",
        bold: "Poppins-Bold",
        italic: "Poppins-Italic"
    }
};
