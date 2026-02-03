import { motion } from "framer-motion";
import { MapPin, Coffee, Headphones, Gamepad2 } from "lucide-react";
import avatarImage from "@/assets/avatar.jpg";

const AboutSection = () => {
  const funFacts = [
    { icon: Coffee, label: "Coffee lover", emoji: "☕" },
    { icon: Headphones, label: "Lo-fi beats", emoji: "🎧" },
    { icon: Gamepad2, label: "Casual gamer", emoji: "🎮" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              className="text-4xl mb-4 block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
            >
              👤
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-5 gap-8 items-center">
            {/* Image with quirky frame */}
            <motion.div
              className="md:col-span-2 relative"
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Offset border decoration */}
                <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl translate-x-4 translate-y-4" />
                
                <img
                  src={avatarImage}
                  alt="David Kalu"
                  className="w-full aspect-square object-cover rounded-2xl relative z-10 shadow-xl"
                />

                {/* Location badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-card border border-border rounded-full px-4 py-2 shadow-lg z-20 flex items-center gap-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Lagos, Nigeria</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              className="md:col-span-3 space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Frontend Engineer</span> with a 
                passion for building products that make a difference. With over 4 years of experience, 
                I've worked with startups and enterprises to create scalable web applications.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Beyond code, I believe in the power of great user experience. I obsess over the 
                little details — smooth animations, fast load times, and interfaces that just 
                <span className="italic"> feel right</span>.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source, or writing about web development.
              </p>

              {/* Fun facts */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-3">Currently vibing with:</p>
                <div className="flex flex-wrap gap-3">
                  {funFacts.map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      className="flex items-center gap-2 bg-muted rounded-full px-4 py-2"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>{fact.emoji}</span>
                      <span className="text-sm text-muted-foreground">{fact.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Resume CTA */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4 font-medium group"
                >
                  <span>View my resume</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
