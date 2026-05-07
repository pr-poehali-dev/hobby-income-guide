import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import StoriesSection from "@/components/StoriesSection";
import ContactSection from "@/components/ContactSection";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";

export default function Index() {
  return (
    <AccessibilityProvider>
      <div className="min-h-screen bg-[#FFFBF5] font-montserrat overflow-x-hidden">
        <HeroSection />
        <CatalogSection />
        <StoriesSection />
        <ContactSection />
      </div>
    </AccessibilityProvider>
  );
}