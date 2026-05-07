"use client";

import Image from "next/image";
export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0e0e10] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.webp" alt="Solvify Burger" width={50} height={50} />
        </div>
        <p className="text-xs text-[#fafafa]/30">
          www.solvifylabs.com · {new Date().getFullYear()}
        </p>
        <a
          href="https://www.instagram.com/solvifylabs/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#fafafa]/30 hover:text-[#E8A049] transition-colors"
          aria-label="Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
