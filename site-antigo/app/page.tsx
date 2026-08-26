import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Specialties from "@/components/sections/Specialties";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import MouseGlow from "@/components/effects/MouseGlow";

export default function Home() {
  return (
    <main>
      <MouseGlow />

      <Navbar />

      <Hero />

      <About />

      <Specialties />

      <Benefits />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />

    </main>
  );
}