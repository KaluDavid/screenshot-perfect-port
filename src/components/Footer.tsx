import { motion } from "framer-motion";
import { Heart } from "lucide-react";
 import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo / Name */}
             <Logo />

            {/* Built with love */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              </motion.span>
              <span>using React & Tailwind</span>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Fun bottom line */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-muted-foreground/60">
              ✨ Thanks for scrolling all the way down! You're awesome. ✨
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
