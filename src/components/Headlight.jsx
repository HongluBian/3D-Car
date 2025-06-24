import { useEffect } from "react";

export default function Headlight({ root, lightsOn }) {
  useEffect(() => {
    if (!root) return;
    root.traverse((child) => {
      if (
        child.name?.toLowerCase().includes("light")||
        child.name?.toLowerCase().includes("head")
      ) {
        child.color = lightsOn ? 0xfffff1 : 0x000000; // Set color to white if lights are on, otherwise black
      }
    });
  }, [root, lightsOn]);

  return null;
}
