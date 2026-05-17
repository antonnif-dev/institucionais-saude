"use client";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-28 bg-pink-300 text-white relative overflow-hidden">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="container-premium relative text-center">

        <h2 className="text-5xl leading-tight max-w-4xl mx-auto">
          Agende sua consulta e receba um atendimento premium.
        </h2>

        <p className="mt-8 text-black max-w-2xl mx-auto">
          Atendimento moderno, humanizado e focado em excelência clínica.
        </p>

        <Button className="mt-10 rounded-full px-10 py-7 text-lg">
          Agendar pelo WhatsApp
        </Button>

      </div>
    </section>
  );
}