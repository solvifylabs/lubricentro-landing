"use client";

import { motion } from "framer-motion";
import {
  Users,
  Wrench,
  Droplets,
  Package,
  ShoppingCart,
  Truck,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Clientes y vehículos",
    description: "Perfil completo de cada cliente con todos sus vehículos, historial de servicios y próximos mantenimientos.",
  },
  {
    icon: Wrench,
    title: "Órdenes de servicio",
    description: "Creá órdenes de trabajo, registrá repuestos usados, kilometraje y programá el próximo service en segundos.",
  },
  {
    icon: Droplets,
    title: "Lava Auto integrado",
    description: "Turnos, sesiones y precios en 3 niveles (interior, exterior, completo). Todo dentro del mismo sistema.",
  },
  {
    icon: Package,
    title: "Stock e inventario",
    description: "Controlá repuestos, aceites y consumibles con alertas automáticas de bajo stock por producto.",
  },
  {
    icon: ShoppingCart,
    title: "Ventas y facturación",
    description: "Registrá ventas con descuentos por monto o porcentaje, múltiples métodos de pago y comprobantes al instante.",
  },
  {
    icon: Truck,
    title: "Proveedores y compras",
    description: "Gestioná tus proveedores, historial de compras y el catálogo de productos por proveedor.",
  },
  {
    icon: BarChart3,
    title: "Dashboard en tiempo real",
    description: "KPIs del día, servicios recientes, ventas del período y alertas de stock en un solo vistazo.",
  },
  {
    icon: ShieldCheck,
    title: "Sin dependencias externas",
    description: "Funciona en tu red local. No necesitás internet para operar ni para registrar servicios.",
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
          <p className="text-xs font-semibold tracking-widest uppercase text-[#FFD700] mb-4">
            Características
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Todo lo que tu taller<br className="hidden md:block" /> necesita
            </h2>
            <p className="text-[#fafafa]/45 text-base max-w-xs leading-relaxed md:text-right shrink-0">
              Desde el primer cliente<br className="hidden md:block" /> hasta el último repuesto.
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
              <span className="text-xs font-mono text-[#fafafa]/20 md:pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFD700]/15 transition-colors duration-200">
                  <f.icon className="w-4 h-4 text-[#FFD700]" />
                </div>
                <h3 className="font-semibold text-[14px] tracking-tight">{f.title}</h3>
              </div>

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
