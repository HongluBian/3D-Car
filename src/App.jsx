import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import axios from "axios";

import CarModel from "./components/CarModel";
import Headlight from "./components/Headlight";
import ControlPanel from "./components/ControlPanel";

function App() {
  const [color, setColor] = useState("orange");
  const [lightsOn, setLightsOn] = useState(true);
  const [carRef, setCarRef] = useState(null);

  const handleSave = () => {
    const config = { color, lightsOn };
    axios.post("http://localhost:3001/save", config).then(() => alert("Configuration saved"));
  };

  return (
    <>
      <Canvas style={{ height: "100vh", background: "#f3f4f6" }} shadows camera={{ position: [5, 2, 6], fov: 45 }}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 14]} castShadow />
        <CarModel color={color} onLoaded={setCarRef} />
        <Headlight root={carRef} lightsOn={lightsOn} /> 
        <OrbitControls />
      </Canvas>
      <ControlPanel
        color={color}
        setColor={setColor}
        lightsOn={lightsOn}
        setLightsOn={setLightsOn}
        onSave={handleSave}
      />
    </>
  );
}

export default App;
