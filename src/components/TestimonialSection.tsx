import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Play, X, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  linkedinUrl: string;
  thumbnailColor: string;
  transcript: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    linkedinUrl: "https://linkedin.com/in/",
    thumbnailColor: "from-blue-500 to-purple-600",
    transcript:
      "Working with David was an absolute pleasure. His attention to detail and ability to translate complex requirements into clean, functional interfaces is remarkable. He delivered our e-commerce platform ahead of schedule and the performance improvements were beyond our expectations.",
  },
  {
    id: 2,
    name: "Michael Adeyemi",
    role: "CTO",
    company: "FinStart",
    linkedinUrl: "https://linkedin.com/in/",
    thumbnailColor: "from-green-500 to-teal-600",
    transcript:
      "David's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His code is clean, well-documented, and maintainable. He's not just a developer - he thinks like a product owner and suggests improvements that genuinely impact user experience.",
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Design Lead",
    company: "CreativeHub",
    linkedinUrl: "https://linkedin.com/in/",
    thumbnailColor: "from-orange-500 to-red-600",
    transcript:
      "As a designer, I appreciate developers who care about the details. David implemented our designs pixel-perfectly and even suggested animation improvements that enhanced the overall feel. His communication throughout the project was exceptional.",
  },
];

const TestimonialSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);
  const [showTranscript, setShowTranscript] = useState(false);

  const openVideoModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowTranscript(false);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    setShowTranscript(false);
  };

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-4xl mb-4 block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            💬
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What People Say
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-md mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Hear from colleagues and clients I've had the pleasure of working
            with
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Video Thumbnail */}
                <div
                  className={`relative aspect-video bg-gradient-to-br ${testimonial.thumbnailColor} cursor-pointer`}
                  onClick={() => openVideoModal(testimonial)}
                >
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </motion.div>
                  </div>

                  {/* Placeholder video text */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      <p className="text-white text-xs">
                        Video testimonial coming soon
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>

                    {/* LinkedIn Link */}
                    <a
                      href={testimonial.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors"
                      aria-label={`View ${testimonial.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                    </a>
                  </div>

                  {/* Transcript Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-3 w-full text-muted-foreground hover:text-foreground"
                    onClick={() => openVideoModal(testimonial)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Transcript
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedTestimonial} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <span>{selectedTestimonial?.name}</span>
              {selectedTestimonial && (
                <a
                  href={selectedTestimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-[#0077B5]/10 hover:bg-[#0077B5]/20 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                </a>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedTestimonial && (
            <div className="space-y-4">
              {/* Video Player Placeholder */}
              <div
                className={`relative aspect-video bg-gradient-to-br ${selectedTestimonial.thumbnailColor} rounded-lg overflow-hidden`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <Play className="w-16 h-16 mb-4 opacity-80" />
                  <p className="text-lg font-medium">
                    Video testimonial placeholder
                  </p>
                  <p className="text-sm opacity-70">
                    Replace with actual video URL
                  </p>
                </div>
              </div>

              {/* Testimonial Info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {selectedTestimonial.role} at {selectedTestimonial.company}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTranscript(!showTranscript)}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  {showTranscript ? "Hide" : "Show"} Transcript
                </Button>
              </div>

              {/* Transcript */}
              <AnimatePresence>
                {showTranscript && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        "{selectedTestimonial.transcript}"
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialSection;
