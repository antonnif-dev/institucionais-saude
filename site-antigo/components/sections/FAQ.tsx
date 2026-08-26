"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-28 bg-pink-100 scroll-mt-32">
      <div className="container-premium max-w-4xl">

        <div className="text-center">
          <span className="text-blue-600 font-medium">
            FAQ
          </span>

          <h2 className="text-5xl mt-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="mt-16">

          <Accordion>

            <AccordionItem value="1">
              <AccordionTrigger>
                Como funciona o agendamento?
              </AccordionTrigger>

              <AccordionContent>
                O agendamento pode ser realizado via WhatsApp
                ou telefone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="2">
              <AccordionTrigger>
                A clínica aceita convênios?
              </AccordionTrigger>

              <AccordionContent>
                Sim, trabalhamos com diversos convênios.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="3">
              <AccordionTrigger>
                Onde a clínica está localizada?
              </AccordionTrigger>

              <AccordionContent>
                Em uma localização premium e de fácil acesso.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </div>
      </div>
    </section>
  );
}