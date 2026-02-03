import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  slug: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    description:
      "Led the frontend architecture for a complete platform overhaul, improving conversion rates by 35% and reducing page load times by 60%.",
    role: "Lead Frontend Engineer",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    slug: "ecommerce-redesign",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-lg">
              Projects where I've made a meaningful impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project) => (
              <Link key={project.id} to={`/case-study/${project.slug}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {project.role}
                        </CardDescription>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
