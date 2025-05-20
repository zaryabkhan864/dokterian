import React, { useState, useEffect } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { Card } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/appointmentDetails.style';
import d1 from '../assets/images/d3.jpg';
import d2 from '../assets/images/d4.jpg';

import 'leaflet/dist/leaflet.css';

const L = Platform.OS === 'web' ? require('leaflet') : null;
if (L) {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });
}

const hardcodedData = [
  {
    id: '1',
    name: "Dr. Saad Usman",
    specialization: "Cardiologist",
    imageUrl: d1,
    date: 'Sunday, 12 June',
    time: '11:00 - 12:00 AM',
    status: 'upcoming',
    location: "Al-Shifa Hospital, Lahore",
    coordinates: { latitude: 31.5204, longitude: 74.3587 },
    experience: "12 years",
    contact: "+92 300 1234567"
  },
  {
    id: '2',
    name: 'Dr. Ayesha Khan',
    specialization: 'Dentist',
    imageUrl: d2,
    date: 'Saturday, 10 June',
    time: '03:00 - 03:30 PM',
    status: 'completed',
    location: "Smile Care Clinic, Karachi",
    coordinates: { latitude: 24.8607, longitude: 67.0011 },
    experience: "8 years",
    contact: "+92 322 9876543"
  },
];

const AppointmentDetails = ({ route }) => {
  const { id } = route.params;
  const doctor = hardcodedData.find(doc => doc.id === id);

  const [MapComponent, setMapComponent] = useState(null);
  const [MarkerComponent, setMarkerComponent] = useState(null);
  const [TileLayer, setTileLayer] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'web') {
      import('react-leaflet').then((leaflet) => {
        setMapComponent(() => leaflet.MapContainer);
        setMarkerComponent(() => leaflet.Marker);
        setTileLayer(() => leaflet.TileLayer);
      });
    } else {
      import('react-native-maps').then((maps) => {
        setMapComponent(() => maps.default);
        setMarkerComponent(() => maps.Marker);
      });
    }
  }, []);

  if (!doctor) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Doctor not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.profileWrapper}>
          <Image source={doctor.imageUrl} style={styles.profileImage} />
          <Text style={styles.title}>{doctor.name}</Text>
          <Text style={styles.specialization}>{doctor.specialization}</Text>
        </View>

        <View style={styles.infoRow}>
          <MaterialIcons name="event" style={styles.icon} />
          <Text style={styles.detailText}>Date: {doctor.date}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="schedule" style={styles.icon} />
          <Text style={styles.detailText}>Time: {doctor.time}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="location-on" style={styles.icon} />
          <Text style={styles.detailText}>Location: {doctor.location}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="school" style={styles.icon} />
          <Text style={styles.detailText}>Experience: {doctor.experience}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="phone" style={styles.icon} />
          <Text style={styles.detailText}>Contact: {doctor.contact}</Text>
        </View>
      </Card>

      {/* Map View */}
      <View style={{ marginTop: 20, borderRadius: 16, overflow: 'hidden', height: 200 }}>
        {Platform.OS === 'web' && MapComponent && MarkerComponent && TileLayer ? (
          <MapComponent
            center={[doctor.coordinates.latitude, doctor.coordinates.longitude]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerComponent position={[doctor.coordinates.latitude, doctor.coordinates.longitude]} />
          </MapComponent>
        ) : null}

        {Platform.OS !== 'web' && MapComponent && MarkerComponent ? (
          <MapComponent
            style={{ width: '100%', height: '100%' }}
            initialRegion={{
              latitude: doctor.coordinates.latitude,
              longitude: doctor.coordinates.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <MarkerComponent
              coordinate={doctor.coordinates}
              title={doctor.name}
              description={doctor.location}
            />
          </MapComponent>
        ) : null}
      </View>
    </View>
  );
};

export default AppointmentDetails;
