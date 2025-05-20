import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/appointmentDetails.style';
import d1 from '../assets/images/d3.jpg';
import d2 from '../assets/images/d4.jpg';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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
        <MapContainer
          center={[doctor.coordinates.latitude, doctor.coordinates.longitude]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[doctor.coordinates.latitude, doctor.coordinates.longitude]} />
        </MapContainer>
      </View>
    </View>
  );
};

export default AppointmentDetails;
