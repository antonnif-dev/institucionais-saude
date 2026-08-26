import {
    GraduationCap,
    Hospital,
    Landmark,
    Ribbon,
    Stethoscope,
    Users,
} from "lucide-react";

import WhatsAppButton from "@/components/shared/WhatsAppButton";

const credentials = [
    {
        icon: GraduationCap,
        text: "Médica formada pela Faculdade de Medicina de Barbacena (2015)",
    },
    {
        icon: Stethoscope,
        text: "Residência em Pediatria pela Universidade Federal de Viçosa (2018)",
    },
    {
        icon: Landmark,
        text: "Pós-graduação em Psiquiatria da Infância e Adolescência — AFYA",
    },
    {
        icon: Ribbon,
        text: "Certificação em Transtorno do Espectro Autista pelo Dr. Thiago Castro",
    },
    {
        icon: Hospital,
        text: "Atuação na internação de psiquiatria do Hospital Infantil São Camilo, em Belo Horizonte",
    },
    {
        icon: Users,
        text: "Mais de 11 anos de atuação no SUS e experiência em saúde mental infantil na regional Leste de Belo Horizonte",
    },
];

export default function Credentials() {
    return (
        <section
            id="formacao"
            aria-labelledby="titulo-formacao"
            className="scroll-mt-12 bg-[#f3e8dc] section-spacing"
        >
            <div className="shell">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="eyebrow">
                        Trajetória profissional
                    </p>

                    <h2
                        id="titulo-formacao"
                        className="section-title mt-4 text-[#6d2634]"
                    >
                        Esse cuidado é sustentado por uma formação sólida.
                    </h2>

                    <p className="body-copy mt-6">
                        Uma trajetória construída entre formação acadêmica, prática
                        hospitalar e experiência no cuidado de crianças, adolescentes
                        e suas famílias.
                    </p>
                </div>

                <ul className="mt-14 grid gap-x-12 gap-y-5 md:grid-cols-2">
                    {credentials.map(({ icon: Icon, text }) => (
                        <li
                            key={text}
                            className="flex gap-4 border-b border-[#cdb79f] pb-5 text-[0.96rem] leading-6 text-[#4f505c]"
                        >
                            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-[#9a6a42] shadow-sm">
                                <Icon
                                    size={19}
                                    aria-hidden="true"
                                />
                            </span>

                            <span>
                                {text}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="mt-12 flex justify-center">
                    <WhatsAppButton />
                </div>
            </div>
        </section>
    );
}