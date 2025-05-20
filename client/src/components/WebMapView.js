import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const WebMapView = ({ coordinates, name, location }) => (
  <div style={{ marginTop: 20, borderRadius: 16, overflow: 'hidden', height: 200 }}>
    <MapContainer
      center={[coordinates.latitude, coordinates.longitude]}
      zoom={15}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates.latitude, coordinates.longitude]}>
        <Popup>
          <strong>{name}</strong><br />{location}
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default WebMapView;
