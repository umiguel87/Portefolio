import { Button } from '@/components/ui/button'
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Contacto() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="border-t py-20 md:py-28" aria-labelledby="contacto-titulo">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-8">
        <h2 id="contacto-titulo" className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">
          {t.contact.label}
        </h2>
        <p className="text-foreground mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.contact.title}
        </p>
        <p className="text-muted-foreground mb-4 text-lg">
          {t.contact.intro}
        </p>
        <p className="text-foreground mb-10 inline-flex items-center gap-2 rounded-full border bg-primary/5 px-4 py-2 text-sm font-medium">
          <span className="size-2 rounded-full bg-green-500" aria-hidden />
          {t.contact.openToWork}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:miguelprogramador87@gmail.com">
              <Mail className="size-4" />
              {t.contact.sendEmail}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href={`${import.meta.env.BASE_URL}cv.pdf`} download="CV_Miguel_Rodrigues.pdf">
              <Download className="size-4" />
              {t.contact.downloadCv}
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="https://github.com/umiguel87" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="https://www.linkedin.com/in/miguel-rodrigues-8a1068292/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
