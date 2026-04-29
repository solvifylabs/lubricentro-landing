"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-[#0e0e10] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[300px] bg-[#E8A049]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            ¿Listo para tener el{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fafafa 0%, #E8A049 60%, #c4853a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              control total?
            </span>
          </h2>
          <p className="text-[#fafafa]/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Explorá el demo y entendé en 5 minutos cómo puede transformar la operación de tu local.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://dishflow-demo.solvifylabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#E8A049] text-[#0e0e10] font-bold px-8 py-4 rounded-lg text-[15px] transition-all duration-200 hover:bg-[#f0b060] hover:shadow-[0_8px_40px_rgba(232,160,73,0.4)] hover:-translate-y-0.5"
            >
              Ver demo completo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
