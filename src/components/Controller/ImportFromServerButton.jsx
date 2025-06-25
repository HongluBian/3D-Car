// ImportFromServerButton.jsx
import axios from "axios";

export default function ImportFromServerButton({ setColor, setLightsOn, setMetalness, setRoughness }) {
  const handleLoad = async () => {
    try {
      const res = await axios.get("http://localhost:3001/load");
      const config = res.data;

      if (config.color) setColor(config.color);
      if (typeof config.lightsOn === "boolean") setLightsOn(config.lightsOn);
      if (typeof config.metalness === "number") setMetalness(config.metalness);
      if (typeof config.roughness === "number") setRoughness(config.roughness);

      alert("✅ Configuration loaded from server!");
    } catch (err) {
      console.error(" Load failed", err);
      alert("Failed to load configuration.");
    }
  };

  return (
    <button
      onClick={handleLoad}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full text-lg font-semibold mt-4"
    >
      ☁️ Load Server Config
    </button>
  );
}
