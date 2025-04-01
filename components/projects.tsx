"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const MY_GITHUB_URL = "https://github.com/aditk15";

const projects = [
  {
    id: 1,
    title: "Hand Sign Detection",
    description:
      "Developed a model to detect and recognize ASL hand signs using OpenCV and TensorFlow, displaying them for easier communication.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
    github: "#",
    demo: "#",
    details:
      "This project uses computer vision techniques and machine learning to recognize American Sign Language (ASL) hand signs in real-time. The system captures video input, processes each frame to detect hand positions, and uses a trained TensorFlow model to classify the signs. The recognized signs are then displayed on screen, making communication more accessible for individuals with hearing impairments.",
  },
  {
    id: 2,
    title: "Book Tracker Mobile App",
    description: "Native Mobile Application built for Android to keep track of books read using the Google Books API.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Android", "Java", "Google Books API", "SQLite"],
    github: "#",
    demo: "#",
    details:
      "This Android application helps users maintain their reading habits by tracking books they've read. The app integrates with the Google Books API to fetch book details, allowing users to search for books, add them to their reading list, mark books as read, and keep notes on each book. The app offers a simple and engaging way to maintain reading habits and keep a log of all completed books.",
  },
  {
    id: 3,
    title: "Flight Route Planner",
    description: "Implemented a Graph Data Structure to identify cost-effective and distance-based flight routes.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Graph Algorithms", "Data Structures", "Dijkstra's Algorithm"],
    github: "#",
    demo: "#",
    details:
      "This project uses graph theory to optimize flight routes based on cost and distance. Cities are represented as nodes in a graph, with flights as weighted edges. The system implements Dijkstra's algorithm to find the shortest path between cities, considering either cost or distance as the primary factor. Users can input multiple cities and passenger details to receive optimized travel recommendations.",
  },
  {
    id: 4,
    title: "Arduino Radar System",
    description: "Developed a radar system with GUI using an Arduino Module integrated with peripheral devices.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Arduino", "C++", "Ultrasonic Sensors", "GUI Development"],
    github: "#",
    demo: "#",
    details:
      "This project implements a radar system using Arduino and ultrasonic sensors that can detect objects up to 5 meters away. The system includes a servo motor to rotate the sensor, creating a scanning effect similar to radar. A custom GUI displays the detected objects in real-time, showing their distance and position. The design includes provisions for extending the detection range and improving accuracy in future iterations.",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-secondaryDark px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-primaryDark rounded-xl overflow-hidden border border-highlight shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-textColor/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-highlight rounded-md text-xs text-textColor">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={MY_GITHUB_URL} className="text-textColor/80 hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="text-textColor/80 hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-secondaryDark rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-primary">{selectedProject.title}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="text-textColor/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />
              </div>

              <p className="text-textColor mb-6">{selectedProject.details}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-primaryDark rounded-full text-sm border border-highlight">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open(selectedProject.github, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" /> GitHub Repo
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open(selectedProject.demo, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

