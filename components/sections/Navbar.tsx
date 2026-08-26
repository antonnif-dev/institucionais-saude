"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const links = [{ href: "#sobre", label: "Sobre" }, { href: "#cuidados", label: "Como posso ajudar" }, { href: "#abordagem", label: "Abordagem" }, { href: "#duvidas", label: "Dúvidas" }];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[#6d2634]/8 bg-[#fcfaf7]/90 backdrop-blur-xl"><div className="shell flex h-20 items-center justify-between gap-5"><a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label="Dra. Laís Namen — início"><Image src="/Logo-Lais-Favicon.png" alt="" width={48} height={48} className="h-11 w-11 object-contain" priority /><span className="min-w-0"><strong className="block truncate font-serif text-lg font-semibold text-[#272b42]">Dra. Laís Namen</strong><small className="block truncate text-[10px] font-bold uppercase tracking-[.1em] text-[#9a6a42]">Infância & adolescência</small></span></a><nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">{links.map(link => <a key={link.href} href={link.href} className="text-sm font-semibold text-[#474857] transition hover:text-[#6d2634]">{link.label}</a>)}</nav><div className="hidden lg:block"><WhatsAppButton /></div><button type="button" onClick={() => setOpen(v => !v)} className="grid h-11 w-11 place-items-center rounded-full border border-[#6d2634]/15 lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>{open ? <X /> : <Menu />}</button></div>{open && <nav id="mobile-menu" className="border-t border-[#6d2634]/8 bg-[#fcfaf7] px-4 pb-6 lg:hidden" aria-label="Navegação móvel"><div className="shell flex flex-col gap-1 pt-4">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold hover:bg-[#f3e8dc]">{link.label}</a>)}<div className="mt-3"><WhatsAppButton /></div></div></nav>}</header>;
}
