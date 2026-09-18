import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import type { FarmFeature, CountyProperty } from "../types/geo";
import MouseCoordination from "./MouseCoordinates";

interface MapViewProps {
  farms: FarmFeature[];
  county?: CountyProperty;
}

export const Map = ({ farms, county }: MapViewProps) => {
  return (
    <MapContainer
      center={[32.381111, 48.405833]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ width: "1080px", height: "600px" }}
      className="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {county && (
        <GeoJSON
          data={county}
          style={{
            color: "blue",
            fillColor: "lightgreen",
            fillOpacity: 0,
          }}
        />
      )}
      {farms.map((farm) => (
        <GeoJSON
          key={farm.properties.id}
          data={farm}
          style={{
            color: "green",
            fillColor: "lightgreen",
            fillOpacity: 0.5,
          }}
        />
      ))}
      <MouseCoordination />
    </MapContainer>
  );
};

export default Map;
