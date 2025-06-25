import { useEffect } from "react";
import * as THREE from "three";
import { RGBELoader  } from "three/examples/jsm/loaders/RGBELoader";
import { useThree } from "@react-three/fiber";

export default function HDRIEnvironment({ path = "/hdr/sky.hdr" }) {
  const { scene, gl } = useThree();

  useEffect(() => {
    new RGBELoader()
      .setDataType(THREE.FloatType)
      .load(path, (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;

        scene.environment = texture;
        scene.background = texture;

        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1;
      });
  }, [scene, gl, path]);

  return null;
}
