import { StyleSheet } from 'react-native';
import {theme} from '../constants/theme.js'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  card: {
    backgroundColor: theme.colors.primary,
    borderRadius: 16,
    padding: 16,
    elevation: 4,
  },
  profileWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
  },
  specialization: {
    fontSize: 16,
    color: theme.colors.gray,
    fontFamily: theme.fonts.regular,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    
    alignItems: 'center',
    marginBottom: 6,
  },
  icon: {
    fontSize: 20,
    color: 'white',
    marginRight: 8,
  },
  detailText: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    flex: 1,
    flexWrap: 'wrap',
  },
  notFound: {
    color: theme.colors.tertiary,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    fontFamily: theme.colors.bold,
  },
});

export default styles;
