
import React, { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import FeaturedProceduresSection from "@/components/sections/FeaturedProceduresSection";
import FAQSection from "@/components/sections/FAQSection";
import SocialMediaSection from "@/components/sections/SocialMediaSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  console.log("Index component is rendering");

  useEffect(() => {
    console.log("Index component mounted successfully");
    window.scrollTo(0, 0);
    
    // Animación mejorada en scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element, index) => {
        const position = element.getBoundingClientRect();
        
        // Si el elemento está en el viewport
        if(position.top < window.innerHeight - 100) {
          setTimeout(() => {
            element.classList.add('animated');
          }, index * 100); // Stagger animation
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger inicial
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log("Rendering Index component JSX");

  return (
    <>
      <HeroSection />
      <TeamSection />
      <SpecialtiesSection />
      <FeaturedProceduresSection />
      <FAQSection />
      <SocialMediaSection />
      <CTASection />
    </>
  );
};

export default Index;
