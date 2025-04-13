import About from "@/components/about"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import { Contact } from "lucide-react"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="inicio" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="sobre" className="scroll-mt-16">
        <About />
      </section>
      <section id="servicos" className="scroll-mt-16">
        <Services />
      </section>
      <section id="contato" className="scroll-mt-16">
        <Contact />
      </section>
    </main>
  )
}
