import { BookOpenCheck, HeartHandshake, MessagesSquare, Puzzle } from "lucide-react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const steps = [
  { icon: MessagesSquare, n: "01", title: "Escuta que acolhe", text: "A consulta considera a criança ou o adolescente, a família e o contexto em que cada dificuldade aparece." },
  { icon: Puzzle, n: "02", title: "Olhar integral", text: "Sintomas não são vistos isoladamente: desenvolvimento, rotina, escola, relações e saúde física fazem parte da avaliação." },
  { icon: BookOpenCheck, n: "03", title: "Plano com clareza", text: "As possibilidades de cuidado são explicadas com linguagem acessível e decisões compartilhadas com a família." },
  { icon: HeartHandshake, n: "04", title: "Vínculo e continuidade", text: "O acompanhamento respeita o tempo de cada história e evolui conforme as necessidades de quem está sendo cuidado." },
];
export default function Benefits() {
  return <section id="abordagem" className="scroll-mt-24 bg-[#272b42] py-24 text-white lg:py-32"><div className="shell"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">Como acontece o cuidado</p><h2 className="section-title mt-4">Ciência e afeto não precisam andar separados.</h2><p className="mt-7 max-w-md text-lg leading-8 text-white/65">Um atendimento responsável também pode ser próximo, compreensível e gentil com quem chega preocupado.</p><div className="mt-8"><WhatsAppButton /></div></div><div className="grid gap-px overflow-hidden rounded-[2rem] bg-white/15 sm:grid-cols-2">{steps.map(({ icon: Icon, n, title, text }) => <article key={n} className="bg-[#30344d] p-7 lg:p-9"><div className="flex items-center justify-between"><Icon className="text-[#e2b77f]" /><span className="font-serif text-2xl text-white/25">{n}</span></div><h3 className="mt-10 text-2xl text-[#f0d3ae]">{title}</h3><p className="mt-3 text-sm leading-7 text-white/65">{text}</p></article>)}</div></div></div></section>;
}
