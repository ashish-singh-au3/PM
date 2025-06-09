import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const aboutItems = [
    "Understanding the Problem - 'WHAT' aspect",
    "Identifying the 'WHO' and 'WHY' aspects ",
    "User-Centered Design Advocate",
    "Data-Driven Decision Maker",
    "Cross-Functional Team Leader",
    "Innovative Problem Solver",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-6">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mt-6">
            Discover my approach to product management and what drives my
            passion for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-200 to-violet-400 rounded-xl blur-lg opacity-50 -z-10"></div>
              
              {/* Interactive product workflow visualization */}
              <div className="bg-white rounded-lg shadow-lg p-4 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 to-violet-700"></div>
                
                {/* Product management workflow graphic */}
                <div className="flex flex-col items-center space-y-3 py-4 relative">
                  {/* Timeline track */}
                  <div className="absolute left-1/2 top-[60px] bottom-[60px] w-1 bg-violet-200 transform -translate-x-1/2 rounded-full"></div>
                  
                  {/* Header */}
                  <h3 className="text-xl font-bold text-violet-800 mb-4">My Proven Approach </h3>
                  
                  {/* Discovery phase */}
                  <motion.div 
                    className="flex items-center relative z-10 max-w-xs"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold shadow-lg"
                      whileInView={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(124, 58, 237, 0.4)",
                          "0 0 0 10px rgba(124, 58, 237, 0)",
                          "0 0 0 0 rgba(124, 58, 237, 0)"
                        ]
                      }}
                      transition={{ duration: 1, repeat: 2, repeatDelay: 2 }}
                    >
                      1
                    </motion.div>
                    <div className="ml-4 bg-violet-50 p-3 rounded-lg shadow">
                      <h4 className="font-bold text-violet-800 mb-1">Discovery</h4>
                      <p className="text-xs">User research, market analysis, problem definition</p>
                    </div>
                  </motion.div>
                  
                  {/* Strategy phase */}
                  <motion.div 
                    className="flex items-center relative z-10 max-w-xs ml-8 sm:ml-12"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-lg"
                      whileInView={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(79, 70, 229, 0.4)",
                          "0 0 0 10px rgba(79, 70, 229, 0)",
                          "0 0 0 0 rgba(79, 70, 229, 0)"
                        ]
                      }}
                      transition={{ duration: 1, repeat: 2, repeatDelay: 2, delay: 0.6 }}
                    >
                      2
                    </motion.div>
                    <div className="ml-4 bg-indigo-50 p-3 rounded-lg shadow">
                      <h4 className="font-bold text-indigo-800 mb-1">Strategy</h4>
                      <p className="text-xs">Roadmapping, prioritization, success metrics</p>
                    </div>
                  </motion.div>
                  
                  {/* Design phase */}
                  <motion.div 
                    className="flex items-center relative z-10 max-w-xs"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold shadow-lg"
                      whileInView={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(147, 51, 234, 0.4)",
                          "0 0 0 10px rgba(147, 51, 234, 0)",
                          "0 0 0 0 rgba(147, 51, 234, 0)"
                        ]
                      }}
                      transition={{ duration: 1, repeat: 2, repeatDelay: 2, delay: 1.2 }}
                    >
                      3
                    </motion.div>
                    <div className="ml-4 bg-purple-50 p-3 rounded-lg shadow">
                      <h4 className="font-bold text-purple-800 mb-1">Execution</h4>
                      <p className="text-xs">Wireframing, user stories, development coordination</p>
                    </div>
                  </motion.div>
                  
                  {/* Launch phase */}
                  <motion.div 
                    className="flex items-center relative z-10 max-w-xs ml-8 sm:ml-12"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-fuchsia-600 flex items-center justify-center text-white font-bold shadow-lg"
                      whileInView={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(192, 38, 211, 0.4)",
                          "0 0 0 10px rgba(192, 38, 211, 0)",
                          "0 0 0 0 rgba(192, 38, 211, 0)"
                        ]
                      }}
                      transition={{ duration: 1, repeat: 2, repeatDelay: 2, delay: 1.8 }}
                    >
                      4
                    </motion.div>
                    <div className="ml-4 bg-fuchsia-50 p-3 rounded-lg shadow">
                      <h4 className="font-bold text-fuchsia-800 mb-1">Measurement</h4>
                      <p className="text-xs">Analytics, feedback, iteration, optimization</p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Circular flow arrow at bottom */}
                <motion.div
                  className="w-full flex justify-center mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                    <motion.path 
                      d="M5,15 C5,5 20,5 30,15 C40,25 55,25 55,15" 
                      stroke="#8b5cf6" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: 1,
                        transition: { duration: 1.5, delay: 0.5 }
                      }}
                    />
                    <motion.path 
                      d="M50,15 L55,15 L55,10" 
                      stroke="#8b5cf6" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: 1, 
                        transition: { duration: 0.5, delay: 2 } 
                      }}
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-violet-800">
              Product Manager with a passion for innovation
            </h3>

            <div className="space-y-6">
              <p className="text-muted-foreground text-lg">
                I'm a product manager specializing in creating digital products
                that solve real user problems while driving business growth. My
                unique background in both <b> technology and business </b>{" "}
                allows me to effectively bridge the gap between user needs and
                organizational goals.
              </p>

              <p className="text-muted-foreground text-lg">
                I've collaborated with cross-functional teams to build products
                that users love. My approach is rooted in user-centered design,
                agile methodologies, and data-driven decision making.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {aboutItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-violet-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <Card className="bg-violet-50 border-violet-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-violet-800 mb-2">
                      Experience
                    </h4>
                    <p className="text-muted-foreground">
                      <b>6+ years in Product Management </b> <br />{" "}
                      <b>6+ years in Digital Strategy & Roadmap </b>
                      <br />{" "}
                      <b>5+ years in Data Analysis </b>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-violet-50 border-violet-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-violet-800 mb-2">
                      Experience
                    </h4>
                    <p className="text-muted-foreground">
                      <b>6+ years as IC & Manager </b> <br />{" "}
                      <b>4+ years in Direct Collaboration with C-Suite Leaders </b>
                      <br />{" "}
                      <b>5+ years in Building Customer & Business Oriented Solutions </b>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
