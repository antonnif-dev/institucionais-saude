"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Stethoscope,
} from "lucide-react";

const specialties = [
  {
    icon: HeartPulse,
    title: "Cardiologia",
    description:
      "Diagnósticos precisos e acompanhamento especializado."
  },
  {
    icon: Brain,
    title: "Neurologia",
    description:
      "Tratamentos modernos focados em qualidade de vida."
  },
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description:
      "Atendimento humanizado e acompanhamento contínuo."
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="py-28 bg-pink-100 scroll-mt-6 md:scroll-mt-32">
      <div className="container-premium">

        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-medium">
            Especialidades
          </span>

          <h2 className="text-5xl mt-4">
            Atendimento especializado de alto padrão
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {specialties.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="glass p-10 rounded-4xl border border-white/40 shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-600" size={32} />
                </div>

                <h3 className="text-2xl mt-8">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-4 leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}