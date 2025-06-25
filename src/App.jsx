import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useRef } from "react";
import * as THREE from "three";
import axios from "axios";

import CarModel from "./components/View/CarModel";
import Headlight from "./components/View/Headlight";
import ControlPanel from "./components/Controller/ControlPanel";
import CameraController from "./components/View/CameraController";
import MaterialPanel from "./components/Controller/MaterialPanel";
import SaveButton from "./components/Controller/SaveButton";

function App() {
  const [color, setColor] = useState("orange");
  const [lightsOn, setLightsOn] = useState(true);
  const [carRef, setCarRef] = useState(null);
  const orbitRef = useRef();
  const [targetCameraPosition, setTargetCameraPosition] = useState(new THREE.Vector3(5, 2, 6)); 
  const [metalness, setMetalness] = useState(0.5);
  const [roughness, setRoughness] = useState(0.5);

  const handleSave = () => {
    const config = { color, lightsOn, metalness, roughness };
    axios.post("http://localhost:3001/save", config).then(() => alert("Configuration saved"));
  };

  const setCameraView = (view) => {
    let newPos;

    switch (view) {
      case "front":
        newPos = new THREE.Vector3(5, 2, 6);
        break;
      case "top":
        newPos = new THREE.Vector3(0, 10, 0);
        break;
      case "back":
        newPos = new THREE.Vector3(-5, 2, -6);
        break;
      default:
        newPos = new THREE.Vector3(5, 2, 6);
    }

    setTargetCameraPosition(newPos);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, position: "relative" }}>
        <Canvas
          style={{ width: "100%", height: "100%", background: "#f3f4f6" }}
          shadows
          camera={{ position: [5, 2, 6], fov: 45 }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 14]} castShadow />
          <CarModel
            color={color}
            metalness={metalness}
            roughness={roughness}
            onLoaded={setCarRef}
          />
          <Headlight root={carRef} lightsOn={lightsOn} />
          <CameraController targetPosition={targetCameraPosition} />
          <OrbitControls ref={orbitRef} />
        </Canvas>
      </div>

      <div className="flex-col gap-4 p-4 w-72">
        <ControlPanel
          color={color}
          setColor={setColor}
          lightsOn={lightsOn}
          setLightsOn={setLightsOn}
          setCameraView={setCameraView}
        />
        <MaterialPanel
          metalness={metalness}
          setMetalness={setMetalness}
          roughness={roughness}
          setRoughness={setRoughness}
        />
        <SaveButton onSave={handleSave} />
      </div>
    </div>
  );
}

export default App;
