"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitContact } from "@/app/actions";

const initialState = { status: "idle" as const, message: "" };

export function CTA() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <section className="py-32 bg-[#0e0e10] relative overflow-hidden">
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
            ¿Querés ver Dishflow{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fafafa 0%, #E8A049 60%, #c4853a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              en tu local?
            </span>
          </h2>
          <p className="text-[#fafafa]/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Dejanos tus datos y te contactamos para mostrarte cómo puede transformar la operación de tu local.
          </p>

          {state.status === "success" ? (
            <div className="bg-[#E8A049]/10 border border-[#E8A049]/30 rounded-xl px-8 py-10 max-w-md mx-auto">
              <p className="text-[#E8A049] font-semibold text-lg">{state.message}</p>
              <p className="text-[#fafafa]/40 text-sm mt-2">Revisá tu bandeja de entrada.</p>
            </div>
          ) : (
            <form action={formAction} className="flex flex-col gap-3 max-w-md mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                required
                disabled={pending}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#fafafa]/30 text-sm focus:outline-none focus:border-[#E8A049]/50 transition-colors disabled:opacity-50"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                disabled={pending}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#fafafa]/30 text-sm focus:outline-none focus:border-[#E8A049]/50 transition-colors disabled:opacity-50"
              />
              <input
                type="text"
                name="instagram"
                placeholder="Instagram (@tulocal)"
                disabled={pending}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#fafafa]/30 text-sm focus:outline-none focus:border-[#E8A049]/50 transition-colors disabled:opacity-50"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono / WhatsApp"
                disabled={pending}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#fafafa] placeholder-[#fafafa]/30 text-sm focus:outline-none focus:border-[#E8A049]/50 transition-colors disabled:opacity-50"
              />

              {state.status === "error" && (
                <p className="text-red-400 text-sm text-left">{state.message}</p>
              )}

              <button
                type="submit"
                disabled={pending}
                className="group inline-flex items-center justify-center gap-2 bg-[#E8A049] text-[#0e0e10] font-bold px-8 py-4 rounded-lg text-[15px] transition-all duration-200 hover:bg-[#f0b060] hover:shadow-[0_8px_40px_rgba(232,160,73,0.4)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {pending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Quiero que me contacten
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center gap-3 max-w-md mx-auto">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[#fafafa]/30 text-xs shrink-0">o explorá primero</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="mt-4 max-w-md mx-auto">
            <a
              href="https://dishflow-demo.solvifylabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full overflow-hidden inline-flex items-center justify-center gap-2 border border-white/15 text-[#fafafa]/70 font-semibold px-8 py-4 rounded-lg text-[15px] transition-colors duration-300 hover:border-[#E8A049] hover:text-[#0e0e10] hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-[#E8A049] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">Ver demo completo</span>
              <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
