import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  challenge: string;
  solution: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "Account Aggregation",
    title: "Account Aggregation for Neobanks & regular Banks (FinTech) - B2C ",
    description:
      "Account Aggregation is a highly secured, consent-based real-time ecosystem which allows users to access their financial assets under one hood",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/CRED_%28FinTech_company%29_logo.png",
    tags: ["UX Research", "Product Strategy", "Mobile App"],
    link: "https://docs.google.com/document/d/1ev0A5MunftLSBxi3T9X4mjaM78S8OTGjjhB7b-Gh2I0/edit?tab=t.0",
    challenge:
      "A lot of users have their financial assets spread across different apps/service providers. Now in order to access the financial assets the user has to go back and forth to different apps to keep a track of their assets which is a bit tiresome process",
    solution:
      "Build a super app to have all the accounts aggregated withing one application so that users can track their financials and spend or save wisely without having to use multiple apps for different Jobs to be done",
    results: [
      "Customers who connected external accounts logged in 2x more frequently, using the app for ongoing money tracking, not just transactions",
      "Aggregated data enabled personalized product recommendations (e.g., credit cards for high spenders, loans for high debt users), increasing conversion by 18-25% on relevant upsell offers",
      "Aggregated financial data reduced the need for customers to upload bank statements, improving funnel conversion for onboarding and loans by 15-20%",
    ],
  },
  {
    id: "fintech",
    title: "Improve Rewards & User Experience for Slice (FinTech) - B2C",
    description:
      "Slice is a fintech startup which is addressing the financial challenges of the Gen Z audience by providing a wide range of credit options to the users along with fulfilling regular banking needs",
    image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202402/65c0ae2e9b51c-following-a-three-month-beta-testing-phase-primarily-for-its-existing-customer-base--slice-is-now-ex-054517308-16x9.jpg?size=1200:675",
    tags: ["Data Visualization", "FinTech", "User Testing"],
    link: "https://docs.google.com/document/d/1dLSRmiO5DsBWQUch26EeJOj0cSvLwAnNMmN55uYF3X8/edit?tab=t.0#heading=h.w2a078es5hdt",
    challenge:
      "As per the feedback which we got from our users, the majority of feedback revolves around Slice monies which shows the problem with the current reward system where users are unable to get the context of the whole reward system . If the users aren’t even aware or clear about how monies are going to work then we are failing to convey the loyalty benefits of being a Slicer.",
    solution:
      "Revamp the rewards system & improve user experience of the ios & android application while spreading the reward system literacy ",
    results: [
      "Improved financial literacy metrics by 45%",
      "Increased user engagement by 60%",
      "Reduced support inquiries by 25%",
    ],
  },
  {
    id: "Eatsure",
    title: "Identify Problems in EatSure and fix them ",
    description:
      "EatSure, an app by Rebel Foods, operates nearly 8-10 sub-brands offering various cuisines, starting from one type and expanding to a wider range of cuisine types",
    image:
      "https://yt3.googleusercontent.com/zVbGjO9CSjF41g3JBz-kJCzqVozzN2gmf2p2hv0n-PMyo_suN2ncRbwx8AAgnLMhPCGrGHPp=s900-c-k-c0x00ffffff-no-rj",
    tags: ["Agile Development", "SaaS", "Remote Teams"],
    link: "https://docs.google.com/document/d/1AawE8SjOno2HJYCGNr_klVAgRpbQy0TYG-FncvIwMW8/edit?tab=t.0#heading=h.xt15iyul7i8p",
    challenge:
      "Eatsure has seen significant decrease in the number of Orders and is getting a lot of negative reviews because of bad experience .",
    solution:
      "Fix the key ordering problems followed by menu items discovery problems",
    results: [
      "Reduced item discovery time by 21%",
      "Improved ordering time by 55% ",
      "Increased D-30 retention by 37%",
    ],
  },
  {
    id: "Dunzo",
    title: "Identifying Dunzo's Business Pain Points & Solve them",
    description:
      "Dunzo is a hyperlocal delivery startup that delivers anything and everything within the city. Dunzo majorly deals with grocery, household items & food delivery from nearby restaurants ",
    image:
      "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2019/10/Dunzo-...jpg",
    tags: ["Agile Development", "SaaS", "Remote Teams"],
    link: "https://docs.google.com/document/d/1TC2i7-GiIWJJhphsXhRcpjkaOxRDNCZ8xrepeibMdYM/edit?tab=t.0#heading=h.42jss4e4mej4",
    challenge:
      "Dunzo's Unit economics is performing badly. Identify the core Problems and fix it ",
    solution:
      "Prioritising the core problems and tapping the low hanging fruits ",
    results: [
      "Reduced delivery time by 11%",
      "Improved ARPU by 8%",
    
    ],
  },
];

const CaseStudiesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  
  // Card hover animations
  const cardHoverVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-6">Case Studies</h2>
          {/* <p className="text-muted-foreground text-lg max-w-3xl mt-6">
            Explore some of the case studies below
          </p> */}
        </motion.div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12`}
            >
              <div className="lg:w-5/12">
                <motion.div 
                  className="relative overflow-hidden rounded-xl"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardHoverVariants}
                >
                  {/* Animated gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-violet-900/30"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated colored border */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-violet-500/0 rounded-xl z-10"
                    initial={{ borderColor: "rgba(139, 92, 246, 0)" }}
                    whileHover={{ borderColor: "rgba(139, 92, 246, 0.5)" }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-auto rounded-xl shadow-lg object-cover aspect-video"
                  />
                  
                  {/* Animated particles on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-white/70"
                        initial={{ 
                          x: Math.random() * 100 + "%", 
                          y: Math.random() * 100 + "%",
                          opacity: 0
                        }}
                        whileHover={{ 
                          y: [null, Math.random() * -40 - 10],
                          opacity: [0, 0.8, 0],
                          transition: { 
                            duration: 1.5 + Math.random(),
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: i * 0.2
                          }
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* View details button */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={caseStudy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm hover:bg-white text-violet-800 font-semibold py-3 px-5 rounded-full flex items-center space-x-2 shadow-lg z-20"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ 
                        y: 0, 
                        opacity: 1,
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      <span>View Details</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.div>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>

              <div className="lg:w-7/12">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-violet-800">
                    {caseStudy.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-violet-100 text-violet-800 border-violet-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-muted-foreground text-lg">
                    {caseStudy.description}
                  </p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-violet-700">
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-violet-700">
                        The Solution
                      </h4>
                      <p className="text-muted-foreground">
                        {caseStudy.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-violet-700">Results</h4>
                      <ul className="list-disc ml-5 text-muted-foreground">
                        {caseStudy.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={caseStudy.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-violet-700 hover:text-violet-900 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
