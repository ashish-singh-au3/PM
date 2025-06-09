import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Product Manager",
    company: "ProductNova",
    period: "August 2024 - Present",
    description: "Leading product suite for LegalTech , EdTech , InsureTech & AgriTech ",
    achievements: [
      "Spearheaded MVP development and Beta launch of Raison - an in-house B2B SaaS CLM product , in under 6 months driving a 60% lift in SQL-to-customer conversion",
      "Launched AI-powered contract analysis in Raison, reducing legal review time by 75% , accelerating deal closure cycles for Sales and Legal teams",
      "Leveraged AI tools to build functional prototypes for UAT, reducing discovery time by 58 %",
      "Improved conversion from low-ticket to high-ticket programs by 23% for a leading B2C EdTech platform by optimizing learning flow",
      "Revamped B2B SaaS ERP , resulting in 18% higher adoption and 53% lift in customer retention through improved UX and feature discoverability",
      "Crafted winning product proposals for U.S. HealthTech and InsureTech industries , helping close $1.5M in new business revenue in a span of 3 months"
    ],
    technologies: ["Product Strategy", "Product Innovation","Product Discovery","User Acceptance Testing","AI tools prototyping", "Data Analytics","GTM"]
  },
  {
    id: 2,
    role: "Product Manager",
    company: "SmartQ - Compass Group Company",
    period: "March 2023 - August 2024 ",
    description: "Led SmartQ's Consumer facing vertical for key regions like USA, Germany, Spain , Australia which included 7 Mobile & Web Applications ",
    achievements: [
      "Led the Rebranding of T2E Web & Mobile App resulting in increasing adoption by 13% and improved stickiness by 21% driving user loyalty",
      "Enhanced App's checkout process which resulted in 19% increase in cart conversion rate and boost in Average Revenue per User",
      "Drove $450,000 revenue growth in Q1 2024 through strategic Mobile and Web App initiatives , enhancing user experience and retention",
      "Consolidated 300+ configuration (keys and flags) into a single source of truth, reducing site configuration time by 40%",
      "Implemented MixPanel, defined key business metrics to understand user funnel, and conducted data analysis"
    ],
    technologies: ["Market Research", "Product Design & Revmping", "New Strategic Features", "A/B Testing"]
  },
  {
    id: 3,
    role: "Founding Product Manager",
    company: "Mool Money",
    period: "February 2022 - March 2023 ",
    description: "Spearheaded the launch of Mool's first ever mobile application. Conducted user research and competitor analysis to inform product decisions.",
    achievements: [
      "Launched 3 products in a span of 6 months, achieved 150,000 downloads within 30 days with 56% activation rate",
      "Led Account Aggregator feature , resulting in 27% increase in Daily Active Users from 72000 -> 91440 users",
      "Improved 30 Day retention by 11 percentage points, from 18% to 29%",
      "Integrated Razorpay for seamless in-app transactions, resulting in over INR 3.5 Crore in transactions within 2.5 months post-launch",
    ],
    technologies: ["User Research", "Competitive Analysis", "Product Requirements", "UI/UX"]
  },
  // {
  //   id: 4,
  //   role: "Founding Product Manager",
  //   company: "Felidaie ",
  //   period: "September 2020 - February 2022 ",
  //   description: "Developed and launched new features for Felidaie's MVP version. Conducted user research and competitor analysis to inform product decisions.",
  //   achievements: [
  //     "Successfully launched the MVP to waitlisted users, achieving a 71% adoption rate within the first 30 days",
  //     "Converted 45% of users to paid subscribers during the initial release",
  //         ],
  //   technologies: ["User Research", "Competitive Analysis", "Product Requirements", "UI/UX"]
  // },
  {
    id: 5,
    role: "Founder & CEO ",
    company: "Buddy ",
    period: "Sep 2019 - Feb 2022 ",
    description: "Validated the idea by doing thorough discovery . Developed and launched Buddy's MVP version which generated good revenue but had to shut down due to COVID-19 Pandemic :(",
    achievements: [
      "Led team of 11 to launch the MVP Phase 1 for waitlisted users, achieved 30% activation rate within first week of launch",
      "Generated INR 25,00,000 in revenue within the first 4 months of launch while maintaining the low CAC with 50% repeat user rate",
          ],
    technologies: ["User Research", "Competitive Analysis", "Product Requirements", "UI/UX"]
  },
  
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-6">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            My professional journey in product management and strategy, where I've turned ideas into impactful digital products.
          </p>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden border-l-4 border-l-violet-600 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="md:w-1/3">
                      <div className="text-sm text-violet-600 font-semibold mb-1">{exp.period}</div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-lg font-medium">{exp.company}</p>
                    </div>

                    <div className="md:w-2/3">
                      <p className="text-muted-foreground text-base mb-4">{exp.description}</p>
                      
                      <h3 className="font-semibold mb-2">Key Achievements:</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-base text-muted-foreground">{achievement}</li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="bg-violet-100 text-violet-800 hover:bg-violet-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;