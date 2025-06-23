import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useState } from "react";
import axios from "axios";

function ChairModel({ color }) {
  const { scene, materials } = useGLTF("/porsche718.glb");

  Object.values(materials).forEach((mat) => {
    if (mat.color) mat.color.set(color);
  });

  return <primitive object={scene} scale={100} position={[0, 0, 0]} />;
}

function Scene() {
  const [color, setColor] = useState("orange");

  const handleSave = () => {
    const config = {
      color: color,
      // 可扩展：后续可以加入 position、rotation 等
    };
    axios
      .post("http://localhost:3001/save", config)
      .then(() => alert("Configuration are Saved"))
      .catch((err) => console.error("Failed:", err));
  };

  return (
    <>
      <Canvas
        style={{ height: "100vh", background: "#eee" }}
        shadows
        camera={{ position: [3, 2, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} castShadow />
        <ChairModel color={color} />
        <OrbitControls />
      </Canvas>

      {/* Control panel */}
<div className="absolute top-4 left-4 bg-white bg-opacity-90 p-4 rounded-xl shadow-md space-x-2">
  <label className="mr-2 font-semibold">选择颜色：</label>
  <select
    onChange={(e) => setColor(e.target.value)}
    value={color}
    className="px-2 py-1 border border-gray-300 rounded"
  >
    <option value="orange">橙色</option>
    <option value="blue">蓝色</option>
    <option value="green">绿色</option>
  </select>
  <button
    onClick={handleSave}
    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
  >
    💾 保存配置
  </button>
</div>

    </>
  );
}

export default Scene;
