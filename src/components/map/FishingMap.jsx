import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { useMemo, useState } from 'react';
import { motion as Motion } from 'framer-motion';

// Default Leaflet icon fix for bundlers
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new L.Icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const AddMarkerOnClick = ({ onAdd }) => {
  useMapEvents({
    click(e) {
      onAdd({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });
  return null;
};

const FishingMap = () => {
  const [spots, setSpots] = useState([]);

  const center = useMemo(() => ({ lat: 36.7213, lng: -4.4214 }), []); // Málaga by default

  const handleAddSpot = (latlng) => {
    setSpots((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...latlng,
        name: 'Buen sitio de pesca',
        note: 'Haz click para editar más adelante…',
      },
    ]);
  };

  return (
    <Motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ height: '70vh', minHeight: 400 }}>
      <MapContainer center={[center.lat, center.lng]} zoom={11} style={{ height: '100%', width: '100%' }} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddMarkerOnClick onAdd={handleAddSpot} />
        {spots.map((s) => (
          <Marker key={s.id} position={[s.lat, s.lng]} icon={defaultIcon}>
            <Popup>
              <strong>{s.name}</strong>
              <div className="small text-muted">{s.lat.toFixed(5)}, {s.lng.toFixed(5)}</div>
              <div>{s.note}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Motion.div>
  );
};

export default FishingMap;
