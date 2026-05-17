"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-pink-100 scroll-mt-15 md:scroll-mt-32">
      <div className="container-premium grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full h-[500px] md:h-[550px]">
            <Image
              src="/Foto-Sobre.jpg"
              alt="Médico"
              fill
              className="rounded-4xl shadow-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-blue-600 font-medium">
            Sobre o Especialista
          </span>

          <h2 className="text-5xl mt-4 leading-tight">
            Atendimento moderno, humano e focado no paciente.
          </h2>

          <p className="mt-8 text-slate-600 leading-8">
            O Dr. João Silva atua com excelência clínica,
            tecnologia moderna e uma abordagem humanizada,
            oferecendo segurança, conforto e confiança em
            cada atendimento.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="glass p-6 rounded-3xl border border-white/40">
              <h3 className="text-4xl font-bold">+12</h3>
              <p className="text-slate-600 mt-2">
                Anos de experiência
              </p>
            </div>

            <div className="glass p-6 rounded-3xl border border-white/40">
              <h3 className="text-4xl font-bold">+5 mil</h3>
              <p className="text-slate-600 mt-2">
                Pacientes atendidos
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}