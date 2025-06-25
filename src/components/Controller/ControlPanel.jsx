export default function ControlPanel({ color, setColor, lightsOn, setLightsOn, onSave, setCameraView, rotateWheels, setRotateWheels }) {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 w-72 text-gray-800 flex flex-col gap-4">
      <h2 className="font-semibold text-gray-800 text-base mb-2">View Settings</h2>
      {/* 🚘 */}
      <div>
        <label className="font-semibold text-base block mb-1">Color:</label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="px-4 py-2 border rounded w-full text-base"
        >
          <option value="orange">Orange</option>
          <option value="pink">Pink</option>
          <option value="silver">Silver</option>
          <option value="white">White</option>
        </select>
      </div>

      {/* 📷 */}
      <div>
        <label className="font-semibold text-base block mb-1">Camera:</label>
        <div className="grid grid-rows-3 gap-2">
          <button onClick={() => setCameraView("front")} className="py-2 rounded text-white bg-blue-600 hover:bg-blue-700 font-semibold text-base">Front</button>
          <button onClick={() => setCameraView("top")} className="py-2 rounded text-white bg-blue-600 hover:bg-blue-700 font-semibold text-base">Top</button>
          <button onClick={() => setCameraView("back")} className="py-2 rounded text-white bg-blue-600 hover:bg-blue-700 font-semibold text-base">Back</button>
        </div>
      </div>

      {/* 💡 */}
      <div>
        <label className="font-semibold text-base block mb-1">Headlight:</label>
        <button
          onClick={() => setLightsOn((v) => !v)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full font-semibold text-base"
        >
          {lightsOn ? "🔌 Headlight Off" : "💡 Headlight On"}
        </button>

        <button
          onClick={() => setRotateWheels((v) => !v)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded w-full text-lg font-semibold mt-2"
        >
          {rotateWheels ? "🛑 Stop Wheels" : "🔄 Rotate Wheels"}
        </button>
      </div>
    </div>
  );
}
