"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, Star } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
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

  const projects = [
    {
      title: "Projet E-commerce",
      description: "Une plateforme e-commerce moderne avec panier, paiement et gestion des commandes.",
      image: "/E-com.jpg",
      technologies: ["hTML", "Node.js", "MongoDB", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Système de Gestion des Guichets Automatiques (ATM) ",
      description: "Mon projet ATM en langage C est un système complet de gestion des guichets automatiques. Il permet aux utilisateurs de gérer leurs transactions bancaires, notamment les retraits, dépôts, virements et consultations de solde, tout en garantissant une sécurité avancée. ",
      image: "/Atm.jpg",
      technologies: ["Langage C"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Site Portfolio",
      description: "Site portfolio responsive pour un Developpeur avec galerie interactive.",
      image: "/portfolio.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Dental Cabinet Management System",
      description: "Le système de gestion de cabinet dentaire est un logiciel développé en Visual Basic .NET pour aider à gérer les opérations courantes d'une cabinet dentaire. Il facilite la gestion des rendez-vous, des dossiers des patients, des traitements et de la facturation, tout en offrant une interface conviviale.",
      image: "/cabdtr.png",
      technologies: ["Visual Basic .NET", "SQL Server", "Windows Forms", "Crystal Reports"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Système de Gestion pour Cabinet d'Opticien",
      description: "Mon projet de gestion de cabinet optique en PHP est une application web complète qui permet de gérer les données des patients, les consultations, et les commandes de lunettes. Il facilite également le suivi des paiements et la gestion des factures avec une interface simple et intuitive.",
      image: "/opt.png",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Application de Gestion des Missions Éducatives (Edutasker)",
      description: "Le système de gestion des missions éducatives est une plateforme PHP qui permet de gérer les différentes entités du système éducatif. Vous pouvez ajouter, supprimer, et gérer des professeurs, des écoles, des devoirs, des examens, des étudiants, des groupes, et même gérer les paiements associés. L'interface est simple, intuitive, et permet de suivre les missions éducatives de manière efficace..",
      image: "/Edutasker.png",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Gestionnaire de mots de passe en Java",
      description: "Le gestionnaire de mots de passe en Java est un logiciel qui permet de gérer les mots de passe de manière sécurisée. Il permet de stocker, de gérer et de partager des mots de passe de manière efficace et sécurisée.",
      image: "/pass.png",
      technologies: ["Java", "MySQL", "JavaFX", "Java Swing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "StockMaster - Gestion de Stock",
      description: "StockMaster est une application de gestion de stock en C# qui permet de gérer les stocks, les commandes et les fournisseurs. Il permet également de gérer les clients et les fournisseurs.",
      image: "/Gs.png",
      technologies: ["C#", "MySQL", "Windows Forms", "Crystal Reports"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Application de Chat en Temps Réel (PyTalk)",
      description: "Messagerie instantanée avec notifications push et partage de fichiers.",
      image: "/Pytalk.png",
      technologies: ["Python", "MySQL", "Socket.io", "flask", "Node.js", "Tailwind CSS", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Application Desktop Jobfinder",
      description: "Application pour gérer les offres d'emploi et de stages, les candidats et les entreprises. Il permet également de gérer les candidatures et les entretiens.",
      image: "/jobfinder.png",
      technologies: ["Laravel", "Node.js", "MySQL", "Bootstrap", "Tailwind CSS", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const techColors = {
    React: "bg-cyan-100 text-cyan-800",
    "Node.js": "bg-green-100 text-green-800",
    MongoDB: "bg-emerald-100 text-emerald-800",
    Stripe: "bg-purple-100 text-purple-800",
    "Vue.js": "bg-teal-100 text-teal-800",
    Laravel: "bg-red-100 text-red-800",
    MySQL: "bg-orange-100 text-orange-800",
    "Chart.js": "bg-yellow-100 text-yellow-800",
    HTML5: "bg-orange-100 text-orange-800",
    CSS3: "bg-blue-100 text-blue-800",
    JavaScript: "bg-yellow-100 text-yellow-800",
    GSAP: "bg-green-100 text-green-800",
    "React Native": "bg-cyan-100 text-cyan-800",
    Firebase: "bg-orange-100 text-orange-800",
    "Maps API": "bg-red-100 text-red-800",
    "Express.js": "bg-gray-100 text-gray-800",
    PostgreSQL: "bg-blue-100 text-blue-800",
    "Socket.io": "bg-purple-100 text-purple-800",
    "PayPal API": "bg-blue-100 text-blue-800",
    Angular: "bg-red-100 text-red-800",
    Python: "bg-yellow-100 text-yellow-800",
    Django: "bg-green-100 text-green-800",
    "AWS S3": "bg-orange-100 text-orange-800",
    Bootstrap: "bg-purple-100 text-purple-800",
  }

  return (
    <section
      ref={sectionRef}
      id="projets"
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations récentes, chacune représentant un défi technique unique et une
            solution innovante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star size={14} />
                  <span>Featured</span>
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-48 object-cover transition-transform duration-700 ${hoveredProject === index ? "scale-110" : "scale-100"}`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${hoveredProject === index ? "opacity-100" : "opacity-0"}`}
                ></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 group-hover:text-white transition-colors">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 hover:scale-110 ${techColors[tech] || "bg-gray-100 text-gray-800"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    <span>Voir le projet</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
