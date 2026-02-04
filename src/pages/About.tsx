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
  GraduationCap,
  Award,
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
  type: string;
  location: string;
  description: string[];
  technologies: string[];
}

const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "Spot'D",
    role: "Frontend Web Developer",
    period: "April 2025 - Present",
    type: "Part-time",
    location: "Remote",
    description: [
      "Building an influencer marketing platform with Next.js, TypeScript, and Tailwind CSS",
      "Developed the 'Coming Soon' page ensuring responsiveness and brand alignment",
      "Collaborated with frontend team to implement landing page directly from Figma",
      "Partner with product management to align features with business goals",
      "Integrate backend APIs to deliver seamless functionality",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
  {
    id: 2,
    company: "SyncU",
    role: "Frontend Web Developer",
    period: "Feb. 2024 - Jan. 2025",
    type: "Seasonal",
    location: "Nigeria",
    description: [
      "Built a responsive web platform from the ground up with a diverse team",
      "Wrote clean, functional UI using React, TypeScript, and Tailwind CSS",
      "Worked closely with designers to bring Figma designs to life",
      "Ensured pixel-perfect implementations across all screen sizes",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    id: 3,
    company: "Tevahrod Cosmetic Paints",
    role: "Frontend Web Developer & UX Researcher",
    period: "Feb. 2024 - March 2024",
    type: "Freelance",
    location: "Nigeria",
    description: [
      "Developed an e-commerce website showcasing company products",
      "Designed sketches and wireframes to plan layout and functionality",
      "Created flow charts to visualize website structures and user flows",
      "Collaborated with clients to understand requirements and ensure satisfaction",
    ],
    technologies: ["HTML", "CSS", "UX Research", "Wireframing"],
  },
  {
    id: 4,
    company: "The Just Projects - Cohort 2",
    role: "Frontend Web Developer (Team Lead)",
    period: "July 2023 - Aug. 2023",
    type: "Project",
    location: "Nigeria",
    description: [
      "Led a small team of developers to build a travel website",
      "Translated Figma designs into fully responsive webpages",
      "Managed tasks, kept timelines on track, and ensured quality delivery",
      "Demonstrated ownership, consistency, and follow-through",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Team Leadership"],
  },
  {
    id: 5,
    company: "Jobberman Nigeria",
    role: "Soft-skills Training",
    period: "Aug. 2022 - Sept. 2022",
    type: "Training",
    location: "Nigeria",
    description: [
      "Refined soft skills in a dynamic professional environment",
      "Enhanced ability to work seamlessly within cross-functional teams",
      "Developed time management and problem-solving skills",
    ],
    technologies: ["Communication", "Collaboration", "Adaptability"],
  },
];

const certifications = [
  "Frontend Web Development | TheJust Projects – Dec. 2023",
  "Frontend Web Development | Side Hustle – September 2022",
];

const technologies = [
  "Next.js",
  "TypeScript",
  "React.js",
  "Tailwind CSS",
  "Sass",
  "Firebase",
  "Supabase",
  "Git/GitHub",
  "JavaScript",
  "HTML/CSS",
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
                    <span className="text-sm font-medium">Calabar, Nigeria</span>
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
                  I am an experienced{" "}
                  <span className="text-foreground font-medium">
                    Frontend Web Developer
                  </span>{" "}
                  driven by building responsive, user-friendly web applications
                  that balance both user needs and business goals. Over the past
                  two years, I've worked with startups and small teams where I
                  collaborated closely with developers, designers, and product
                  managers to turn ideas into functional products.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  My technical toolkit includes React.js, Next.js, TypeScript,
                  and Tailwind CSS for creating clean, interactive interfaces.
                  Beyond coding, I actively contribute to design-to-code
                  workflows, implementing Figma designs into production-ready
                  applications.
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

            {/* Technologies Section */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🛠️</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Technologies
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Certifications
                </h2>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    className="bg-card border border-border rounded-lg p-4 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Education
                </h2>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  B.A. Linguistics and Communication Studies
                </h3>
                <p className="text-primary font-medium">
                  University of Calabar, Nigeria
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  2022 - Present
                </p>
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
