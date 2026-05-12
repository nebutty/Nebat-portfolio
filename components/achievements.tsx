"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Trophy, Star, Code, Award, X, ExternalLink } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    icon: Trophy,
    title: "President's List Recognition",
    description: "Achieved 3.83 GPA with outstanding academic performance",
    highlight: "3.83 GPA",
    certificate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-08-25_14-35-04-XlUG4GJIaYcuV3Uw7HdCpnjO2XwLj1.jpg",
    certificateAlt: "President's Award Certificate from Addis Ababa Science and Technology University",
  },
 
  {
    icon: Star,
    title: "NSDA Mini Hackathon",
    description: "Participated and showcased innovative solutions",
    highlight: "Hackathon Participant",
    certificate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-05-12_15-09-15-DyKowd4cK5LRw3BXcCSUTQ4zqdkjnO.jpg",
    certificateAlt: "NSDA Mini Hackathon Certificate of Appreciation",
  },
  {
    icon: Award,
    title: "Node.js Track Course",
    description: "Successfully completed at NSDA with excellence",
    highlight: "NSDA Certified",
    certificate: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2026-05-12_15-09-10-YWWqUjiktATiVslaG60oLDxWrqZOg0.jpg",
    certificateAlt: "Node.js Track Course Completion Certificate from NSDA",
  },
   {
    icon: Code,
    title: "500+ Problems Solved",
    description: "Competitive programming on LeetCode and Codeforces platforms",
    highlight: "LeetCode & Codeforces",
    certificate: null,
    certificateAlt: null,
  },
]

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCertificate, setSelectedCertificate] = useState<{
    url: string
    alt: string
    title: string
  } | null>(null)

  return (
    <>
      <section id="achievements" className="py-20 md:py-32 bg-secondary/30">
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
                Recognition
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
              >
                Achievements
              </motion.h2>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all text-center flex flex-col"
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon size={28} className="text-primary" />
                  </motion.div>
                  
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 flex-1">
                    {achievement.description}
                  </p>
                  
                  <span className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full mb-4">
                    {achievement.highlight}
                  </span>

                  {/* Certificate Preview & Button */}
                  {achievement.certificate && (
                    <div className="mt-auto">
                      <div 
                        className="relative w-full h-24 rounded-lg overflow-hidden mb-3 cursor-pointer group/cert"
                        onClick={() => setSelectedCertificate({
                          url: achievement.certificate!,
                          alt: achievement.certificateAlt!,
                          title: achievement.title,
                        })}
                      >
                        <Image
                          src={achievement.certificate}
                          alt={achievement.certificateAlt || "Certificate"}
                          fill
                          className="object-cover transition-transform duration-300 group-hover/cert:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center">
                          <ExternalLink size={20} className="text-white" />
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedCertificate({
                          url: achievement.certificate!,
                          alt: achievement.certificateAlt!,
                          title: achievement.title,
                        })}
                        className="w-full py-2 px-4 text-xs font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center justify-center gap-2"
                      >
                        <Award size={14} />
                        View Certificate
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="font-semibold text-lg">{selectedCertificate.title}</h3>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Certificate Image */}
              <div className="relative w-full aspect-[4/3] md:aspect-video">
                <Image
                  src={selectedCertificate.url}
                  alt={selectedCertificate.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-border flex justify-end gap-3">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-4 py-2 text-sm rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedCertificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Open Full Size
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}