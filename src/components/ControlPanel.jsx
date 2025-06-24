export default function ControlPanel({ color, setColor, lightsOn, setLightsOn, onSave }) {
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
