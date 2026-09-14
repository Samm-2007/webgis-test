import "./App.css";
import MapView from "./components/MapView";

const App = () => (
  <div className="app">
    <h1>WebGIS Project</h1>
    <div className="map-container">
      <MapView />
    </div>
  </div>
);

export default App;
