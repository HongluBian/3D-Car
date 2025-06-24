import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function CarModel({ color, onLoaded }) {
  const group = useRef();
  const { scene, materials } = useGLTF("/porsche718.glb");

useEffect(() => {
  Object.entries(materials).forEach(([name, mat]) => {
    const lowerName = name.toLowerCase();
    if (
      mat.color &&
      (
        lowerName.includes("body") ||
        lowerName.includes("paint") ||
        lowerName.includes("car") ||
        lowerName.includes("chassis")
      ) &&
      !lowerName.includes("tyre") &&
      !lowerName.includes("wheel") &&
      !lowerName.includes("glass") &&
      !lowerName.includes("rim")
    ) {
      mat.color.set(color);
    }
  });
}, [color]);

  useEffect(() => {
    if (onLoaded) onLoaded(group.current);
  }, [scene]);

  return <primitive object={scene} ref={group} scale={125} position={[0, 0, 0]} />;
}
