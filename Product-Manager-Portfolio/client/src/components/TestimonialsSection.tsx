import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Ashish has an exceptional ability to understand both user needs and business requirements. His product strategy transformed our app experience and increased our user retention by 35%.",
    name: "Sarah Johnson",
    position: "CTO at TechStartup Inc."
  },
  {
    id: 2,
    quote: "Working with Ashish was a game-changer for our product team. His methodical approach to problem-solving and feature prioritization helped us focus on what truly matters to our users.",
    name: "Michael Chen",
    position: "Product Director at FinTech Solutions"
  },
  {
    id: 3,
    quote: "Ashish's user-centric approach and data-driven decision making were exactly what our team needed. He has a unique talent for communicating technical concepts to non-technical stakeholders.",
    name: "Jessica Williams",
    position: "VP of Product at SaaS Enterprise"
  }
];

const TestimonialsSection = () => {
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
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            What colleagues and clients say about working with me.
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
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="text-accent mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
                      <path d="M11.94 3.24c-5.88 0-8.34 4.08-8.34 7.44 0 3.6 2.46 5.52 4.98 5.52 2.76 0 4.26-1.8 4.26-3.96 0-2.28-1.62-3.84-3.42-3.84-1.2 0-1.86.72-1.92.78.06-.48.66-2.28 3.06-2.94.42-.12.72-.48.72-.9 0-.6-.6-1.08-1.2-1.08H9.9A1.2 1.2 0 0 0 8.7 5.34c0 .36.12.66.3.9.96 1.26 1.02 1.32 1.02 1.68 0 .24-.12.48-.24.6-.18.12-.36.18-.6.18-1.44 0-2.58 1.44-2.58 3.24 0 1.8 1.14 3.24 2.58 3.24.06 0 .24-.06.24-.24V9.6c0-.06 0-.12.06-.12a.17.17 0 0 1 .12-.06c.06 0 .12.06.12.18v5.94c0 .12.12.24.24.24 1.44 0 2.58-1.44 2.58-3.24 0-1.8-1.14-3.24-2.58-3.24-.24 0-.42-.06-.6-.18-.12-.12-.24-.36-.24-.6 0-.36.06-.42 1.02-1.68.18-.24.3-.54.3-.9 0-.66-.54-1.2-1.2-1.2h-.18c-.6 0-1.2.48-1.2 1.08 0 .42.3.78.72.9 2.4.66 3 2.46 3.06 2.94-.06-.06-.72-.78-1.92-.78-1.8 0-3.42 1.56-3.42 3.84 0 2.16 1.5 3.96 4.26 3.96 2.52 0 4.98-1.92 4.98-5.52 0-3.36-2.46-7.44-8.34-7.44z" />
                    </svg>
                  </div>
                  <p className="text-secondary italic mb-6">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="ml-4">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-secondary">{testimonial.position}</p>
                    </div>
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

export default TestimonialsSection;
