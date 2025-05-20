import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const NativeMapView = ({ coordinates, name, location }) => (
  <View style={{ marginTop: 20, borderRadius: 16, overflow: 'hidden' }}>
    <MapView
      style={{ width: '100%', height: 200 }}
      initialRegion={{
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={coordinates} title={name} description={location} />
    </MapView>
  </View>
);

export default NativeMapView;
