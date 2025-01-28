import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Destinations } from "@/components/Destinations";
import { Features } from "@/components/Features";
import { VacationPlans } from "@/components/VacationPlans";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Destinations />
      <VacationPlans />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;