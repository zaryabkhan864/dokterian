import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FF',
    padding: 20,
  },
  card: {
    backgroundColor: '#4894FE',
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
    color: 'white',
    fontFamily: 'Poppins_Bold',
  },
  specialization: {
    fontSize: 16,
    color: '#CBE1FF',
    fontFamily: 'Poppins_Regular',
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
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_Regular',
    flex: 1,
    flexWrap: 'wrap',
  },
  notFound: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Poppins_Bold',
  },
});

export default styles;
