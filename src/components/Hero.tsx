import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-4 animate-fade-in">
            Hello, I'm
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            David Kalu
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
            Frontend Engineer
          </p>

          {/* Value Proposition */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I build scalable, user-focused web products with a strong emphasis on
            performance, accessibility, and clean architecture.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              onClick={handleScrollToWork}
              className="min-w-[160px]"
            >
              View Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleScrollToContact}
              className="min-w-[160px]"
            >
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
