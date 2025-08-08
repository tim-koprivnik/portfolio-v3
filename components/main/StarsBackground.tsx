'use client';

import React, { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const StarBackground = (props: any) => {
  const ref: any = useRef(null);
  const sphere = useMemo(() => {
    const NUM_POINTS = 5000; // number of particles
    const arr = random.inSphere(new Float32Array(NUM_POINTS * 3), {
      radius: 1.2,
    });
    // Guard against any accidental NaN/Infinity values
    for (let i = 0; i < arr.length; i += 1) {
      if (!Number.isFinite(arr[i])) arr[i] = 0;
    }
    return arr;
  }, []);

  useFrame((state: any, delta: any) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
