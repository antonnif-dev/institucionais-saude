import Image from "next/image";
import { GraduationCap, Hospital, Landmark, Ribbon, Stethoscope, Users } from "lucide-react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const credentials = [
  { icon: GraduationCap, text: "Médica formada pela Faculdade de Medicina de Barbacena (2015)" },
  { icon: Stethoscope, text: "Residência em Pediatria pela Universidade Federal de Viçosa (2018)" },
  { icon: Landmark, text: "Pós-graduação em Psiquiatria da Infância e Adolescência — AFYA" },
  { icon: Ribbon, text: "Certificação em Transtorno do Espectro Autista pelo Dr. Thiago Castro" },
  { icon: Hospital, text: "Atuação na internação de psiquiatria do Hospital Infantil São Camilo, em Belo Horizonte" },
  { icon: Users, text: "Mais de 11 anos de atuação no SUS e experiência em saúde mental infantil na regional Leste de BH" },
];
export default function About() {
  return <section id="sobre" className="scroll-mt-24 bg-[#fcfaf7] py-24 lg:py-32"><div className="shell grid items-center gap-14 lg:grid-cols-[.83fr_1.17fr] lg:gap-24"><div className="relative"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#eef0f5]"><Image src="/Foto-Sobre.jpg" alt="Dra. Laís Namen em seu retrato profissional" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" /></div><div className="absolute -bottom-6 -right-3 rounded-2xl bg-[#272b42] px-6 py-5 text-white shadow-xl sm:right-[-2rem]"><strong className="block font-serif text-3xl text-[#edcfaa]">11+ anos</strong><span className="text-sm text-white/75">de atuação médica no SUS</span></div></div><div><p className="eyebrow">Sobre a Dra. Laís</p><h2 className="section-title mt-4">Formação sólida, no lugar certo, para cuidar de quem você mais ama.</h2><p className="body-copy mt-7">Crianças e adolescentes nem sempre conseguem explicar o que sentem. Por isso, o cuidado começa com presença: ouvir além das palavras, compreender o contexto e construir caminhos possíveis junto à família.</p><p className="mt-7 font-serif text-2xl italic leading-relaxed text-[#6d2634]">Esse cuidado é sustentado por uma formação sólida:</p><ul className="mt-7 grid gap-4">{credentials.map(({ icon: Icon, text }) => <li key={text} className="flex gap-4 border-b border-[#dfcdbb]/70 pb-4 text-[.96rem] leading-6 text-[#4f505c]"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f3e8dc] text-[#9a6a42]"><Icon size={17} /></span><span>{text}</span></li>)}</ul><div className="mt-8"><WhatsAppButton /></div></div></div></section>;
}
