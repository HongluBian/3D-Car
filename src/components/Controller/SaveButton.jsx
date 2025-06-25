export default function SaveButton({ onSave }) {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 w-72 text-gray-800 flex flex-col gap-4">
      <h2 className="font-semibold text-gray-800 text-base mb-2">Save Settings</h2>
      <div className="font-semibold text-gray-800 text-lg">
      </div>
      <button
        onClick={onSave}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded w-full text-lg font-semibold"
      >
        💾 Save Configuration
      </button>
    </div>
  );
}
