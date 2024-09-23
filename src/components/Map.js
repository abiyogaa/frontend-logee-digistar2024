import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Add this new import
import { LatLngBounds } from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

function MapController({ onMapReady, initialCoordinates, onPinChange }) {
  const map = useMap();
  
  useEffect(() => {
    if (onMapReady) {
      onMapReady(map);
    }

    // Add this new effect to handle bounds
    const worldBounds = new LatLngBounds([-90, -180], [90, 180]);
    map.setMaxBounds(worldBounds);
    map.on('drag', () => {
      map.panInsideBounds(worldBounds, { animate: false });
    });

  }, [map, onMapReady]);

  useEffect(() => {
    if (initialCoordinates) {
      map.setView(initialCoordinates, 13);
    }
  }, [map, initialCoordinates]);

  useEffect(() => {
    const handleClick = (e) => {
      onPinChange([e.latlng.lat, e.latlng.lng]);
    };

    map.on('click', handleClick);

    return () => {
      map.off('click', handleClick);
    };
  }, [map, onPinChange]);

  return null;
}

function Map({ onPinChange, onMapReady, initialCoordinates }) {
  const [position, setPosition] = React.useState(initialCoordinates || [-6.2088, 106.8456]);

  useEffect(() => {
    if (initialCoordinates) {
      setPosition(initialCoordinates);
    }
  }, [initialCoordinates]);

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      style={{ height: '300px', width: '100%' }}
      minZoom={3}  // Add this line to set a minimum zoom level
      worldCopyJump={true}  // Add this line to improve panning behavior
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={position}
        icon={customIcon}
        eventHandlers={{
          dragend: (e) => {
            const marker = e.target;
            const position = marker.getLatLng();
            setPosition([position.lat, position.lng]);
            onPinChange([position.lat, position.lng]);
          },
        }}
        draggable={true}
      />
      <MapController onMapReady={onMapReady} initialCoordinates={initialCoordinates} onPinChange={(coords) => {
        setPosition(coords);
        onPinChange(coords);
      }} />
    </MapContainer>
  );
}

export default Map;