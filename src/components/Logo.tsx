 import { motion } from "framer-motion";
 
 interface LogoProps {
   className?: string;
 }
 
 const Logo = ({ className = "" }: LogoProps) => {
   return (
     <motion.div
       className={`font-bold tracking-tight ${className}`}
       whileHover={{ scale: 1.02 }}
     >
       <span className="text-xl md:text-2xl font-serif italic">
         <span className="text-foreground">David</span>
         <span className="text-primary/70 ml-1">K</span>
         <span className="text-muted-foreground text-lg md:text-xl">.</span>
       </span>
     </motion.div>
   );
 };
 
 export default Logo;