import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CarModel({ color, metalness, roughness, onLoaded }) {
  const group = useRef();
  const { scene, materials } = useGLTF("/porsche718.glb");

  const [targetColor] = useState(new THREE.Color(color)); // 目标色
  const [currentColor] = useState(new THREE.Color(color)); // 当前色

  // ✅ 每帧动画推进颜色渐变
  useFrame(() => {
    Object.entries(materials).forEach(([name, mat]) => {
      const lower = name.toLowerCase();
      const isBody =
        mat.color &&
        !lower.includes("wheel") &&
        !lower.includes("tyre") &&
        !lower.includes("glass") &&
        !lower.includes("rim");

      if (isBody) {
        // 插值颜色
        currentColor.lerp(targetColor, 0.1);
        mat.color.set(currentColor);
        mat.metalness = metalness;
        mat.roughness = roughness;
      }
    });
  });

  // ✅ 每次 color 改变时，更新目标颜色
  useEffect(() => {
    targetColor.set(color);
  }, [color]);

  useEffect(() => {
    if (onLoaded) onLoaded(group.current);
  }, [scene]);

  return <primitive object={scene} ref={group} scale={125} position={[0, 0, 0]} />;
}
