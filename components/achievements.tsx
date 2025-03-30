"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, BookOpen, Globe, Flag, Users, Shield } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Merit Scholarship",
    description: "Received a merit scholarship worth ₹120,000 in grade 11 and 12 for excellent academic performance",
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "PADI Certified Open Water Diver",
    description: "Certified up to 18 meters unaccompanied",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "AFS NSLI-Y Program",
    description:
      "Hosted an American student for six weeks through the highly selective program, fostering cross-cultural exchange",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "GKDC 2023 Participant",
    description: "Represented college in GKDC 2023, a National Level Go Karting Competition held in Coimbatore",
    icon: <Flag className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Senior Vice Captain",
    description:
      "Served as Senior Vice Captain at The Shishukunj International School, leading event management and team coordination",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 6,
    title: "NDA & SSB Interview",
    description: "Cleared NDA Stage-1 and appeared for the SSB Interview at 4 AFSB, Varanasi",
    icon: <Shield className="w-6 h-6" />,
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section id="achievements" className="py-20 bg-secondaryDark px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Other <span className="text-primary">Achievements</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-primaryDark rounded-xl p-6 border border-highlight shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-textColor/80">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

