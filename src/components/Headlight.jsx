import { useEffect } from "react";

export default function Headlight({ root, lightsOn }) {
  useEffect(() => {
    if (!root) return;
    root.traverse((child) => {
      if (child.name) {
        console.log("🚗 子节点名:", child.name);
      }
      if (
        child.name?.toLowerCase().includes("light")||
        child.name?.toLowerCase().includes("head")
      ) {
        child.visible = lightsOn; // Set intensity to 1 if lights are on, otherwise 0
      }
    });
  }, [root, lightsOn]);

  return null;
}
