import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function CarModel({ color, metalness, roughness, rotateWheels, onLoaded }) {
  const group = useRef();
  const { scene, materials } = useGLTF("/porsche718.glb");
  const wheelRefs = useRef([]);

  // mesh
  useEffect(() => {
    wheelRefs.current = [];
    scene.traverse((child) => {
      const name = child.name.toLowerCase();
      if (name.includes("wheel") || name.includes("tire")) {
        wheelRefs.current.push(child);
      }
    });

    // materials
    Object.values(materials).forEach((mat) => {
      const matName = mat.name?.toLowerCase() || "";
      if (
        mat.color &&
        !matName.includes("tyre") &&
        !matName.includes("wheel") &&
        !matName.includes("rim") &&
        !matName.includes("glass")
      ) {
        mat.color.set(color);
        mat.metalness = metalness;
        mat.roughness = roughness;
      }
    });

    if (onLoaded) onLoaded(group.current);
  }, [scene, materials, color, metalness, roughness]);

  useFrame((_, delta) => {
    if (rotateWheels) {
      wheelRefs.current.forEach((wheel) => {
        wheel.rotation.x += delta * 100;
      });
    }
  });

  return <primitive object={scene} ref={group} scale={145} position={[0, 0, 0]} />;
}
