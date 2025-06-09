import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface Tool {
  name: string;
  logo: string;
  category: string;
}

const tools: Tool[] = [
  {
    name: "Mixpanel",
    logo: "https://cdn.worldvectorlogo.com/logos/mixpanel.svg",
    category: "Analytics"
  },
  {
    name: "Google Analytics",
    logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg",
    category: "Analytics"
  },
  {
    name: "Miro",
    logo: "https://cdn.worldvectorlogo.com/logos/miro-2.svg",
    category: "Collaboration"
  },
  {
    name: "Jira",
    logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
    category: "Project Management"
  },
  {
    name: "Asana",
    logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg",
    category: "Project Management"
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    category: "Documentation"
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    category: "Design"
  },
  {
    name: "Replit",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1200px-New_Replit_Logo.svg.png",
    category: "Development"
  },
  {
    name: "Bolt",
    logo: "https://cdn-1.webcatalog.io/catalog/bolt-new/bolt-new-icon-filled-256.png?v=1730692903154",
    category: "Development"
  },
  {
    name: "Lovable",
    logo: "https://lovable.dev/_next/image?url=%2Fcontent%2Fnews%2Fcovers%2Fframe-2085660791.png&w=3840&q=75",
    category: "Development"
  }
];

const ToolsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-6">Tools I Use</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mt-6">
            My go-to toolkit for product management, design, analytics, and collaboration that helps me deliver exceptional results.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool) => (
            <motion.div 
              key={tool.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="flex justify-center"
            >
              <Card className="w-full border border-violet-100 hover:shadow-lg transition-all duration-300 bg-white overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                  <div className="w-full h-24 flex items-center justify-center mb-4">
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`} 
                      className="max-h-20 max-w-[90%] object-contain" 
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-violet-800">{tool.name}</h3>
                    <p className="text-xs text-violet-500">{tool.category}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ToolsSection;