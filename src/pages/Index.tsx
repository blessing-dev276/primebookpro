import ParticleBackground from "@/components/ParticleBackground";
import ThemeToggle from "@/components/ThemeToggle";
import HeroSection from "@/components/sections/HeroSection";
import RealityShiftSection from "@/components/sections/RealityShiftSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import PricingSection from "@/components/sections/PricingSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FormSection from "@/components/sections/FormSection";
import ClosingSection from "@/components/sections/ClosingSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <ThemeToggle />
      <div className="relative z-10">
        <HeroSection />
        <RealityShiftSection />
        <SolutionsSection />
        <TimelineSection />
        <PricingSection />
        <SocialProofSection />
        <FormSection />
        <ClosingSection />
      </div>
    </div>
  );
};

export default Index;
