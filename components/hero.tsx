"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-primaryDark to-secondaryDark px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primaryDark/50"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-primaryDark"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-primary">Adit Khandelwal</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl font-medium text-textColor"
          >
            <TypeAnimation
              sequence={[
                "Computer Engineering Student",
                1000,
                "React Native Developer",
                1000,
                "Mobile App Developer",
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-textColor/80 text-lg max-w-md"
          >
            Building innovative solutions through code and engineering principles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative mx-auto"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 relative z-10">
            <img
              src="/aditkhandelwal.jpg"
              alt="Adit Khandelwal"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  )
}

