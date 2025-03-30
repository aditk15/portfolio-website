"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="py-20 bg-secondaryDark px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-primary">About</span> Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-primaryDark/80 rounded-xl p-6 md:p-8 shadow-lg border border-highlight"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <motion.p variants={itemVariants} className="text-textColor mb-4">
                  I'm a passionate Computer Engineering student at Mukesh Patel School of Technology, Management and
                  Engineering, Mumbai (NMIMS) with a strong foundation in software development and a keen interest in
                  mobile applications.
                </motion.p>
                <motion.p variants={itemVariants} className="text-textColor">
                  With a CGPA of <span className="text-primary font-semibold">3.67/4.0</span>, I consistently strive for
                  excellence in my academic pursuits while also working on personal projects that challenge and expand
                  my technical abilities.
                </motion.p>
              </div>

              <div>
                <motion.h3 variants={itemVariants} className="text-xl font-semibold mb-4 text-primary">
                  Key Skills
                </motion.h3>
                <motion.ul variants={itemVariants} className="space-y-2">
                  {["Python", "MySQL", "C++", "React Native", "Mobile Development", "Java", "HTML", "RESTful API"].map(
                    (skill, index) => (
                      <motion.li key={index} variants={itemVariants} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <span className="text-textColor">{skill}</span>
                      </motion.li>
                    ),
                  )}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

