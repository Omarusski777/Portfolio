"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Palette, Smartphone, Globe, Zap, Heart } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      icon: <Code size={32} />,
      title: "Développement Frontend",
      description: "React, Vue.js, JavaScript, HTML5, CSS3",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe size={32} />,
      title: "Développement Backend",
      description: "Node.js, Python, PHP, Bases de données",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: <Palette size={32} />,
      title: "Design UI/UX",
      description: "Figma, Adobe XD, Design responsive",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile",
      description: "React Native, Applications mobiles",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="a-propos"
      className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100/50 to-pink-100/50"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Passionné par le développement web depuis plusieurs années, je crée des solutions digitales innovantes qui
            allient performance technique et expérience utilisateur exceptionnelle.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Heart className="text-red-500 mr-3" size={32} />
              Mon parcours
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
                Fort de 3 années d'expérience dans le développement web, j'ai eu l'opportunité de travailler sur des
                projets variés, allant de sites vitrines aux applications web complexes.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
                Ma passion pour les nouvelles technologies me pousse à me former continuellement et à rester à la pointe
                des dernières tendances du développement web.
              </p>
              <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors">
                J'aime relever de nouveaux défis et collaborer avec des équipes créatives pour donner vie à des projets
                ambitieux.
              </p>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <Zap className="text-yellow-500" size={24} />
              <span className="text-gray-700 font-semibold">Toujours prêt pour de nouveaux défis !</span>
            </div>
          </div>
          <div className="relative">
            <img
              src="/pro.png"
              alt="À propos"
              className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-white"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-2xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div
                className={`text-white mb-4 flex justify-center p-4 rounded-xl bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}
              >
                {skill.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                {skill.title}
              </h4>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
