"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Layers,
  Printer,
  Truck,
  CreditCard,
  BarChart3,
  Zap,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Wizard de pedidos",
    description: "Tomá pedidos con un flujo guiado: burgers, combos, sides y extras. Sin errores, sin confusiones.",
  },
  {
    icon: Layers,
    title: "Combos personalizables",
    description: "Armá combos con múltiples burgers, papas, bebidas y extras. Precio calculado en tiempo real.",
  },
  {
    icon: Printer,
    title: "Impresión térmica",
    description: "Ticket impreso automáticamente en la cocina al confirmar el pedido. Formato claro.",
  },
  {
    icon: Truck,
    title: "Delivery & Retiro",
    description: "Gestioná pedidos para envío y retiro. Dirección, hora estimada y observaciones incluidas.",
  },
  {
    icon: CreditCard,
    title: "Métodos de pago",
    description: "Registrá efectivo, transferencia o tarjeta en cada pedido. Sin fricciones en el cierre.",
  },
  {
    icon: BarChart3,
    title: "Dashboard en vivo",
    description: "Vista general de todos los pedidos activos con estados, montos y filtros.",
  },
  {
    icon: Zap,
    title: "Descuentos y promos",
    description: "Aplicá descuentos por porcentaje o monto fijo. Se refleja en el ticket y en el total.",
  },
  {
    icon: ShieldCheck,
    title: "Sin dependencias",
    description: "Funciona en tu red local. No necesitás internet para imprimir ni para tomar pedidos.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-[#111113]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8A049] mb-4">
            Características
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Todo lo que tu local<br className="hidden md:block" /> necesita
            </h2>
            <p className="text-[#fafafa]/45 text-base max-w-xs leading-relaxed md:text-right shrink-0">
              Desde el primer click<br className="hidden md:block" /> hasta el ticket impreso.
            </p>
          </div>
        </motion.div>

        {/* Feature rows */}
        <div className="divide-y divide-white/[0.05]">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group grid grid-cols-1 md:grid-cols-[40px_220px_1fr] gap-3 md:gap-8 py-6 -mx-4 px-4 rounded-xl hover:bg-white/[0.02] transition-colors duration-200 cursor-default"
            >
              {/* Number */}
              <span className="text-xs font-mono text-[#fafafa]/20 md:pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon + Title */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8A049]/10 flex items-center justify-center shrink-0 group-hover:bg-[#E8A049]/15 transition-colors duration-200">
                  <f.icon className="w-4 h-4 text-[#E8A049]" />
                </div>
                <h3 className="font-semibold text-[14px] tracking-tight">{f.title}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-[#fafafa]/40 leading-relaxed md:pt-0.5">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
