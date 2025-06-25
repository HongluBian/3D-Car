import React from "react";

export default function MaterialPanel({ metalness, setMetalness, roughness, setRoughness }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm shadow-md p-4 rounded-xl w-72 text-sm z-50 flex flex-col gap-4">
      <h2 className="font-semibold text-gray-800 text-base mb-2">Material Settings</h2>

      {/* Metalness */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700 mb-1">
          Metalness: <span className="text-gray-500">{metalness.toFixed(2)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={metalness}
          onChange={(e) => setMetalness(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Roughness */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700 mb-1">
          Roughness: <span className="text-gray-500">{roughness.toFixed(2)}</span>
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={roughness}
          onChange={(e) => setRoughness(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}
