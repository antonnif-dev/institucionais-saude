"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const whatsappUrl = `https://wa.me/553131420880?text=${encodeURIComponent("Olá, gostaria de agendar uma sessão.")}`

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${scrolled
            ? "backdrop-blur-2xl bg-pink-150 border-b border-white/20 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
            : "bg-transparent"
          }
        `}
      >
        <div className="w-full px-4 md:px-6 lg:px-10">

          <div
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth",
            })}
            className="flex items-center justify-around p-3 md:p-5 md:gap-5">

            <div className='flex gap-2 md:gap-6 cursor-pointer'>
              <div className='flex gap-1 md:gap-3'>
                <Image
                  src="/Logo-Lais-Favicon.png"
                  alt="Logo Dra. Laís Namen"
                  width={120}
                  height={120}
                  className="
                    w-[75px]
                    sm:w-[70px]
                    md:w-[90px]
                    lg:w-[120px]
                    h-auto
                    object-contain
                  "
                  priority
                />
              </div>

              <div className='flex flex-col justify-center'>
                <h2 className='titulo-nome text-2xl lg:text-5xl'>
                  Dra. Laís Namen
                </h2>

                <h3 className='subtitulo-especialidade text-xs lg:text-2xl'>
                  Saúde Mental da Infância & Adolescência
                </h3>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-10">

              <a
                href="#sobre"
                className="text-[15px] text-slate-700 hover:text-blue-600 transition-all"
              >
                Sobre
              </a>

              <a
                href="#especialidades"
                className="text-[15px] text-slate-700 hover:text-blue-600 transition-all"
              >
                Especialidades
              </a>

              <a
                href="#beneficios"
                className="text-[15px] text-slate-700 hover:text-blue-600 transition-all"
              >
                Benefícios
              </a>

              <a
                href="#faq"
                className="text-[15px] text-slate-700 hover:text-blue-600 transition-all"
              >
                FAQ
              </a>

            </nav>

            <div className="flex items-center gap-4">
              <Button
                asChild
                className="
                  hidden lg:flex
                  rounded-full
                  h-12
                  px-7
                  text-sm
                  font-medium
                  bg-blue-600
                  hover:bg-blue-500
                  text-white
                  shadow-[0_10px_30px_rgba(37,99,235,0.35)]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_12px_40px_rgba(37,99,235,0.45)]
                "
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Consulta
                </a>
              </Button>

              <button
                onClick={() =>
                  setMobileOpen(!mobileOpen)
                }
                className="
                  lg:hidden

                  w-11
                  h-11

                  rounded-full

                  glass

                  flex
                  items-center
                  justify-center
                "
              >
                {mobileOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>

            </div>

          </div>

        </div>
      </header>

      <div
        className={`
          fixed top-0 left-0 w-full h-screen z-40

          transition-all duration-500

          ${mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl" />

        <div
          className="
            absolute top-24 left-6 right-6
            glass
            rounded-4xl
            p-8
            flex
            flex-col
            gap-6
            text-2xl
            font-bold
          "
        >

          <a
            href="#sobre"
            onClick={() => setMobileOpen(false)}
            className="text-lg"
          >
            Sobre
          </a>

          <a
            href="#especialidades"
            onClick={() => setMobileOpen(false)}
            className="text-lg"
          >
            Especialidades
          </a>

          <a
            href="#beneficios"
            onClick={() => setMobileOpen(false)}
            className="text-lg"
          >
            Benefícios
          </a>

          <a
            href="#faq"
            onClick={() => setMobileOpen(false)}
            className="text-lg"
          >
            FAQ
          </a>

          <Button
            className="
              rounded-full
              mt-4
              h-12
            "
          >
            Agendar Consulta
          </Button>

        </div>
      </div>
    </>
  );
}