export default function ControlPanel({ color, setColor, lightsOn, setLightsOn, onSave, setCameraView }) {
  return (
    <div className="absolute top-6 left-6 bg-white bg-opacity-90 rounded-xl shadow space-y-4 px-8 py-4 text-xl">
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
          <button onClick={() => setCameraView("front")} className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-2 text-sm">Front</button>
          <button onClick={() => setCameraView("top")} className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-2 text-sm">Top</button>
          <button onClick={() => setCameraView("back")} className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-2 text-sm">Back</button>
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
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded w-full text-lg"
      >
        💾 Save Configuration
      </button>
    </div>      
  );
}
