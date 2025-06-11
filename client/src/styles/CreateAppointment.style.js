import { StyleSheet } from 'react-native';
import { theme } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  heading: {
    fontSize: 22,
    fontFamily: theme.fonts.bold,
    marginBottom: 20,
    color: theme.colors.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: theme.colors.white,
    fontFamily: theme.fonts.regular,
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    marginVertical: 5,
    color: theme.colors.primary,
  },
  buttonWrapper: {
    marginTop: 20,
  },


  submitButton: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontFamily: theme.fonts.bold,
  },
  selectBox: {
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: theme.colors.white,
  },
  selectText: {
    fontSize: 15,
    fontFamily: theme.fonts.regular,
    color: theme.colors.dark,
  },
  
  
});

export default styles;
