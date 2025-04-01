"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
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
    <section id="contact" className="py-20 bg-primaryDark px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-secondaryDark rounded-xl p-8 border border-highlight shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-textColor/80 mb-8">
              Feel free to reach out to me for any questions, opportunities, or just to say hello. I'm always open to
              discussing new projects and ideas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-textColor/80">Email</p>
                  <p className="text-textColor">aditkhandelwal3@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-textColor/80">Phone</p>
                  <p className="text-textColor">+91 9300382001</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-textColor/80">Location</p>
                  <p className="text-textColor">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-6 justify-center md:justify-start">
                <a
                  href="https://www.linkedin.com/in/adit-khandelwal-142579321"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/aditk15"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:aditkhandelwal3@gmail.com"
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

