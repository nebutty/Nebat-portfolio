"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Code2 } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm font-medium tracking-wider uppercase"
            >
              Get to know me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
            >
              About Me
            </motion.h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground leading-relaxed">
                Software Engineering student at Addis Ababa Science and Technology University with hands-on experience building production-ready web applications using React, Next.js, Node.js, and Tailwind CSS.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Experienced in frontend development, REST APIs, scalable systems, and Agile collaboration. Passionate about solving real-world problems through modern software engineering.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <span className="text-sm text-muted-foreground">Building the future, one line at a time</span>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <GraduationCap className="text-primary" size={24} />
                Education
              </h3>
              
              <div className="space-y-4">
                <motion.div
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code2 size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">B.Sc. in Software Engineering</h4>
                      <p className="text-sm text-muted-foreground">Addis Ababa Science and Technology University</p>
                      <span className="text-xs text-primary">2021 – Present</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code2 size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Africa to Silicon Valley Coding Academy</h4>
                      <p className="text-sm text-muted-foreground">Backed by Google</p>
                      <span className="text-xs text-primary">2025</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
