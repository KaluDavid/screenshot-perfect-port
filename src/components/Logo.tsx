 import { motion } from "framer-motion";
 import { Flame } from "lucide-react";
 
 interface LogoProps {
   className?: string;
 }
 
 const Logo = ({ className = "" }: LogoProps) => {
   return (
     <motion.div
       className={`flex items-center gap-1 ${className}`}
       whileHover={{ scale: 1.02 }}
     >
       <span className="text-xl md:text-2xl font-black tracking-tight uppercase" style={{ fontFamily: "'Permanent Marker', cursive" }}>
         David
       </span>
       <Flame className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
       <span className="text-xl md:text-2xl font-black tracking-tight uppercase" style={{ fontFamily: "'Permanent Marker', cursive" }}>
         Kalu
       </span>
     </motion.div>
   );
 };
 
 export default Logo;