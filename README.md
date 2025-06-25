# 🚗 3D Car Configurator

A simple 3D car configurator built with React, Three.js, and TailwindCSS.

## 🔧 Features

- 🎨 Change car color (Orange, Pink, Silver, White)
- 💡 Toggle headlights
- 🎛️ Adjust metalness and roughness in real-time
- 🧭 Switch camera views (Front, Top, Back)
- 🌄 Realistic lighting with HDRI environment
- 💾 Save and load config from local server (Express)

## 🛠 Tech Stack

- **Frontend:** React, Vite, TailwindCSS, Three.js, @react-three/fiber, @react-three/drei  
- **Backend:** Node.js + Express (for config saving/loading)
- **3D Assets:** glTF (.glb), HDR (.hdr)

## 🚀 Usage

```bash
# Frontend
npm install
npm run dev

# Backend (in /server)
npm install
node index.js
