"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-md bg-[#0e0e10]/80"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.webp" alt="Dishflow" width={50} height={50} />
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/solvifylabs/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fafafa]/50 hover:text-[#E8A049] transition-colors"
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://dishflow-demo.solvifylabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#fafafa]/70 hover:text-[#E8A049] transition-colors"
          >
            Ver demo
          </a>
        </div>
      </div>
    </motion.header>
  );
}
