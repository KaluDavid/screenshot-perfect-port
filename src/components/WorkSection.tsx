import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  tech: string[];
  slug: string;
  image: string;
  featured?: boolean;
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
    image: projectEcommerce,
    featured: true,
  },
  {
    id: "2",
    title: "Fintech Mobile Banking App",
    description:
      "Built a responsive web app for a mobile-first banking experience with real-time transactions and biometric authentication.",
    role: "Senior Frontend Developer",
    tech: ["React Native", "TypeScript", "Redux", "Stripe"],
    slug: "fintech-banking",
    image: projectFintech,
  },
  {
    id: "3",
    title: "Healthcare Analytics Dashboard",
    description:
      "Developed a data visualization platform for healthcare providers to track patient outcomes and operational metrics.",
    role: "Frontend Engineer",
    tech: ["React", "D3.js", "GraphQL", "Tailwind CSS"],
    slug: "healthcare-dashboard",
    image: projectHealthcare,
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with emoji icon */}
          <div className="text-center mb-16">
            <motion.span
              className="text-4xl mb-4 block"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              📁
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Selected Case Studies
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Projects where I've made a meaningful impact
            </motion.p>
          </div>

          {/* Projects Grid - Bento style */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={project.featured ? "md:col-span-2" : ""}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/case-study/${project.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:border-primary/50 h-full">
                    {/* Image */}
                    <div className={`relative overflow-hidden ${project.featured ? "h-64" : "h-48"}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      
                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary/90 text-primary-foreground">
                            Featured Project
                          </Badge>
                        </div>
                      )}

                      {/* View link */}
                      <motion.div
                        className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-4 h-4 text-foreground" />
                      </motion.div>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                            {project.title}
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {project.role}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
