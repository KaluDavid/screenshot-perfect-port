 import { Link } from "react-router-dom";
 import { Github, Linkedin, FileText } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import Logo from "./Logo";

const Header = () => {
  const socialLinks = [
     { 
       name: "Resume", 
       href: "https://docs.google.com/document/d/YOUR_RESUME_ID", 
       icon: FileText,
       label: "View Resume" 
     },
    { name: "GitHub", href: "https://github.com", icon: Github },
     { name: "LinkedIn", href: "https://linkedin.com/in/davidskalu", icon: Linkedin },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-14">
          {/* Logo */}
           <Link to="/">
             <Logo />
          </Link>

           {/* Right side: Resume & Social Links */}
           <div className="flex items-center gap-2 md:gap-4">
            {socialLinks.map((social) => (
               social.label ? (
                 <Button
                   key={social.name}
                   variant="outline"
                   size="sm"
                   asChild
                   className="hidden sm:flex"
                 >
                   <a
                     href={social.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="gap-2"
                   >
                     <social.icon className="h-4 w-4" />
                     <span className="text-sm">{social.label}</span>
                   </a>
                 </Button>
               ) : (
                 <a
                   key={social.name}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-foreground transition-colors p-2"
                   aria-label={social.name}
                 >
                   <social.icon className="h-5 w-5" />
                 </a>
               )
             ))}
             {/* Mobile Resume Icon */}
             <a
               href="https://docs.google.com/document/d/YOUR_RESUME_ID"
               target="_blank"
               rel="noopener noreferrer"
               className="sm:hidden text-muted-foreground hover:text-foreground transition-colors p-2"
               aria-label="View Resume"
             >
               <FileText className="h-5 w-5" />
             </a>
           </div>
         </div>
       </div>
     </header>
   );
 };
 
 export default Header;
