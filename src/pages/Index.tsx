import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import RealityShiftSection from "@/components/sections/RealityShiftSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import PricingSection from "@/components/sections/PricingSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FormSection from "@/components/sections/FormSection";
import ClosingSection from "@/components/sections/ClosingSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <div className="relative z-10">
        <HeroSection />
        <RealityShiftSection />
        <SolutionsSection />
        <TimelineSection />
        <PortfolioSection />
        <PricingSection />
        <SocialProofSection />
        <FormSection />
        <ClosingSection />
      </div>
    </div>
  );
};

export default Index;
