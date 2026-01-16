"use client";

import { useEffect, useState } from "react";

interface NodeState {
  active: boolean;
  glowIntensity: number;
}

export function PentagonSystem() {
  const [nodeStates, setNodeStates] = useState<NodeState[]>(
    Array(5).fill({ active: false, glowIntensity: 0.3 })
  );
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    // Breathing animation for all nodes
    const breatheInterval = setInterval(() => {
      setNodeStates((prev) =>
        prev.map((node) => ({
          ...node,
          glowIntensity: 0.3 + Math.sin(Date.now() / 1000) * 0.15,
        }))
      );
    }, 50);

    // Sequential activation animation
    let currentNode = 0;
    const activateInterval = setInterval(() => {
      setNodeStates((prev) =>
        prev.map((node, index) => ({
          ...node,
          active: index === currentNode,
        }))
      );
      currentNode = (currentNode + 1) % 5;
    }, 2500);

    return () => {
      clearInterval(breatheInterval);
      clearInterval(activateInterval);
    };
  }, [reducedMotion]);

  // Pentagon vertices calculation (centered at 200,200 with radius 150)
  const centerX = 200;
  const centerY = 200;
  const radius = 140;
  const nodes = Array(5)
    .fill(0)
    .map((_, i) => {
      const angle = (i * 72 - 90) * (Math.PI / 180);
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    });

  // Lines connecting all nodes
  const lines: { x1: number; y1: number; x2: number; y2: number; nodeIndex: number }[] = [];
  for (let i = 0; i < 5; i++) {
    for (let j = i + 1; j < 5; j++) {
      lines.push({
        x1: nodes[i].x,
        y1: nodes[i].y,
        x2: nodes[j].x,
        y2: nodes[j].y,
        nodeIndex: i,
      });
    }
  }

  return (
    <div className="relative w-full max-w-[400px] aspect-square mx-auto">
      {/* Radial glow behind pentagon */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        aria-label="Pentagon diagram representing MobyApp's five pillars"
        role="img"
      >
        <defs>
          {/* Glow filters for nodes */}
          {nodes.map((_, i) => (
            <filter key={`glow-${i}`} id={`node-glow-${i}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur
                stdDeviation={nodeStates[i]?.active ? "6" : "3"}
                result="coloredBlur"
              />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
          
          {/* Central logo glow */}
          <filter id="center-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Line gradient */}
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.4)" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {lines.map((line, i) => (
          <line
            key={`line-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#line-gradient)"
            strokeWidth="1"
            className={`transition-opacity duration-1000 ${
              nodeStates[line.nodeIndex]?.active ? "opacity-80" : "opacity-30"
            }`}
          />
        ))}

        {/* Pentagon outline */}
        <polygon
          points={nodes.map((n) => `${n.x},${n.y}`).join(" ")}
          fill="none"
          stroke="rgba(6, 182, 212, 0.2)"
          strokeWidth="1"
        />

        {/* Nodes */}
        {nodes.map((node, i) => {
          const colors = [
            { main: "#06b6d4", glow: "rgba(6, 182, 212, 0.8)" },    // Cyan
            { main: "#8b5cf6", glow: "rgba(139, 92, 246, 0.8)" },   // Purple
            { main: "#3b82f6", glow: "rgba(59, 130, 246, 0.8)" },   // Blue
            { main: "#06b6d4", glow: "rgba(6, 182, 212, 0.8)" },    // Cyan
            { main: "#8b5cf6", glow: "rgba(139, 92, 246, 0.8)" },   // Purple
          ];

          return (
            <g key={`node-${i}`}>
              {/* Outer glow ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeStates[i]?.active ? 18 : 14}
                fill="transparent"
                stroke={colors[i].glow}
                strokeWidth="1"
                opacity={nodeStates[i]?.glowIntensity || 0.3}
                filter={`url(#node-glow-${i})`}
                className="transition-all duration-500"
              />
              {/* Inner circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r={8}
                fill={nodeStates[i]?.active ? colors[i].main : "rgba(255,255,255,0.1)"}
                stroke={colors[i].main}
                strokeWidth="2"
                className="transition-all duration-300"
              />
            </g>
          );
        })}

        {/* Central logo circle */}
        <g filter="url(#center-glow)">
          <circle
            cx={centerX}
            cy={centerY}
            r="45"
            fill="rgba(10, 10, 20, 0.9)"
            stroke="rgba(6, 182, 212, 0.5)"
            strokeWidth="2"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r="38"
            fill="none"
            stroke="rgba(139, 92, 246, 0.3)"
            strokeWidth="1"
          />
          {/* Logo "M" */}
          <text
            x={centerX}
            y={centerY + 12}
            textAnchor="middle"
            className="text-4xl font-bold"
            fill="url(#line-gradient)"
            style={{ fontFamily: "system-ui" }}
          >
            M
          </text>
        </g>
      </svg>
    </div>
  );
}
