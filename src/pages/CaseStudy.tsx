import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CaseStudyData {
  title: string;
  role: string;
  duration: string;
  year: string;
  tech: string[];
  problem: {
    context: string;
    challenge: string;
    constraints: string[];
  };
  process: {
    steps: {
      title: string;
      description: string;
    }[];
  };
  solution: {
    overview: string;
    features: string[];
  };
  outcome: {
    metrics: {
      label: string;
      value: string;
      description: string;
    }[];
  };
  improvements: string[];
}

const caseStudyData: Record<string, CaseStudyData> = {
  "ecommerce-redesign": {
    title: "E-Commerce Platform Redesign",
    role: "Lead Frontend Engineer",
    duration: "6 months",
    year: "2024",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Redis"],
    problem: {
      context:
        "A mid-size e-commerce company was struggling with declining conversion rates and high cart abandonment. Their legacy platform was built on an outdated tech stack, resulting in poor performance and a fragmented user experience across devices.",
      challenge:
        "Rebuild the entire frontend from scratch while maintaining business continuity, improving performance metrics, and implementing a design system that could scale with the company's growth.",
      constraints: [
        "6-month deadline for full migration",
        "Zero downtime during transition",
        "Must support 10+ third-party integrations",
        "Mobile-first approach required",
      ],
    },
    process: {
      steps: [
        {
          title: "Discovery & Audit",
          description:
            "Conducted a comprehensive audit of the existing platform, identifying performance bottlenecks, UX pain points, and technical debt. Interviewed stakeholders and analyzed user behavior data to prioritize improvements.",
        },
        {
          title: "Architecture Design",
          description:
            "Designed a modular frontend architecture using Next.js for SSR/SSG capabilities, implementing a component library with Tailwind CSS and a custom design token system for consistency.",
        },
        {
          title: "Incremental Migration",
          description:
            "Adopted a strangler fig pattern to gradually replace legacy components. Set up feature flags to enable A/B testing between old and new implementations.",
        },
        {
          title: "Performance Optimization",
          description:
            "Implemented code splitting, image optimization, and edge caching strategies. Used React Query for efficient data fetching with optimistic updates.",
        },
      ],
    },
    solution: {
      overview:
        "Delivered a modern, performant e-commerce platform with a component-driven architecture that reduced development time for new features by 40%.",
      features: [
        "Server-side rendering for improved SEO and initial load times",
        "Progressive Web App capabilities for offline browsing",
        "Accessibility-first design meeting WCAG 2.1 AA standards",
        "Real-time inventory updates via WebSocket connections",
        "Personalized product recommendations engine integration",
      ],
    },
    outcome: {
      metrics: [
        {
          label: "Conversion Rate",
          value: "+35%",
          description: "Increase in checkout completions",
        },
        {
          label: "Page Load Time",
          value: "-60%",
          description: "Faster initial page loads",
        },
        {
          label: "Mobile Revenue",
          value: "+48%",
          description: "Growth in mobile transactions",
        },
        {
          label: "Lighthouse Score",
          value: "95+",
          description: "Performance, accessibility, SEO",
        },
      ],
    },
    improvements: [
      "Would implement a micro-frontend architecture earlier to enable parallel team development",
      "Could have introduced visual regression testing sooner to catch UI inconsistencies",
      "Should have documented component usage patterns more thoroughly during initial development",
    ],
  },
};

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudyData[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
              <Link to="/">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link to="/" className="inline-block mb-8">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            {/* Header */}
            <header className="mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {study.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{study.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{study.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{study.year}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {study.tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </header>

            {/* Problem Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                The Problem
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">
                    {study.problem.context}
                  </p>
                  <h3 className="font-semibold text-foreground mb-3">
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {study.problem.challenge}
                  </p>
                  <h3 className="font-semibold text-foreground mb-3">
                    Constraints
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {study.problem.constraints.map((constraint, i) => (
                      <li key={i}>{constraint}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Process Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                The Process
              </h2>
              <div className="space-y-4">
                {study.process.steps.map((step, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {i + 1}
                        </span>
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Solution Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                The Solution
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6">
                    {study.solution.overview}
                  </p>
                  <h3 className="font-semibold text-foreground mb-3">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {study.solution.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Outcome Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                The Outcome
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {study.outcome.metrics.map((metric, i) => (
                  <Card key={i}>
                    <CardContent className="pt-6 text-center">
                      <p className="text-3xl font-bold text-primary mb-2">
                        {metric.value}
                      </p>
                      <p className="font-semibold text-foreground mb-1">
                        {metric.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {metric.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Improvements Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                What I'd Improve
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {study.improvements.map((improvement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-primary font-bold">→</span>
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-border">
              <p className="text-muted-foreground mb-4">
                Interested in working together?
              </p>
              <Link to="/#contact">
                <Button size="lg">Get In Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy;
