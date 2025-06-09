import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real application, you would send this data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-violet-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mt-6">
            Interested in working together or have a question? Fill out the form
            below and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-7/12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-violet-200 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-violet-600 to-violet-900"></div>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-violet-800"
                      >
                        Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 border-violet-200 focus-visible:ring-violet-500"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-violet-800"
                      >
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 border-violet-200 focus-visible:ring-violet-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium text-violet-800"
                    >
                      Subject
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 border-violet-200 focus-visible:ring-violet-500"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-violet-800"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 border-violet-200 focus-visible:ring-violet-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-violet-700 to-violet-900 hover:from-violet-800 hover:to-violet-900 text-white py-6"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="lg:w-5/12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white border-violet-200 shadow-lg h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-violet-800 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-violet-100 p-3 rounded-lg text-violet-700 mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <a
                        href="mailto:ashishhsingh84@gmail.com"
                        className="text-muted-foreground hover:text-violet-700 transition-colors"
                      >
                        ashishhsingh84@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-violet-100 p-3 rounded-lg text-violet-700 mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Phone</h4>
                      <a
                        href="tel:+11234567890"
                        className="text-muted-foreground hover:text-violet-700 transition-colors"
                      >
                        +91 8410415537
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-violet-100 p-3 rounded-lg text-violet-700 mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Location</h4>
                      <p className="text-muted-foreground">Bangalore , India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="font-medium text-lg mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/ashish-chauhan-a86287170/"
                      className="bg-violet-100 p-3 rounded-lg text-violet-700 hover:bg-violet-700 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-10">
                  {/* <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Modern workspace" 
                    className="rounded-lg w-full h-auto object-cover aspect-video shadow-md"
                  /> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
