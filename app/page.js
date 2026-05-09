import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CarouselSection from "@/components/CarouselSection";
import Bonuses from "@/components/Bonuses";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen font-sans">
      <Hero />
      <Features />
      <CarouselSection />
      <Bonuses />
      <Testimonials />
      <FinalCta />
      <Benefits />
      <FAQ />
      <Footer />
    </main>
  );
}
