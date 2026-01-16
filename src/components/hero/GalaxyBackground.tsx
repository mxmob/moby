"use client";

import { useEffect, useRef, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface Nebula {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
}

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const nebulasRef = useRef<Nebula[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const reducedMotionRef = useRef(false);

  const initStars = useCallback((width: number, height: number) => {
    const starCount = Math.floor((width * height) / 8000);
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.3 + 0.1,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    starsRef.current = stars;
  }, []);

  const initNebulas = useCallback((width: number, height: number) => {
    const nebulas: Nebula[] = [
      {
        x: width * 0.2,
        y: height * 0.3,
        radius: Math.min(width, height) * 0.4,
        color: "rgba(88, 28, 135, 0.03)", // Purple
        opacity: 0.03,
      },
      {
        x: width * 0.7,
        y: height * 0.6,
        radius: Math.min(width, height) * 0.35,
        color: "rgba(6, 182, 212, 0.02)", // Cyan
        opacity: 0.02,
      },
      {
        x: width * 0.5,
        y: height * 0.5,
        radius: Math.min(width, height) * 0.5,
        color: "rgba(59, 130, 246, 0.02)", // Blue
        opacity: 0.02,
      },
    ];

    nebulasRef.current = nebulas;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Handle resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initStars(canvas.width, canvas.height);
        initNebulas(canvas.width, canvas.height);
      }, 100);
    };

    // Handle mouse move for parallax
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    // Initial setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars(canvas.width, canvas.height);
    initNebulas(canvas.width, canvas.height);

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let lastTime = 0;
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebulas
      nebulasRef.current.forEach((nebula) => {
        const gradient = ctx.createRadialGradient(
          nebula.x,
          nebula.y,
          0,
          nebula.x,
          nebula.y,
          nebula.radius
        );
        gradient.addColorStop(0, nebula.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw and animate stars
      starsRef.current.forEach((star) => {
        if (!reducedMotionRef.current) {
          // Twinkle effect
          star.twinklePhase += star.twinkleSpeed;
          const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;

          // Subtle parallax
          const parallaxX = mouseRef.current.x * star.speed * 10;
          const parallaxY = mouseRef.current.y * star.speed * 10;

          // Slow drift
          star.y += star.speed * 0.05;
          if (star.y > canvas.height + 10) {
            star.y = -10;
            star.x = Math.random() * canvas.width;
          }

          ctx.globalAlpha = star.opacity * twinkle;
          ctx.fillStyle = `hsl(${200 + Math.random() * 40}, 70%, 80%)`;
          ctx.beginPath();
          ctx.arc(
            star.x + parallaxX,
            star.y + parallaxY,
            star.size,
            0,
            Math.PI * 2
          );
          ctx.fill();
        } else {
          // Static stars for reduced motion
          ctx.globalAlpha = star.opacity;
          ctx.fillStyle = "hsl(210, 70%, 80%)";
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleMotionChange);
      clearTimeout(resizeTimeout);
    };
  }, [initStars, initNebulas]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
