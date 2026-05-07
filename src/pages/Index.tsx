import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import StoriesSection from "@/components/StoriesSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] font-montserrat overflow-x-hidden">
      <HeroSection />
      <CatalogSection />
      <StoriesSection />
      <ContactSection />
    </div>
  );
}
