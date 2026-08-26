"use client";
import { ChevronDown } from "lucide-react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const questions = [
  { q: "Quando é o momento de procurar ajuda?", a: "Quando mudanças de humor, comportamento, sono, aprendizagem ou relações começam a causar sofrimento ou prejudicar a rotina. Não é necessário esperar que a situação se agrave para conversar com uma médica." },
  { q: "A família participa do acompanhamento?", a: "Sim. Na infância e na adolescência, compreender o contexto familiar e alinhar orientações com os responsáveis é parte importante do cuidado, sempre respeitando a privacidade adequada a cada idade." },
  { q: "A primeira consulta já define um diagnóstico?", a: "Nem sempre. Uma avaliação cuidadosa pode exigir mais de um encontro e, quando necessário, informações complementares. O objetivo é compreender a história por inteiro antes de propor qualquer caminho." },
  { q: "Como saber se este atendimento é o mais indicado?", a: "Você pode enviar uma mensagem antes de agendar. A conversa inicial pelo WhatsApp ajuda a esclarecer dúvidas práticas e entender se o perfil do atendimento corresponde ao que a família procura." },
];
export default function FAQ() {
  return <section id="duvidas" className="scroll-mt-24 bg-[#fcfaf7] py-24 lg:py-32"><div className="shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">Dúvidas frequentes</p><h2 className="section-title mt-4">Informação também é uma forma de acolher.</h2><p className="body-copy mt-6">Entender o processo ajuda a família a chegar mais segura ao primeiro encontro.</p><div className="mt-8"><WhatsAppButton secondary label="Falar antes de agendar" /></div></div><div className="divide-y divide-[#dfcdbb] border-y border-[#dfcdbb]">{questions.map((item, index) => <details key={item.q} className="group py-2" open={index === 0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-serif text-xl text-[#343649]"><span>{item.q}</span><ChevronDown className="shrink-0 text-[#9a6a42] transition group-open:rotate-180" /></summary><p className="max-w-2xl pb-6 pr-10 leading-7 text-[#62616a]">{item.a}</p></details>)}</div></div></section>;
}
