import { motion } from "framer-motion";
import { useRef } from "react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";

const projects = [
  { id: 1, image: projectEcommerce, title: "E-Commerce Dashboard" },
  { id: 2, image: projectFintech, title: "Fintech Mobile App" },
  { id: 3, image: projectHealthcare, title: "Healthcare Analytics" },
  { id: 4, image: projectEcommerce, title: "SaaS Platform" },
  { id: 5, image: projectFintech, title: "Payment Gateway" },
  { id: 6, image: projectHealthcare, title: "Data Visualization" },
];

const ProjectShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 overflow-hidden bg-muted/20">
      {/* Handwritten style header */}
      <div className="container mx-auto px-4 mb-8">
        <motion.p
          className="text-muted-foreground italic text-lg flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Snapshot of my creations
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✍️
          </motion.span>
        </motion.p>
      </div>

      {/* Horizontal scrolling gallery */}
      <div className="relative">
        <motion.div
          ref={containerRef}
          className="flex gap-6 px-4 py-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative flex-shrink-0 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              style={{
                rotate: index % 2 === 0 ? -2 : 2,
              }}
            >
              <div className="w-72 h-48 rounded-xl overflow-hidden shadow-lg border border-border bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
              </div>
              
              {/* Floating label on hover */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg"
              >
                {project.title}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* Scroll hint */}
      <div className="container mx-auto px-4 mt-4">
        <p className="text-xs text-muted-foreground text-center">
          ← Drag to explore →
        </p>
      </div>
    </section>
  );
};

export default ProjectShowcase;
