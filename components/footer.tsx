"use client"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()

    // Get the target element
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      const navbarHeight = 80 // Approximate navbar height
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-secondaryDark py-12 px-4 sm:px-6 lg:px-8 border-t border-highlight">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Adit<span className="text-primary">Khandelwal</span>
            </h3>
            <p className="text-textColor/80 mb-4 max-w-md">
              Computer Engineering student at NMIMS Mumbai, passionate about building innovative solutions through code
              and engineering principles.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:aditkhandelwal3@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-textColor/80 hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, `#${link.toLowerCase()}`)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-textColor/80">
              <li>Mumbai, Maharashtra</li>
              <li>aditkhandelwal3@gmail.com</li>
              <li>+91 9300382001</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-highlight text-center text-textColor/60">
          <p className="flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-primary mx-1" /> by Adit Khandelwal © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

