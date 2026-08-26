"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MeshGradient from "@/components/effects/MeshGradient";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import FloatingCard from "@/components/effects/FloatingCard";
import FadeUp from "@/components/effects/FadeUp";
import Image from "next/image";

export default function Hero() {
  const whatsappUrl = `https://wa.me/553131420880?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta.")}`
  return (
    <section className="bg-pink-100 relative overflow-hidden pt-5 md:pt-30 md:pb-32">

      <MeshGradient />

      <NoiseOverlay />

      <div className="container-premium flex flex-col-reverse lg:grid lg:grid-cols-2 pt-30 gap-10 items-center">

        <FadeUp>
          <div>
            <h1 className="hidden lg:block text-center text-5xl lg:text-7xl leading-tight font-bold">
              Tratamento médico com cuidado humanizado.
            </h1>

            <p className="mt-8 text-center text-lg text-slate-600 max-w-xl">
              Cuidado médico humanizado em saúde mental da infância e adolescência para fortalecer vínculos, acolher emoções e transformar relações familiares.
            </p>

            <div className="flex justify-center flex-wrap gap-4 mt-5">

              <a href={whatsappUrl}
                target="_blank"
                className="border border-black rounded-full px-8 py-4 text-base"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            className="relative"
          >

            <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full" />

            <FloatingCard />
            <h1 className="block lg:hidden text-center text-5xl lg:text-7xl leading-tight font-bold pb-4">
              Tratamento médico com cuidado humanizado.
            </h1>
            <div className="relative w-full h-[500px] md:h-[550px]">
              <Image
                src="/Foto-Home.jpg"
                alt="Médico"
                fill
                priority
                className="rounded-4xl object-cover"
              />
            </div>
          </motion.div>
        </FadeUp>
      </div>


    </section >
  );
}