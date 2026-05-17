import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ForEveryoneSection } from "@/components/ForEveryoneSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AppShowcaseSection } from "@/components/AppShowcaseSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorks />
      <ForEveryoneSection />
      <TestimonialsSection />
      <AppShowcaseSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
