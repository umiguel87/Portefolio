import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Sobre } from '@/components/Sobre'
import { Skills } from '@/components/Skills'
import { Estagios } from '@/components/Estagios'
import { Projetos } from '@/components/Projetos'
import { Contacto } from '@/components/Contacto'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <Skills />
        <Estagios />
        <Projetos />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
