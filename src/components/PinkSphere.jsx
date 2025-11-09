"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PinkSphere() {
  const containerRef = useRef(null);
  const ringsRef = useRef([]);

  useEffect(() => {
    // Fade + scale-in animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out", delay: 0.6 }
    );

    // Animate each ring
    ringsRef.current.forEach((ring, i) => {
      gsap.to(ring, {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 10 + i * 0.3,
        repeat: -1,
        ease: "linear",
      });
      gsap.to(ring, {
        opacity: 0.7 + i * 0.01,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.05,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 top-[30%] sm:top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    >
      {/* Wrapper for responsive scaling */}
      <div
        className="relative flex justify-center items-center
                   w-[300px] h-[300px]
                   sm:w-[500px] sm:h-[500px]
                   md:w-[700px] md:h-[700px]
                   lg:w-[900px] lg:h-[900px]
                   xl:w-[1000px] xl:h-[1000px]"
      >
        {/* Soft glow background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] h-[70%] sm:w-[80%] sm:h-[80%] rounded-full bg-gradient-to-b from-pink-500/30 to-transparent blur-3xl" />
        </div>

        {/* SVG Sphere Rings */}
        <svg
          className="w-full h-full relative z-10"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="pinkGradient" cx="50%" cy="40%">
              <stop offset="0%" stopColor="#ff00c8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#b000ff" stopOpacity="0.1" />
            </radialGradient>
            <filter id="pinkGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g filter="url(#pinkGlow)">
            {Array.from({ length: 40 }).map((_, i) => (
              <ellipse
                key={i}
                ref={(el) => (ringsRef.current[i] = el)}
                cx="200"
                cy="200"
                rx="180"
                ry={100 + Math.sin(i * 0.25) * 40}
                fill="none"
                stroke={i % 3 === 0 ? "#ff00c8" : "#ff66d4"}
                strokeWidth={i % 5 === 0 ? 2 : 0.6}
                opacity={1 - i / 40}
              />
            ))}
          </g>

          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="url(#pinkGradient)"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
}
