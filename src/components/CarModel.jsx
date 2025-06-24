import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function CarModel({ color, onLoaded }) {
  const group = useRef();
  const { scene, materials } = useGLTF("/porsche718.glb");

  useEffect(() => {
    Object.values(materials).forEach((mat) => {
      if (mat.color) mat.color.set(color);
    });
  }, [color]);

  useEffect(() => {
    if (onLoaded) onLoaded(group.current);
  }, [scene]);

  return <primitive object={scene} ref={group} scale={125} position={[0, 0, 0]} />;
}
