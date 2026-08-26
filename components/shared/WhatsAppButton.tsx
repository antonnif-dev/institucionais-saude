import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppButton({ secondary = false, label = "Agendar via WhatsApp" }: { secondary?: boolean; label?: string }) {
  return <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`${label} (abre em nova aba)`} className={secondary ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#6d2634]/25 bg-white/55 px-6 py-3 text-sm font-bold text-[#6d2634] transition hover:border-[#6d2634] hover:bg-white" : "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#6d2634] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(109,38,52,.2)] transition hover:-translate-y-0.5 hover:bg-[#57202b]"}><MessageCircle size={18} aria-hidden="true" />{label}{secondary && <ArrowUpRight size={16} aria-hidden="true" />}</a>;
}
