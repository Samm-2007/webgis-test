import "./App.css";
import MapView from "./components/MapView";
import { useState, useEffect } from "react";
import { getGeoData } from "./services/geoJsonService";
import type { FarmFeature, CountyProperty } from "./types/geo";

const App = () => {
  const [farms, setFarms] = useState<FarmFeature[]>([]);
  const [county, setCounty] = useState<CountyProperty | undefined>();
  useEffect(() => {
    const loadData = async () => {
      const data = await getGeoData();
      if (!data) return;
      setFarms(data.farms);
      setCounty(data.county);
    };

    loadData();
  }, []);
  return (
    <div className="app">
      <h1>WebGIS Project</h1>
      <div className="map-container">
        <MapView farms={farms} county={county} />
      </div>
    </div>
  );
};

export default App;
