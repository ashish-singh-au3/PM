import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsSection from "@/components/ToolsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeCTA from "@/components/ResumeCTA";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Set the document title
    document.title = "Ashish Chauhan | Product Manager Portfolio";

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ToolsSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
      <ResumeCTA resumeUrl="https://drive.google.com/file/d/1GCY2cB1WJb9tTL5_6qou1xdI2_b5kst2/view?usp=sharing" />
    </motion.div>
  );
};

export default Home;
