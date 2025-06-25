import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function CameraController({ targetPosition }) {
  const { camera } = useThree();
  const isAnimating = useRef(false);
  useEffect(() => {
    isAnimating.current = true;
  }, [targetPosition]);

  useFrame(() => {
    if (isAnimating.current) {
      const dist = camera.position.distanceTo(targetPosition);

      if (dist < 0.05) {
        isAnimating.current = false;
      } else {
        camera.position.lerp(targetPosition, 0.05);
        camera.lookAt(0, 0, 0);
      }
    }
  });

  return null;
}
