import { Button } from '@/components/ui/button'
import { ArrowDown, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="hero-bg flex min-h-[85vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-muted-foreground mb-3 text-sm font-medium uppercase tracking-[0.2em]">
        {t.hero.greeting}
      </p>
      <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Luís Rodrigues
      </h1>
      <p className="text-muted-foreground mb-10 max-w-xl text-lg leading-relaxed sm:text-xl">
        {t.hero.tagline}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="gap-2" asChild>
          <a href="#projetos">
            {t.hero.viewProjects}
            <ArrowDown className="size-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="gap-2" asChild>
          <a href="#contacto">
            <Mail className="size-4" />
            {t.hero.contact}
          </a>
        </Button>
      </div>
    </section>
  )
}
