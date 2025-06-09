import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "instarent",
    title: "InstaRent Mobile App",
    description: "Redesigned the rental experience to make finding and leasing apartments easier and more transparent.",
    image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    tags: ["UX Research", "Product Strategy", "Mobile App"],
    link: "https://ashishs.my.canva.site"
  },
  {
    id: "fintech",
    title: "FinTech Dashboard",
    description: "Created an intuitive financial analytics dashboard that helps users understand and manage their finances better.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    tags: ["Data Visualization", "FinTech", "User Testing"],
    link: "https://ashishs.my.canva.site"
  },
  {
    id: "teamcollab",
    title: "TeamCollab Platform",
    description: "Developed a collaboration tool that streamlines communication and project management for remote teams.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    tags: ["Agile Development", "SaaS", "Remote Teams"],
    link: "https://ashishs.my.canva.site"
  }
];

const tagColors: Record<string, string> = {
  "UX Research": "bg-blue-100 text-blue-800",
  "Product Strategy": "bg-green-100 text-green-800",
  "Mobile App": "bg-purple-100 text-purple-800",
  "Data Visualization": "bg-yellow-100 text-yellow-800",
  "FinTech": "bg-red-100 text-red-800",
  "User Testing": "bg-blue-100 text-blue-800",
  "Agile Development": "bg-green-100 text-green-800",
  "SaaS": "bg-indigo-100 text-indigo-800",
  "Remote Teams": "bg-pink-100 text-pink-800"
};

const PortfolioSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Explore some of my recent product management projects and how I tackled complex challenges.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((caseStudy) => (
            <motion.div key={caseStudy.id} variants={itemVariants}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                  <p className="text-secondary mb-4">
                    {caseStudy.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className={tagColors[tag]}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a 
                    href={caseStudy.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:underline font-medium inline-flex items-center"
                  >
                    View Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
