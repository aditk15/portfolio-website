"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Laptop } from "lucide-react"

// ...existing code...
const experiences = [
  {
    id: 1,
    role: "Intern – React Native",
    company: "TechTree IT System Private Limited",
    duration: "May 2024 - October 2024",
    location: "Bengaluru, India",
    description:
      "Inducted into the Android Front-end Team working on React Native. Contributed to developing a cross-platform mobile app for Cafe Coffee Day, boosting user engagement and operational efficiency. Conducted rigorous testing and debugging to maintain high application quality standards. Strengthened skills in React Native, JavaScript, and agile development practices.",
    logo: "/techtree.png?height=200&width=200",
    isCustomIcon: false,
  },
  {
    id: 2,
    role: "Freelancing – Web Development",
    company: "Self-employed",
    duration: "February 2025 - Ongoing",
    location: "Remote",
    description:
      "Designing and developing responsive websites using React, Vite, and Tailwind CSS for various clients. Integrating front-end interfaces with back-end services to ensure smooth data flow and functionality. Implementing modern UI/UX principles to enhance the user experience and overall site performance. Continuously optimizing websites for speed, scalability, and mobile responsiveness.",
    logo: "laptop",
    isCustomIcon: true,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 bg-primaryDark px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-highlight transform md:translate-x-[-0.5px]"></div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform translate-x-[-8px] md:translate-x-[-8px] z-10"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-secondaryDark rounded-xl p-6 border border-highlight shadow-lg hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-primaryDark p-1 border border-highlight mr-4">
                      {exp.isCustomIcon ? (
                        <div className="w-full h-full flex items-center justify-center">
                          {exp.logo === "laptop" && <Laptop className="w-8 h-8 text-white" />}
                        </div>
                      ) : (
                        <img
                          src={exp.logo || "/placeholder.svg"}
                          alt={exp.company}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                      <div>
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-textColor/80 mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-textColor">{exp.description}</p>
                  </motion.div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

