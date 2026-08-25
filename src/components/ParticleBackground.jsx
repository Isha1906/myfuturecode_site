import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useMemo } from "react";

export function ParticleBackground() {
  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#818cf8", // Tailwind indigo-400
      },
      links: {
        color: "#6366f1", // Tailwind indigo-500
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 70, // Not too crowded
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <ParticlesProvider init={async (engine) => await loadSlim(engine)}>
      <Particles
        id="tsparticles"
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
        options={options}
      />
    </ParticlesProvider>
  );
}
