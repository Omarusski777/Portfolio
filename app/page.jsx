"use client"

import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
