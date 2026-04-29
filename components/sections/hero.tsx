"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useRef, useEffect } from "react";

const ROWS = [
  { icons: ["🍔", "🍟", "🍔", "🥤", "🍔", "🍅", "🍔", "🍟", "🍔", "🧀", "🍔", "🍟", "🍔", "🥤", "🍔", "🍅"], reverse: false, dur: 28 },
  { icons: ["🍔", "🧅", "🍔", "🍟", "🍔", "🥩", "🍔", "🍟", "🍔", "🧀", "🍔", "🧅", "🍔", "🍟", "🍔", "🥩"], reverse: true,  dur: 22 },
  { icons: ["🍔", "🍟", "🍔", "🥤", "🍔", "🍔", "🍟", "🍔", "🥤", "🍔", "🍟", "🍔", "🥤", "🍔", "🍔", "🍟"], reverse: false, dur: 35 },
  { icons: ["🍔", "🍅", "🍔", "🧀", "🍔", "🍟", "🍔", "🍅", "🍔", "🧀", "🍔", "🍟", "🍔", "🍅", "🍔", "🧀"], reverse: true,  dur: 20 },
  { icons: ["🍔", "🍟", "🍔", "🍔", "🥤", "🍔", "🍟", "🍔", "🧀", "🍔", "🍟", "🍔", "🍔", "🥤", "🍔", "🍟"], reverse: false, dur: 25 },
  { icons: ["🍔", "🧅", "🍔", "🍟", "🍔", "🍅", "🍔", "🥤", "🍔", "🧅", "🍔", "🍟", "🍔", "🍅", "🍔", "🥤"], reverse: true,  dur: 32 },
  { icons: ["🍔", "🍟", "🍔", "🍔", "🍅", "🍔", "🧀", "🍔", "🍟", "🍔", "🍔", "🍅", "🍔", "🧀", "🍔", "🍟"], reverse: false, dur: 18 },
  { icons: ["🍔", "🥤", "🍔", "🍟", "🍔", "🧅", "🍔", "🍅", "🍔", "🥤", "🍔", "🍟", "🍔", "🧅", "🍔", "🍅"], reverse: true,  dur: 27 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yFar     = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const opacityBg      = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  // Mouse parallax
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const cfg  = { damping: 35, stiffness: 120 };
  const mX   = useSpring(rawX, cfg);
  const mY   = useSpring(rawY, cfg);

  const orbX  = useTransform(mX, [-1, 1], ["-30px", "30px"]);
  const orbY  = useTransform(mY, [-1, 1], ["-30px", "30px"]);
  const foodX = useTransform(mX, [-1, 1], ["-14px", "14px"]);
  const foodY = useTransform(mY, [-1, 1], ["-14px", "14px"]);
  const cntX  = useTransform(mX, [-1, 1], ["-3px",  "3px"]);
  const cntY  = useTransform(mY, [-1, 1], ["-3px",  "3px"]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth  - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rawX, rawY]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* ── Glow orbs ── far depth with mouse ── */}
      <motion.div style={{ y: yFar, opacity: opacityBg }} className="absolute inset-0 pointer-events-none">
        <motion.div style={{ x: orbX, y: orbY }} className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#E8A049]/[0.07] blur-[160px]" />
          <div className="absolute -bottom-20 right-[20%] w-[400px] h-[400px] rounded-full bg-[#E8A049]/[0.04] blur-[120px]" />
        </motion.div>
      </motion.div>

      {/* ── Food icons ── diagonal infinite scroll with mouse parallax ── */}
      <motion.div style={{ opacity: opacityBg }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div style={{ x: foodX, y: foodY }} className="absolute inset-0">
          <div
            className="absolute inset-0 flex flex-col gap-12 justify-center"
            style={{ transform: "rotate(-14deg) scale(2)", transformOrigin: "center", opacity: 0.09 }}
          >
            {ROWS.map((row, i) => (
              <div key={i} className="overflow-hidden flex w-full">
                <motion.div
                  className="flex gap-8 shrink-0"
                  animate={{ x: row.reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
                  transition={{ duration: row.dur, repeat: Infinity, ease: "linear" }}
                >
                  {[...row.icons, ...row.icons].map((icon, j) => (
                    <span key={j} className="text-3xl select-none">{icon}</span>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div style={{ x: cntX, y: cntY }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#111113] border border-[#E8A049]/20 rounded-full px-4 py-1.5 text-xs font-medium text-[#E8A049] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A049] animate-pulse" />
            Sistema de gestión en tiempo real
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[2.15rem] sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-4 md:mb-6"
          >
            Dishflow,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fafafa 0%, #E8A049 60%, #c4853a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              El sistema que tu cocina necesitaba.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm md:text-xl text-[#fafafa]/50 max-w-2xl mx-auto leading-relaxed mb-6 md:mb-10"
          >
            Gestioná pedidos, armá combos, imprimí tickets y controlá delivery — todo desde un mismo dashboard, diseñado para el ritmo de la cocina.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://dishflow-demo.solvifylabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 w-full max-w-[280px] sm:w-auto bg-[#E8A049] text-[#0e0e10] font-bold px-7 py-3.5 rounded-lg text-[15px] transition-all duration-200 hover:bg-[#f0b060] hover:shadow-[0_8px_30px_rgba(232,160,73,0.35)] hover:-translate-y-0.5"
            >
              Ver demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 w-full max-w-[280px] sm:w-auto text-[15px] font-medium text-[#fafafa]/60 border border-white/10 px-7 py-3.5 rounded-lg transition-all duration-200 hover:border-[#E8A049]/30 hover:text-[#fafafa] hover:bg-[#E8A049]/5"
            >
              <Play className="w-3.5 h-3.5" />
              Ver características
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 md:mt-20 flex items-center justify-center gap-6 md:gap-12 text-center w-full"
          >
            {[
              { value: "100%", label: "En tiempo real" },
              { value: "+600", label: "Pedidos gestionados" },
              { value: "3 clicks", label: "Para tomar un pedido" },
            ].map((s) => (
              <div key={s.label} className="flex-1">
                <div className="text-xl md:text-2xl font-bold text-[#E8A049]">{s.value}</div>
                <div className="text-[10px] md:text-xs text-[#fafafa]/40 mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#E8A049]/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
