import { Link } from "wouter";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-br from-violet-900 to-violet-950 text-white py-16 relative">
      <div className="container mx-auto px-6">
        <div className="absolute right-10 -top-5">
          <Button
            onClick={scrollToTop}
            className="h-10 w-10 rounded-full bg-white text-violet-800 hover:bg-violet-100 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a
              href="#hero"
              className="text-3xl font-extrabold flex items-center"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              Ashish<span className="text-violet-400">.</span>
            </a>
            <p className="text-violet-300 mt-4 text-sm max-w-xs">
              Data-oriented, user-centric product manager with 6+ years of
              experience in building, delivering, and scaling products from 0 to
              1, 1 to 10, and 10 to 100
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/in/ashish-chauhan-a86287170/"
                className="bg-violet-800/50 hover:bg-violet-700 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-violet-300">
              {[
                { id: "hero", name: "Home" },
                { id: "about", name: "About" },
                { id: "experience", name: "Work Experience" },
                { id: "skills", name: "Skills" },
                { id: "tools", name: "Tools" },
                { id: "case-studies", name: "Case Studies" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="hover:text-white transition-colors flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    <span className="text-violet-500 mr-2">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Resources</h4>
            <ul className="space-y-3 text-violet-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Product Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  UX Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Design Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Strategy Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-violet-300">
              <li className="flex items-start">
                <span className="text-violet-500 mr-2">✉</span>
                <a
                  href="mailto:ashishhsingh84@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ashishhsingh84@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-violet-500 mr-2">☎</span>
                <a
                  href="tel:+918410415537"
                  className="hover:text-white transition-colors"
                >
                  +91 8410415537
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-violet-500 mr-2">📍</span>
                <span>Bangalore, India </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-violet-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-violet-300 text-sm">
            © {currentYear} Ashish Singh Chauhan . All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="#"
              className="text-violet-300 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-violet-300 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-violet-300 hover:text-white text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
