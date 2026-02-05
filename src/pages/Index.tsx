import Header from "@/components/Header";
 import BottomNavigation from "@/components/BottomNavigation";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
       <BottomNavigation />
      <main>
         <section id="home">
           <Hero />
         </section>
        <ProjectShowcase />
        <WorkSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
