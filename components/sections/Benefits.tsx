"use client";

import { Check } from "lucide-react";

const benefits = [
  "Atendimento humanizado",
  "Equipamentos modernos",
  "Diagnóstico preciso",
  "Ambiente confortável",
  "Agendamento facilitado",
  "Equipe especializada",
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-28 bg-pink-100 md:scroll-mt-32">
      <div className="container-premium grid lg:grid-cols-2 gap-20 items-center">

        <div>
          <span className="text-blue-600 font-medium">
            Benefícios
          </span>

          <h2 className="text-5xl mt-4 leading-tight">
            Estrutura moderna para proporcionar segurança e conforto.
          </h2>

          <p className="mt-8 text-slate-600 leading-8">
            Nossa clínica foi planejada para entregar uma experiência premium,
            confortável e eficiente em cada detalhe.
          </p>
        </div>

        <div className="grid gap-6">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 glass p-6 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Check className="text-blue-600" />
              </div>

              <span className="text-lg">
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}