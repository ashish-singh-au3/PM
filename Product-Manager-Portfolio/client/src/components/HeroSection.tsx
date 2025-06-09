import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
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

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden bg-gray-50"
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-violet-600/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-violet-800/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-3/5 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-800 font-semibold text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="font-bold">
                Ex Founder & Senior Product Manager
              </span>
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-4xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              👋 Hi, I&apos;m{" "}
              <span className="gradient-text">Ashish</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Product Manager with 6+ years of experience. I’ve led products
              from <b>0→1</b> , scaled them from <b>1→10</b>, and helped them
              grow from <b>10→100</b>.{" "}
              <b>I was the founder of a Travel-tech </b>
              platform straight out of college, and since then, I’ve been the
              <b> Founding PM </b> in multiple startups, shaping product
              strategy, shipping fast, and driving outcomes. I thrive in
              ambiguity, love solving real problems for users, and bring a
              founder’s mindset to every product I touch
            </motion.p>
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-800 font-semibold text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="font-bold">B2C</span>
            </motion.span>
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-800 font-semibold text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="font-bold">B2B2C</span>
            </motion.span>
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-800 font-semibold text-sm mb-6"
              initial={{ opacity: 2, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="font-bold">B2B SaaS</span>
            </motion.span>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                className="bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-800 hover:to-violet-900 text-white font-medium py-6 px-8 rounded-md"
                onClick={() => scrollToSection("case-studies")}
                size="lg"
              >
                <span>View Case Studies</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-violet-700 text-violet-700 hover:bg-violet-600 font-medium py-6 px-8 rounded-md"
                onClick={() => scrollToSection("contact")}
                size="lg"
              >
                <span>Contact Me</span>
              </Button>
            </motion.div>

            <motion.div
              className="mt-16 hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button
                onClick={() => scrollToSection("about")}
                className="flex items-center text-sm text-violet-700 hover:text-violet-900 transition-colors"
              >
                <span className="mr-2">Scroll down to learn more</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          >
            <div className="relative">
              {/* Glowing effect behind image */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-violet-400/30 to-violet-700/30 rounded-2xl blur-xl"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Main image with animation */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src="https://leancommunity.org/wp-content/uploads/2022/07/1-1-1-1-1024x577.jpg"
                  className="w-full h-auto rounded-2xl"
                />

                {/* <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-violet-900/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >

                </motion.div> */}

                {/* Animated decorative elements */}
                {/* <motion.div
                  className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 1.2,
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16L16 12L12 8M8 12H16"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div> */}

                
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/40 w-1 h-1"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 15}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
