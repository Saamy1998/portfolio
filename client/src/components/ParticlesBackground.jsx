import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#111827" },
        particles: {
            number: { value: 60 },
            size: { value: 4 },
            links: {
            enable: true,
            distance: 140,
            color: "#a855f7",
            opacity: 0.6,
            width: 1.2
            },
            move: { enable: true, speed: 1.5 },
        },
        }}
    />
  );
}
