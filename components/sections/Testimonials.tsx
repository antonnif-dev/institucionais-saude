"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const doctoraliaUrl =
  "https://www.doctoralia.com.br/lais-namen/pediatra/belo-horizonte";

const testimonials = [
  {
    name: "Aniela",
    date: "23 de junho de 2026",
    verified: "Opinião Verificada",
    text: "Dra Lais além da competência profissional, é uma médica atualizada, responsável e dedicada, que realmente se preocupa com o bem-estar e o desenvolvimento dos pacientes. É o tipo de profissional que faz toda a diferença em momentos importantes e que gera confiança desde o primeiro contato. Recomendo de olhos fechados para qualquer família que esteja buscando uma especialista séria, acolhedora e altamente qualificada.",
  },
  {
    name: "Fabiana Oliveira",
    date: "3 de junho de 2026",
    verified: "Consulta verificada",
    text: "Amei o atendimento! A Doutora Laís e muito amtesiosa !",
  },
  {
    name: "E.M.E",
    date: "13 de maio de 2026",
    verified: "Opinião Verificada",
    text: "Profissional excelente, escuta atenta a cada detalhe e humana. Mostrou preocupação durante o atendimento e explicou mais de uma vez aos questionamentos. Muito atenciosa as demandas sem se preocupar com o tempo da consulta.",
  },
  {
    name: "Ramon Mendes",
    date: "12 de maio de 2026",
    verified: "Consulta verificada",
    text: "A Dra. Laís é uma médica extremamente atenciosa, ética e acolhedora. Seu atendimento em psiquiatria é diferenciado, com uma escuta cuidadosa, olhar humano e muita segurança técnica. Demonstra grande experiência e transmite confiança, empatia e profissionalismo. É uma profissional que realmente faz a diferença na vida de seus pacientes.",
  },
  {
    name: "Marcela",
    date: "11 de maio de 2026",
    verified: "Opinião Verificada",
    text: "Dra., gostaria de agradecer pelo atendimento tão cuidadoso com minha filha. Sua atenção, paciência e profissionalismo fizeram toda diferença para nós. É muito reconfortante encontrar uma médica tão humana, acolhedora e dedicada ao bem-estar das crianças e da família. Obrigada pelo carinho e pela forma respeitosa e atenciosa.",
  },
  {
    name: "Ana Luíza Gomes",
    date: "10 de maio de 2026",
    verified: "Opinião Verificada",
    text: "Fui atendida pela Dra. Laís e me senti muito confortável durante a consulta. Ela ouviu tudo com atenção, me deixou tranquila pra falar e foi muito acolhedora. Gostei bastante do atendimento e recomendo muito!!",
  },
  {
    name: "Andre Feres",
    date: "10 de maio de 2026",
    verified: "Opinião Verificada",
    text: "Foi um momento importante para nossa família. Meu filho se sentiu ouvido e nós, acolhidos.",
  },
  {
    name: "Ana",
    date: "10 de maio de 2026",
    verified: "Opinião Verificada",
    text: "Levei meu filho à consulta e ficamos muito confortáveis durante todo o atendimento. A conversa foi leve e respeitosa. Recomendo a dra. Laís é ótima!",
  },
  {
    name: "Letícia",
    date: "10 de maio de 2026",
    verified: "Opinião Verificada",
    text: "Profissional extremamente competente, acolhedora e atenciosa. Conduz os atendimentos com muita empatia, responsabilidade e cuidado. Excelente experiência.",
  },
  {
    name: "Sávio",
    date: "10 de maio de 2026",
    verified: "Opinião Verificada",
    text: "Desde o nascimento do meu filho sempre acompanhou de perto , super indico",
  },
  {
    name: "Geise",
    date: "10 de maio de 2026",
    verified: "Opinião Verificada",
    text: "O atendimento é incrível, a Laís é super prestativa e educada. Por mais profissionais assim no mundo",
  },
  {
    name: "Mariana",
    date: "11 de abril de 2026",
    verified: "Consulta verificada",
    text: "Médica incrível e profissional maravilhosa! Além de extremamente competente, é muito empática, acolhedora e humana. Me senti acolhida desde o primeiro atendimento. Ela tem muita paciência, explica tudo com calma, de forma clara e acessível, tira todas as dúvidas e realmente escuta o paciente. Dá pra perceber que ama o que faz e passa muita segurança. Faz toda a diferença ser atendida por alguém assim, ainda mais na área da psiquiatria. Sou muito grata e recomendo de olhos fechados!",
  },
  {
    name: "Alcilene",
    date: "28 de janeiro de 2026",
    verified: "Consulta verificada",
    text: "Responsável e comprometida. Atenciosa, detalhista.",
  },
  {
    name: "Tatiane Freitas Borges",
    date: "13 de novembro de 2025",
    verified: "Consulta verificada",
    text: "Se Laís um amor de pessoa é muito dedicada aos pacientes",
  },
  {
    name: "Julia",
    date: "22 de agosto de 2025",
    verified: "Consulta verificada",
    text: "Consulta excelente,dra.lais me ouviu e me ajudou bastante e tirou minhas dúvidas",
  },
  {
    name: "Carla",
    date: "15 de agosto de 2025",
    verified: "Consulta verificada",
    text: "Marquei a consulta pelo app confirmaram sai para a consulta a mais de 1h da minha casa pq estava com uma urgência e chegando no endereço que fica no app me avisaram q ela muito pouco atende lá e q nao sabia da consulta. Simplesmente nenhuma satisfação. Tive q voltar pra minha casa sem o atendimento e fizeram maior pouco caso.",
  },
  {
    name: "V.B",
    date: "29 de abril de 2025",
    verified: "Consulta verificada",
    text: "excelente o atendimento! atenciosa demais, gosto muito!",
  },
  {
    name: "Daniela A",
    date: "16 de abril de 2025",
    verified: "Consulta verificada",
    text: "Para mim foi um diferencial a escuta e a sensibilidade. Tinha muito receio pois muitos psiquiatras já vão aos medicamentos pesados sem conversar com calma. A Dra. Lais conversa profundamente entendendo o paciente e seu contexto, o que fez com que o tratamento fosse muito efetivo pois não trata só o sintoma, mas também a causa. Recomendo",
  },
  {
    name: "M.C.A.A.",
    date: "16 de abril de 2025",
    verified: "Consulta verificada",
    text: "Excelente profissional, séria, atenciosa, interessada, muito competente.",
  },
  {
    name: "Geise",
    date: "24 de março de 2025",
    verified: "Consulta verificada",
    text: "Uma profissional muito boa e atenciosa ! Super recomendo! Me explicou tudo com muita calma e paciência , além de ser muito gentil e educada . Lais realmente se importa com o paciente . Nota 1000",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonial = testimonials[current];

  const previous = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <section
      id="depoimentos"
      aria-labelledby="titulo-depoimentos"
      className="scroll-mt-12 bg-white section-spacing"
    >
      <div className="shell">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">
            O que dizem as famílias
          </p>

          <h2
            id="titulo-depoimentos"
            className="section-title mt-4 text-[#6d2634]"
          >
            Um cuidado que começa pela escuta.
          </h2>

          <p className="body-copy mt-6">
            Cada família chega com uma história diferente. Estas são
            algumas das experiências compartilhadas por pacientes e
            familiares após os atendimentos.
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative mx-auto mt-14 max-w-5xl">

          <div className="overflow-hidden rounded-[2rem] border border-[#dfcdbb] bg-[#fcfaf7] shadow-[0_18px_60px_rgba(39,43,66,.06)]">

            <div className="grid lg:grid-cols-[.36fr_1fr]">

              {/* Left column */}
              <div className="flex flex-col justify-between bg-[#6d2634] p-8 text-white lg:p-10">

                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2d7b5]/10">
                    <Quote
                      size={23}
                      className="text-[#e9c394]"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="mt-8 text-sm font-bold uppercase tracking-[.15em] text-[#e9c394]">
                    Experiências reais
                  </p>

                  <p className="mt-3 font-serif text-3xl leading-tight">
                    20 opiniões
                    <br />
                    de pacientes
                    <br />
                    e famílias.
                  </p>
                </div>

                <div className="mt-10 hidden lg:block">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className="fill-[#e9c394] text-[#e9c394]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Avaliações publicadas na
                    <br />
                    Doctoralia.
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="relative p-7 sm:p-9 lg:p-12">

                {/* Navigation */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-[#9a6a42]">
                    <CheckCircle2 size={16} />
                    <span>{testimonial.verified}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-serif text-sm text-[#77717a]">
                      {String(current + 1).padStart(2, "0")}
                      <span className="mx-1 text-[#cdb79f]">
                        /
                      </span>
                      {String(testimonials.length).padStart(2, "0")}
                    </span>

                    <button
                      type="button"
                      onClick={previous}
                      aria-label="Depoimento anterior"
                      className="grid h-10 w-10 place-items-center rounded-full border border-[#dfcdbb] bg-white text-[#6d2634] transition hover:border-[#9a6a42] hover:bg-[#f3e8dc] focus:outline-none focus:ring-2 focus:ring-[#9a6a42]/30"
                    >
                      <ChevronLeft
                        size={18}
                        aria-hidden="true"
                      />
                    </button>

                    <button
                      type="button"
                      onClick={next}
                      aria-label="Próximo depoimento"
                      className="grid h-10 w-10 place-items-center rounded-full border border-[#dfcdbb] bg-white text-[#6d2634] transition hover:border-[#9a6a42] hover:bg-[#f3e8dc] focus:outline-none focus:ring-2 focus:ring-[#9a6a42]/30"
                    >
                      <ChevronRight
                        size={18}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={17}
                      className="fill-[#9a6a42] text-[#9a6a42]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote
                  key={current}
                  className="mt-7 animate-[fadeIn_.35s_ease-out]"
                >
                  <p className="font-serif text-2xl leading-[1.55] text-[#3d3e4d] sm:text-3xl">
                    “{testimonial.text}”
                  </p>
                </blockquote>

                {/* Author */}
                <div className="mt-9 flex items-end justify-between gap-6 border-t border-[#dfcdbb] pt-6">
                  <div>
                    <p className="font-semibold text-[#272b42]">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-[#77717a]">
                      {testimonial.date}
                    </p>
                  </div>

                  <span className="hidden text-right text-xs leading-5 text-[#77717a] sm:block">
                    Avaliação publicada
                    <br />
                    na Doctoralia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Ver depoimento ${index + 1}`}
                aria-current={index === current}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === current
                    ? "w-8 bg-[#6d2634]"
                    : "w-1.5 bg-[#d9c7b5] hover:bg-[#9a6a42]"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-[2rem] border border-[#dfcdbb] bg-[#f3e8dc] p-6 sm:flex-row sm:px-8">

          <div>
            <p className="font-serif text-xl text-[#563640]">
              Quer conhecer todas as avaliações?
            </p>

            <p className="mt-1 text-sm text-[#6b6870]">
              Veja as opiniões completas diretamente na Doctoralia.
            </p>
          </div>

          <a
            href={doctoraliaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-[#6d2634] px-5 text-sm font-bold text-white transition hover:bg-[#563640] focus:outline-none focus:ring-2 focus:ring-[#6d2634]/30"
          >
            Ver avaliações
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>

      </div>
    </section>
  );
}