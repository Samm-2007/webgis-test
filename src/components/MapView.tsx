import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const Map = () => {
  return (
    <MapContainer
      center={[35.6892, 51.389]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ width: "800px", height: "600px" }}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.6892, 51.389]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
