import { useState } from "react";
import { useMapEvents } from "react-leaflet";

export default function MouseCoordination() {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  useMapEvents({
    mousemove(event) {
      setCoordinates({
        latitude: event.latlng.lat,
        longitude: event.latlng.lng,
      });
    },
  });
  return (
    <div
      style={{
        position: "absolute",
        bottom: "10px",
        left: "10px",
        zIndex: 1000,
        backgroundColor: "white",
        padding: "8px 12px",
        borderRadius: "6px",
        direction: "ltr",
      }}
    >
      طول جغرافیایی:{coordinates.latitude.toFixed(6)}
      <br />
      عرض جغرافیایی:{coordinates.latitude.toFixed(6)}
    </div>
  );
}
