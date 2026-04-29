"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Recibís el pedido",
    description:
      "El cliente pide en mostrador o por delivery. Abrís un nuevo pedido en el dashboard y cargás los datos en segundos.",
  },
  {
    number: "02",
    title: "Armás el pedido",
    description:
      "Usás el wizard para agregar burgers, combos y extras. El precio se calcula solo, sin errores manuales.",
  },
  {
    number: "03",
    title: "Confirmás e imprimís",
    description:
      "Con un click el pedido queda registrado y el ticket sale directo a la impresora de cocina. Sin pasos extra.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 bg-[#111113]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8A049] mb-4">
            Cómo funciona
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Tres pasos, cero fricción
          </h2>
          <p className="text-[#fafafa]/50 text-lg max-w-xl mx-auto">
            El flujo está pensado para que el equipo lo aprenda en minutos y lo use sin pensar.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8A049]/20 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col gap-5"
              >
                <div className="relative w-16 h-16 rounded-2xl bg-[#0e0e10] border border-[#E8A049]/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#E8A049]">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-[#fafafa]/50 leading-relaxed text-[15px]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
