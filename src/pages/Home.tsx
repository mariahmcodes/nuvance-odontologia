import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoSection from "@/components/sections/VideoSection";
import LocationSection from "@/components/sections/LocationSection";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import SocialProof from "@/components/sections/SocialProof";
import AboutSection from "@/components/sections/AboutSection";
import DoctorsSection from "@/components/sections/DoctorsSection";
import TreatmentsSection from "@/components/sections/TreatmentsSection";
import CasesSection from "@/components/sections/CasesSection";
import StructureSection from "@/components/sections/StructureSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection />
      <SocialProof />
      <AboutSection />
      <VideoSection />
      <DoctorsSection />
      <TreatmentsSection />
      <CasesSection />
      <StructureSection />
      <CTASection />
      <LocationSection />
      <Footer />
    </div>
  );
}