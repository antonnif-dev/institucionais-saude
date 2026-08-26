import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Specialties from "@/components/sections/Specialties";
import Benefits from "@/components/sections/Benefits";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const jsonLd = { "@context": "https://schema.org", "@type": "Physician", name: "Dra. Laís Namen", description: "Atendimento médico humanizado em saúde mental da infância e adolescência.", image: "/Foto-Home.jpg", telephone: "+55 31 3142-0880", areaServed: { "@type": "City", name: "Belo Horizonte" } };

export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /><Navbar /><main><Hero /><About /><Specialties /><Benefits /><FAQ /><CTA /></main><Footer /></>;
}
