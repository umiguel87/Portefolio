import { ArrowUpRight, UserPlus, Linkedin, Github } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import imagemDomu from '@/assets/domu.png'
import imagemNexum from '@/assets/Nexum.png'

const projetos = [
]

export function Projetos() {
  const { t, locale } = useLanguage()

  return (
    <section id="projetos" className="border-t py-20 md:py-28" aria-labelledby="projetos-titulo">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <h2 id="projetos-titulo" className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">
          {t.projects.label}
        </h2>
        <p className="text-foreground mb-12 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.projects.title}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetos.map((p) => (
            <Card
              key={p.titulo}
              className="group flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
            >
              <a href={p.link} target="_blank" rel="noreferrer" className="block">
                <div className={`relative aspect-video w-full flex items-center justify-center ${p.imagemContain ? 'bg-muted p-1.5' : 'bg-muted'}`}>
                  {p.imagem ? (
                    <img
                      src={p.imagem}
                      alt={`${t.projects.screenshot} ${p.titulo}`}
                      className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${p.imagemContain ? 'object-contain object-center' : 'object-cover'}`}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground/50 text-sm">
                      {t.projects.noImage}
                    </div>
                  )}
                </div>
              </a>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between gap-2 text-lg">
                  {p.titulo}
                  <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </CardTitle>
                <CardDescription>{locale === 'en' && p.descricaoEn ? p.descricaoEn : p.descricao}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                {p.colaborador && (
                  <div className="rounded-lg border bg-muted/50 px-3 py-2.5">
                    <div className="mb-1.5 flex items-center gap-1.5 text-muted-foreground">
                      <UserPlus className="size-3.5" />
                      <span className="text-xs font-medium uppercase tracking-wider">
                        {t.projects.collaborator}
                      </span>
                    </div>
                    <p className="text-foreground mb-2 text-sm font-semibold">
                      {p.colaborador.nome}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.colaborador.linkedin && (
                        <a
                          href={p.colaborador.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-md bg-background px-2 py-1 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="size-3.5" />
                          LinkedIn
                        </a>
                      )}
                      {p.colaborador.github && (
                        <a
                          href={p.colaborador.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-md bg-background px-2 py-1 text-xs font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
                          aria-label="GitHub"
                        >
                          <Github className="size-3.5" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag, i) => (
                    <span
                      key={`${p.titulo}-${tag}-${i}`}
                      className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                  <a href={p.link} target="_blank" rel="noreferrer">
                    {t.projects.viewProject}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
