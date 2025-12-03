import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsCatalog from "@/components/ProductsCatalog";
import HowItWorks from "@/components/HowItWorks";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <ProductsCatalog />
      <HowItWorks />
      <DifferentialsSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
