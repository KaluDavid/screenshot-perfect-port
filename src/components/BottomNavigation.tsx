 import { useState, useEffect, useCallback } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { 
   ArrowUp, 
   FolderOpen, 
   GitBranch, 
   Star, 
   User, 
   Send 
 } from "lucide-react";
 import { cn } from "@/lib/utils";
 
 const BottomNavigation = () => {
   const [isVisible, setIsVisible] = useState(true);
   const [activeSection, setActiveSection] = useState("home");
   const [isPastHero, setIsPastHero] = useState(false);
   const [lastScrollY, setLastScrollY] = useState(0);
   const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
 
   const mainNavItems = [
     { id: "work", label: "Case Study", icon: FolderOpen, href: "#work" },
     { id: "process", label: "Process", icon: GitBranch, href: "#process" },
     { id: "testimonials", label: "Reviews", icon: Star, href: "#testimonials" },
     { id: "about", label: "About", icon: User, href: "#about" },
   ];
 
   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   };
 
   const scrollToSection = (href: string) => {
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   const scrollToContact = () => {
     const element = document.querySelector("#contact");
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   const handleScroll = useCallback(() => {
     const currentScrollY = window.scrollY;
     const heroHeight = window.innerHeight * 0.8;
 
     // Show navigation when scrolling
     setIsVisible(true);
 
     // Check if past hero section
     setIsPastHero(currentScrollY > heroHeight);
 
     // Determine active section
     const sections = ["contact", "about", "testimonials", "process", "work", "home"];
     for (const section of sections) {
       const element = document.getElementById(section);
       if (element) {
         const rect = element.getBoundingClientRect();
         if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
           setActiveSection(section);
           break;
         }
       }
     }
 
     // Reset home if at top
     if (currentScrollY < 100) {
       setActiveSection("home");
     }
 
     setLastScrollY(currentScrollY);
 
     // Clear existing timeout
     if (scrollTimeout) {
       clearTimeout(scrollTimeout);
     }
 
     // Set new timeout to hide after 5 seconds
     const timeout = setTimeout(() => {
       setIsVisible(false);
     }, 5000);
     setScrollTimeout(timeout);
   }, [scrollTimeout]);
 
   useEffect(() => {
     window.addEventListener("scroll", handleScroll, { passive: true });
 
     // Initial timeout to hide navigation
     const initialTimeout = setTimeout(() => {
       setIsVisible(false);
     }, 5000);
 
     return () => {
       window.removeEventListener("scroll", handleScroll);
       if (scrollTimeout) clearTimeout(scrollTimeout);
       clearTimeout(initialTimeout);
     };
   }, [handleScroll]);
 
   return (
     <AnimatePresence>
       {isVisible && (
         <motion.nav
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           exit={{ y: 100, opacity: 0 }}
           transition={{ type: "spring", stiffness: 300, damping: 30 }}
           className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
         >
           <div className="flex items-center gap-1 bg-card/95 backdrop-blur-md border border-border rounded-2xl p-2 shadow-xl">
             {/* Home/Scroll to top - only shows when past hero */}
             <AnimatePresence>
               {isPastHero && (
                 <motion.button
                   initial={{ width: 0, opacity: 0 }}
                   animate={{ width: "auto", opacity: 1 }}
                   exit={{ width: 0, opacity: 0 }}
                   transition={{ duration: 0.2 }}
                   onClick={scrollToTop}
                   className={cn(
                     "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-colors min-w-[60px]",
                     activeSection === "home"
                       ? "text-primary bg-muted"
                       : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                   )}
                 >
                   <ArrowUp className="h-5 w-5" />
                   <span className="text-[10px] font-medium">Home</span>
                 </motion.button>
               )}
             </AnimatePresence>
 
             {/* Divider when expanded */}
             {isPastHero && (
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="w-px h-8 bg-border mx-1"
               />
             )}
 
             {/* Main navigation items */}
             {mainNavItems.map((item) => (
               <button
                 key={item.id}
                 onClick={() => scrollToSection(item.href)}
                 className={cn(
                   "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-colors min-w-[60px]",
                   activeSection === item.id
                     ? "text-primary bg-muted"
                     : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                 )}
               >
                 <item.icon className="h-5 w-5" />
                 <span className="text-[10px] font-medium">{item.label}</span>
               </button>
             ))}
 
             {/* Divider when expanded */}
             {isPastHero && (
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="w-px h-8 bg-border mx-1"
               />
             )}
 
             {/* Contact - only shows when past hero */}
             <AnimatePresence>
               {isPastHero && (
                 <motion.button
                   initial={{ width: 0, opacity: 0 }}
                   animate={{ width: "auto", opacity: 1 }}
                   exit={{ width: 0, opacity: 0 }}
                   transition={{ duration: 0.2 }}
                   onClick={scrollToContact}
                   className={cn(
                     "flex items-center justify-center p-3 rounded-xl transition-colors",
                     activeSection === "contact"
                       ? "bg-primary text-primary-foreground"
                       : "bg-primary text-primary-foreground hover:bg-primary/90"
                   )}
                 >
                   <Send className="h-5 w-5" />
                 </motion.button>
               )}
             </AnimatePresence>
           </div>
         </motion.nav>
       )}
     </AnimatePresence>
   );
 };
 
 export default BottomNavigation;