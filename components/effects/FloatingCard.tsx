"use client";

import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";

export default function FloatingCard() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="
        absolute
        z-20

        bottom-6
        left-1/2
        -translate-x-1/2

        md:left-8
        md:bottom-8
        md:translate-x-0

        glass
        rounded-[28px]
        px-5
        py-4

        md:px-6
        md:py-5

        shadow-[0_10px_40px_rgba(15,23,42,0.12)]

        border
        border-white/30

        w-[240px]
      "
    >
      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
          <HeartPulse className="text-blue-600" size={22} />
        </div>

        <div>
          <p className="text-xs text-slate-500 uppercase tracking-wide">
            Atendimento
          </p>

          <h3 className="text-lg font-semibold mt-1">
            +5 mil pacientes
          </h3>
        </div>

      </div>
    </motion.div>
  );
}