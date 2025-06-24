"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="relative inline-block">
              <img
                src="/pro.png"
                alt="Photo de profil"
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20 animate-spin-slow"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp">
            Bonjour, je suis{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Omar Dahdouh
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto animate-fadeInUp delay-300">
            Développeur Full Stack passionné par la création d'expériences web modernes et innovantes
          </p>

          <div className="flex justify-center space-x-6 mb-8 animate-fadeInUp delay-500">
            {[
              { icon: Github, href: "https://github.com/Omarusski777", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:votre.email@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white/20 group"
              >
                <Icon size={24} className="text-white group-hover:text-purple-300 transition-colors" />
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("projets")}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeInUp delay-700"
          >
            Découvrir mes projets
          </button>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-white/60" size={32} />
          </div>
        </div>
      </div>
    </section>
  )
}
