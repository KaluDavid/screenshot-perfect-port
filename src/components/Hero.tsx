import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import avatarImage from "@/assets/avatar.jpg";

const Hero = () => {
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
  ];

  const handleScrollToWork = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Floating geometric shapes - quirky background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-primary/5 rotate-45"
          animate={{ 
            y: [0, 30, 0],
            rotate: [45, 90, 45]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-16 h-16 border border-muted-foreground/10 rounded-lg"
          animate={{ 
            x: [0, 20, 0],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-60 right-1/3 w-8 h-8 bg-primary/10 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Avatar with floating availability badge */}
          <motion.div 
            className="relative inline-block mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="relative">
              <img
                src={avatarImage}
                alt="David Kalu"
                className="w-28 h-28 rounded-full object-cover border-4 border-background shadow-xl"
              />
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/50"
                animate={{ scale: [1, 1.15, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            
            {/* Floating availability badge - quirky tilted design */}
            <motion.div
              className="absolute -top-2 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg"
              style={{ rotate: 12 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available
              </span>
            </motion.div>
          </motion.div>

          {/* Greeting with wave emoji */}
          <motion.p 
            className="text-muted-foreground text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi! 👋, I'm
          </motion.p>

          {/* Main Headline with staggered animation */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            David Kalu
          </motion.h1>

          {/* Role with icon */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Frontend Engineer
            </p>
          </motion.div>

          {/* Value Proposition - styled differently */}
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to my little corner on the internet where I shape{" "}
            <span className="text-foreground font-medium">code into products</span>.
          </motion.p>

          {/* Tech Stack with staggered animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick nav pills - like the reference */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {[
              { label: "CASE STUDIES", id: "work", icon: "📁" },
              { label: "MY PROCESS", id: "process", icon: "✨" },
              { label: "ABOUT ME", id: "about", icon: "👤" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(item.id);
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:scale-105"
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              size="lg"
              onClick={handleScrollToWork}
              className="min-w-[160px] group"
            >
              View Work
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToContact}
              className="min-w-[160px]"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
