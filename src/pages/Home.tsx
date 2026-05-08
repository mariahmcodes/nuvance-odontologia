import { lazy, Suspense, useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SocialProof from "@/components/sections/SocialProof";

// Lazy sections
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const VideoSection = lazy(() => import("@/components/sections/VideoSection"));
const DoctorsSection = lazy(() => import("@/components/sections/DoctorsSection"));
const TreatmentsSection = lazy(() => import("@/components/sections/TreatmentsSection"));
const CasesSection = lazy(() => import("@/components/sections/CasesSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialSection"));
const StructureSection = lazy(() => import("@/components/sections/StructureSection"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const LocationSection = lazy(() => import("@/components/sections/LocationSection"));

function SectionSkeleton({ className = "h-[400px]" }: { className?: string }) {
  return (
    <div className={`w-full py-24 animate-pulse ${className}`}>
      <div className="nuvance-container">
        <div className="mb-6 h-5 w-40 rounded-full bg-petrol-soft/10" />
        <div className="mb-3 h-4 w-full rounded-full bg-petrol-soft/10" />
        <div className="h-4 w-2/3 rounded-full bg-petrol-soft/10" />
      </div>
    </div>
  );
}

export default function Home() {
  const [showBelowFold, setShowBelowFold] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const id = (window as any).requestIdleCallback?.(() => {
      setShowBelowFold(true);
    }) || setTimeout(() => setShowBelowFold(true), 800);

    return () => {
      (window as any).cancelIdleCallback?.(id);
      clearTimeout(id);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <SocialProof />

        {showBelowFold && (
          <>
            <Suspense fallback={<SectionSkeleton className="h-[500px]" />}>
              <AboutSection />
            </Suspense>

            <Suspense fallback={<SectionSkeleton className="h-[600px]" />}>
              <VideoSection />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <DoctorsSection />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <TreatmentsSection />
            </Suspense>

            <Suspense fallback={<SectionSkeleton className="h-[700px]" />}>
              <CasesSection />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <TestimonialsSection />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <StructureSection />
            </Suspense>

            <Suspense fallback={<SectionSkeleton className="h-[300px]" />}>
              <CTASection />
            </Suspense>

            <Suspense fallback={<SectionSkeleton className="h-[300px]" />}>
              <LocationSection />
            </Suspense>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}