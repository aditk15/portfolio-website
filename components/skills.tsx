"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Server, Smartphone, Globe, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python", "C++", "JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Frameworks",
    icon: <Globe className="w-6 h-6" />,
    skills: ["React", "React Native", "Node.js"],
  },
  {
    title: "Technologies",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Git", "Docker", "Firebase", "MongoDB", "REST APIs"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["iOS", "Android", "React Native", "Mobile UI/UX"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Web Development",
    icon: <Server className="w-6 h-6" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 bg-primaryDark px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-secondaryDark rounded-xl p-6 border border-highlight shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * skillIndex, duration: 0.3 }}
                    className="px-3 py-1 bg-primaryDark rounded-full text-sm border border-highlight hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

