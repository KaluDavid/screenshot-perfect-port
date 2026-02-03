import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Send, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com", 
      icon: Github,
      username: "@davidkalu",
      color: "hover:bg-gray-100 dark:hover:bg-gray-800"
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com", 
      icon: Linkedin,
      username: "/in/davidkalu",
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    { 
      name: "X (Twitter)", 
      href: "https://x.com", 
      icon: Twitter,
      username: "@davidkalu_",
      color: "hover:bg-sky-50 dark:hover:bg-sky-900/20"
    },
    { 
      name: "Email", 
      href: "mailto:hello@davidkalu.dev", 
      icon: Mail,
      username: "hello@davidkalu.dev",
      color: "hover:bg-green-50 dark:hover:bg-green-900/20"
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual email service later)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent! 🎉",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              className="text-4xl mb-4 block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
            >
              💬
            </motion.span>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Have a project in mind? I'd love to hear about it. Let's create something amazing.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Social Links - Cards style */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Connect with me
              </h3>
              
              <div className="grid gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 rounded-xl border border-border bg-card ${social.color} transition-all group`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <social.icon className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Quirky message */}
              <motion.div
                className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm text-muted-foreground">
                  <span className="text-lg mr-2">💡</span>
                  Pro tip: I respond faster on Twitter DMs!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Send a Message</CardTitle>
                  <CardDescription>
                    I'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all focus:scale-[1.01]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all focus:scale-[1.01]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        required
                        className="transition-all focus:scale-[1.01] resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          ⏳
                        </motion.span>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
