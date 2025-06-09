import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeCTAProps {
  resumeUrl: string;
}

const ResumeCTA = ({ resumeUrl }: ResumeCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show the button when user scrolls down 300px from the top
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="no-underline"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-800 hover:to-violet-900 text-white shadow-lg rounded-full pl-4 pr-5 py-6"
              >
                <FileDown className="mr-2 h-5 w-5" />
                <span className="font-semibold">Download Resume</span>
              </Button>
            </a>
          </motion.div>
          
          {/* Pulsing effect */}
          <div className="absolute inset-0 rounded-full z-[-1]">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 0.4, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-full h-full bg-violet-500 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeCTA;