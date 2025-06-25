import { useEffect } from "react";

export default function Headlight({ root, lightsOn }) {
  useEffect(() => {
    if (!root) return;
    root.traverse((child) => {
      if (child.name) {
        //console.log("nodes:", child.name);
      }
      if (
/*         child.name?.toLowerCase().includes("light")||
        child.name?.toLowerCase().includes("head") */
        child.isLight
      ) {
        console.log("Found light:", child);
        child.intensity = lightsOn ? 1 : 0; // Set intensity to 1 if lights are on, otherwise 0
      }
    });
  }, [root, lightsOn]);

  return null;
}
