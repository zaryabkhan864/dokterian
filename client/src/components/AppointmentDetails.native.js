import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/appointmentDetails.style';
import d1 from '../assets/images/d3.jpg';
import d2 from '../assets/images/d4.jpg';
import MapView, { Marker } from 'react-native-maps';

const hardcodedData = [/* ... your data ... */];

const AppointmentDetails = ({ route }) => {
  const { id } = route.params;
  const doctor = hardcodedData.find(doc => doc.id === id);

  if (!doctor) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Doctor not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Same Card layout */}
      <View style={{ marginTop: 20, borderRadius: 16, overflow: 'hidden', height: 200 }}>
        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: doctor.coordinates.latitude,
            longitude: doctor.coordinates.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={doctor.coordinates}
            title={doctor.name}
            description={doctor.location}
          />
        </MapView>
      </View>
    </View>
  );
};

export default AppointmentDetails;
