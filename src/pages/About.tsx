import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Coffee,
  Headphones,
  Gamepad2,
  ArrowLeft,
  ExternalLink,
  Briefcase,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import avatarImage from "@/assets/avatar.jpg";

interface WorkExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

// Placeholder work experience - will be updated with real data
const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "SyncU",
    role: "Frontend Engineer",
    period: "2023 - Present",
    location: "Lagos, Nigeria",
    description: [
      "Building pixel-perfect user interfaces and responsive web applications",
      "Implementing scalable frontend architecture with React, TypeScript, and Tailwind CSS",
      "Focusing on performance optimization, accessibility, and smooth user experiences",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    id: 2,
    company: "Previous Company",
    role: "Frontend Developer",
    period: "2021 - 2023",
    location: "Remote",
    description: [
      "Developed and maintained responsive web applications",
      "Collaborated with design teams to implement UI/UX improvements",
      "Participated in code reviews and mentored junior developers",
    ],
    technologies: ["React", "JavaScript", "CSS", "REST APIs"],
  },
  {
    id: 3,
    company: "Freelance",
    role: "Web Developer",
    period: "2020 - 2021",
    location: "Lagos, Nigeria",
    description: [
      "Built custom websites for small businesses and startups",
      "Handled end-to-end project delivery from design to deployment",
      "Maintained long-term client relationships",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

const funFacts = [
  { icon: Coffee, label: "Coffee lover", emoji: "☕" },
  { icon: Headphones, label: "Lo-fi beats", emoji: "🎧" },
  { icon: Gamepad2, label: "Casual gamer", emoji: "🎮" },
];

const About = () => {
  const resumeUrl = "https://docs.google.com/document/d/YOUR_RESUME_ID"; // Replace with actual Google Docs link

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="grid md:grid-cols-5 gap-8 items-center mb-20">
              {/* Image */}
              <motion.div
                className="md:col-span-2 relative"
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: 0 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl translate-x-4 translate-y-4" />
                  <img
                    src={avatarImage}
                    alt="David Kalu"
                    className="w-full aspect-square object-cover rounded-2xl relative z-10 shadow-xl"
                  />
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

              {/* Bio */}
              <motion.div
                className="md:col-span-3 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                  About Me
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a{" "}
                  <span className="text-foreground font-medium">
                    Frontend Engineer
                  </span>{" "}
                  with a passion for building products that make a difference.
                  With over 4 years of experience, I've worked with startups and
                  enterprises to create scalable web applications.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Beyond code, I believe in the power of great user experience.
                  I obsess over the little details — smooth animations, fast
                  load times, and interfaces that just
                  <span className="italic"> feel right</span>.
                </p>

                {/* Fun facts */}
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">
                    Currently vibing with:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {funFacts.map((fact, index) => (
                      <motion.div
                        key={fact.label}
                        className="flex items-center gap-2 bg-muted rounded-full px-4 py-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <span>{fact.emoji}</span>
                        <span className="text-sm text-muted-foreground">
                          {fact.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Resume CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button asChild>
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      View My Resume
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* Work Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-6 h-6 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Work Experience
                </h2>
              </div>

              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={job.id}
                    className="relative pl-8 border-l-2 border-border"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {job.role}
                          </h3>
                          <p className="text-primary font-medium">
                            {job.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        📍 {job.location}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {job.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-sm flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
