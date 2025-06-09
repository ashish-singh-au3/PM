import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  LineChart,
  Users,
  ListChecks,
  Zap,
  Layers,
  Target,
  TrendingUp,
} from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
}

const productSkills: Skill[] = [
  { name: "Product Development Lifecycle Management", percentage: 95 },
  { name: "Product Design ", percentage: 95 },
  { name: "Product Strategy & Roadmap", percentage: 95 },
  { name: "Product Sense", percentage: 90 },
  { name: "User Research & Analysis", percentage: 95 },
  { name: "Product Requirement Document (PRD)", percentage: 95 },
  { name: "Cross Functional Team Collaboration", percentage: 90 },
  { name: "Agile Methodologies", percentage: 90 },
  { name: "Competitor Analysis ", percentage: 90 },
  { name: "Product or Data Analytics", percentage: 95 },
];

const technicalSkills: Skill[] = [
  { name: "Wireframing & Prototyping", percentage: 95 },
  { name: "A/B Testing", percentage: 85 },
  { name: "SQL & Data Analysis", percentage: 75 },
  { name: "Product Marketing", percentage: 85 },
  { name: "Project Management ", percentage: 90 },
];

const skillHighlights = [
  {
    icon: <FileText className="h-10 w-10" />,
    title: "PRD ",
    description: "Creating detailed PRD for stakeholders, development & marketing teams",
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Data Analysis",
    description: "Making data-driven product decisions",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "User Research",
    description: "Conducting interviews and usability tests",
  },
  {
    icon: <ListChecks className="h-10 w-10" />,
    title: "Product Roadmaps",
    description: "Strategic planning and prioritization",
  },
];

const additionalSkills = [
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Fast Execution",
    description: "Rapidly iterating and implementing solutions",
  },
  {
    icon: <Layers className="h-10 w-10" />,
    title: "Cross-functional",
    description: "Working across engineering, design, and business teams",
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: "Goal-oriented",
    description: "Focusing on measurable outcomes and KPIs",
  },
  {
    icon: <TrendingUp className="h-10 w-10" />,
    title: "Growth Mindset",
    description: "Continuously learning and developing new skills",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-violet-50/50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-violet-200/30 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          y: [0, 40, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="section-title mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-3xl mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My toolkit for driving product success and delivering exceptional
            user experiences that create value for users and businesses alike
          </motion.p>
        </motion.div>

        <Tabs defaultValue="product" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
            <TabsTrigger value="product" className="text-lg">
              Product Skills
            </TabsTrigger>
            <TabsTrigger value="technical" className="text-lg">
              Technical Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="product" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {productSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-lg">{skill.name}</span>
                    <span className="font-semibold text-violet-700">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {skillHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-white border-violet-100 hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="text-violet-600 mb-4">{item.icon}</div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-lg">{skill.name}</span>
                    <span className="font-semibold text-violet-700">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {additionalSkills.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="h-full bg-white border-violet-100 hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="text-violet-600 mb-4">{item.icon}</div>
                      <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
