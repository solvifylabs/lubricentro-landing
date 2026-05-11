"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Registrás el vehículo",
    description:
      "El cliente llega, buscás o creás su perfil. El historial de vehículos y servicios anteriores está a un click.",
  },
  {
    number: "02",
    title: "Creás la orden",
    description:
      "Agregás los servicios, los repuestos utilizados y el kilometraje. El sistema calcula el total automáticamente.",
  },
  {
    number: "03",
    title: "Cerrás la venta",
    description:
      "Con un click generás la venta, aplicás descuentos si hay, y el stock se descuenta solo.",
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
          <p className="text-xs font-semibold tracking-widest uppercase text-[#FFD700] mb-4">
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
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/20 to-transparent hidden md:block" />

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
                <div className="relative w-16 h-16 rounded-2xl bg-[#0e0e10] border border-[#FFD700]/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#FFD700]">{step.number}</span>
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
