"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mon Portfolio
            </h3>
            <p className="text-white/80 leading-relaxed">
              Développeur passionné créant des expériences web modernes et innovantes avec les dernières technologies.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:votre.email@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "#accueil" },
                { name: "À propos", href: "#a-propos" },
                { name: "Projets", href: "#projets" },
                { name: "Contact", href: "#contact" },
              ].map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 transform inline-block relative group"
                  >
                    {name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-white/80">
              <p className="hover:text-white transition-colors">dahdouh.omar1997@gmail.com</p>
              <p className="hover:text-white transition-colors">+212 6 91 08 27 38</p>
              <p className="hover:text-white transition-colors">Tetouan, Maroc</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 flex items-center space-x-2 mb-4 md:mb-0">
            <span>© 2024 Mon Portfolio. Fait avec</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>et React.js</span>
          </p>

          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
