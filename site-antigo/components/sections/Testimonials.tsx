"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Oliveira",
    text: "Excelente atendimento e estrutura impecável."
  },
  {
    name: "Carlos Mendes",
    text: "Profissional extremamente atencioso e competente."
  },
  {
    name: "Fernanda Lima",
    text: "A experiência foi incrível do início ao fim."
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-pink-100">
      <div className="container-premium">

        <div className="text-center">
          <span className="text-blue-600 font-medium">
            Depoimentos
          </span>

          <h2 className="text-5xl mt-4">
            O que os pacientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="glass p-10 rounded-4xl shadow-xl"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />
                ))}
              </div>

              <p className="mt-6 text-slate-600 leading-8">
                `{item.text}`
              </p>

              <h3 className="mt-8 text-xl">
                {item.name}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}