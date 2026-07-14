"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, Folder } from "lucide-react"

const projects = [
  {
  title: "Smart House Rental Platform",
  description:
    "A full-stack rental platform that enables users to discover, list, and manage rental properties. Developed the backend APIs with secure authentication, property management, appointment scheduling, messaging, payments, and AI-powered property recommendations.",
  tech: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "React",
    "Tailwind CSS",
    "Socket.IO",
    "JWT"
  ],
  github: "https://github.com/SmartHouseRental",
  demo: "https://shr-frontend.vercel.app/",
  featured: true,
},
  {
    title: "NewsBrief",
    description:
      "AI-powered news summarizer delivering offline Amharic and English news briefs for users in low-connectivity regions.",
    tech: ["Next.js", "Tailwind CSS", "RTK Query"],
    github: "https://github.com/nebutty/news-brief-frontend",
    demo: "https://news-brief-frontend.vercel.app/news",
    featured: true,
  },
  {
    title: "A2SV Application Platform",
    description:
      "Frontend system replacing manual Google Docs workflows with a scalable application platform used by 500+ users.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    github: "https://github.com/nebutty/A2SV-Application-Platform",
    demo: "https://a2-sv-application-platform.vercel.app/",
    featured: true,
  },
  {
    title: "Sisterhood Connect",
    description:
      "Backend platform for a women's tech networking community with secure authentication and scalable API architecture.",
    tech: ["Node.js", "Express.js", "MySQL", "Cloudinary"],
    github: "https://github.com/nebutty/Sisterhood-connects",
    demo: "#",
    featured: true,
  },
  {
    title: "Evangadi Forum",
    description:
      "RESTful forum API supporting authentication, questions, and answers with JWT security.",
    tech: ["Node.js", "Express.js", "MySQL"],
    github: "https://github.com/nebutty/NSDA_EvangadiForum_Backend",
    demo: "#",
    featured: false,
  },
  
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
            >
              Featured Projects
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
              >
                {/* Project Image Placeholder */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-emerald-500/20 aspect-video flex items-center justify-center">
                  <Folder
                    size={48}
                    className="text-primary/40 group-hover:text-primary/60 transition-colors"
                  />
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-secondary border border-border rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
