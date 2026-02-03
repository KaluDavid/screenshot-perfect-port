import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Understanding the problem space, user needs, and business goals through research and stakeholder interviews.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Creating wireframes and prototypes, iterating on feedback, and establishing a solid design system.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Code,
    title: "Development",
    description: "Building with clean, maintainable code. I focus on performance, accessibility, and scalable architecture.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Rocket,
    title: "Delivery",
    description: "Shipping with confidence through testing, monitoring, and continuous iteration based on real user feedback.",
    color: "bg-orange-500/10 text-orange-600",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header with quirky styling */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="text-4xl">✨</span>
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              My Process
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              How I approach building products that people actually want to use
            </motion.p>
          </div>

          {/* Process Steps with connecting line */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative flex gap-6 items-start"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  {/* Icon with number */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-sm`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="w-7 h-7" />
                    </motion.div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quirky bottom decoration */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
              <span className="text-sm text-muted-foreground">and repeat</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🔄
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
