import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="hero-bg flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-muted-foreground hero-fade mb-3 text-sm font-medium uppercase tracking-[0.2em]">
        {t.hero.greeting}
      </p>
      <h1 className="hero-fade hero-delay-1 mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        Miguel Rodrigues
      </h1>
      <p className="text-muted-foreground hero-fade hero-delay-2 mb-3 max-w-xl text-lg leading-relaxed sm:text-xl">
        {t.hero.tagline}
      </p>
      <p className="text-muted-foreground/80 hero-fade hero-delay-3 mb-10 text-sm font-medium sm:text-base">
        {t.hero.keywords}
      </p>
      <div className="hero-fade hero-delay-4 flex flex-wrap justify-center gap-4">
        <Button size="lg" className="gap-2" asChild>
          <a href="#projetos">
            {t.hero.viewProjects}
            <ArrowDown className="size-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="gap-2" asChild>
          <a href={`${import.meta.env.BASE_URL}cv.pdf`} download="CV_Miguel_Rodrigues.pdf">
            <Download className="size-4" />
            {t.hero.downloadCv}
          </a>
        </Button>
        <Button size="lg" variant="outline" className="gap-2" asChild>
          <a href="#contacto">
            <Mail className="size-4" />
            {t.hero.contact}
          </a>
        </Button>
      </div>
      <a
        href="#sobre"
        className="text-muted-foreground/60 hero-fade hero-delay-5 mt-16 flex flex-col items-center gap-2 text-xs font-medium transition-colors hover:text-foreground"
        aria-label={t.hero.scrollDown}
      >
        <span className="rounded-full border border-current p-2">
          <ArrowDown className="size-4" />
        </span>
        {t.hero.scrollHint}
      </a>
    </section>
  )
}
