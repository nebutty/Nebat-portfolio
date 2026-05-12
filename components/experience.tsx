"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Eskalate LLC",
    period: "July 2025 – August 2025",
    responsibilities: [
  "Led and coordinated a team of 5 frontend developers using Agile methodology, delivering production-ready platforms.",
  "Developed and contributed to multiple production systems including NewsBrief and the A2SV Application Platform.",
  "Built NewsBrief, an AI-powered news summarizer delivering offline Amharic and English news briefs to 1,000+ users in low-connectivity regions.",
  "Developed the A2SV Application Platform frontend, replacing unstructured Google Docs workflows with a scalable system used by 500+ users.",
  "Built performant and accessible Next.js frontends with Tailwind CSS and RTK Query.",
  "Optimized applications for low-connectivity environments, improving reliability and user experience."
],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
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
              My Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
            >
              Work Experience
            </motion.h2>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                />

                {/* Content Card */}
                <motion.div
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all ml-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + index * 0.2 + respIndex * 0.1 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
