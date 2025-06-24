export default function ControlPanel({ color, setColor, lightsOn, setLightsOn, onSave, setCameraView }) {
  return (
    <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 w-72 space-y-4 text-gray-800">
      <div className="flex items-center gap-5">
        <label className="font-semibold">Color：</label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="px-8 py-4 border rounded "
        >
          <option value="orange">Orange</option>
          <option value="pink">Pink</option>
          <option value="silver">Silver</option>
          <option value="white">White</option>
        </select>
      </div>

            {/* 这里插入视角切换按钮 */}
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-xl">Camera:</label>
        <div className="grid grid-cols-3 gap-2">
          <button onClick={() => setCameraView("front")} className="w-full py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-semibold shadow transition">Front</button>
          <button onClick={() => setCameraView("top")} className="w-full py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-semibold shadow transition">Top</button>
          <button onClick={() => setCameraView("back")} className="w-full py-2 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-semibold shadow transition">Back</button>
        </div>
      </div>
      
      <button
        onClick={() => setLightsOn((v) => !v)}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded w-full text-xl"
      >
        {lightsOn ? "🔌 Headlight Off" : "💡 Headlight On"}
      </button>
    
      <button
        onClick={onSave}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded w-full text-xl"
      >
        💾 Save Configuration
      </button>
    </div>      
  );
}
