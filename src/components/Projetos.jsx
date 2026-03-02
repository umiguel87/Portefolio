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
import imagemNexum from '@/assets/Nexum.png'

const projetos = [
  {
    titulo: 'Nexum',
    descricao: 'O Nexum é uma aplicação móvel e web para gestão de projetos, tarefas e categorias. A aplicação permite aos utilizadores organizar o trabalho em categorias, criar projetos associados a essas categorias e gerir tarefas com prioridades e datas-limite.',
    descricaoEn: 'Nexum is a mobile and web app for managing projects, tasks and categories. Users can organise work into categories, create projects within those categories and manage tasks with priorities and deadlines.',
    imagem: imagemNexum,
    imagemContain: true,
    link: '',
    tags: ['Ionic', 'Angular', 'Capacitor', 'SQLite'],
  },
]

export function Projetos() {
  const { t, locale } = useLanguage()

  return (
    <section id="projetos" className="border-t py-20 md:py-28" aria-labelledby="projetos-titulo">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <h2 id="projetos-titulo" className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">
          {t.projects.label}
        </h2>
        <p className="text-foreground mb-12 text-2xl font-semibold tracking-tight sm:text-3xl text-center">
          {t.projects.title}
        </p>

        {projetos.length === 1 ? (
          /* Um único projeto: card centrado e em destaque */
          (() => {
            const p = projetos[0]
            return (
              <div className="mx-auto max-w-2xl">
                <Card className="group overflow-hidden transition-shadow hover:shadow-xl">
                  <a href={p.link || '#'} target="_blank" rel="noreferrer" className="block">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted sm:aspect-[16/9]">
                      {p.imagem ? (
                        <img
                          src={p.imagem}
                          alt={`${t.projects.screenshot} ${p.titulo}`}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-muted-foreground/50 text-sm">
                          {t.projects.noImage}
                        </div>
                      )}
                    </div>
                  </a>
                  <CardHeader className="text-center pb-2 pt-6">
                    <CardTitle className="flex flex-wrap justify-center items-center gap-2 text-xl sm:text-2xl">
                      {p.titulo}
                      {p.link && (
                        <ArrowUpRight className="size-5 shrink-0 opacity-70 group-hover:opacity-100 inline-block ml-1" />
                      )}
                    </CardTitle>
                    <CardDescription className="text-center text-base leading-relaxed max-w-xl mx-auto">
                      {locale === 'en' && p.descricaoEn ? p.descricaoEn : p.descricao}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap justify-center gap-2">
                      {p.tags.map((tag, i) => (
                        <span
                          key={`${p.titulo}-${tag}-${i}`}
                          className="rounded-lg border bg-muted/60 px-3 py-1.5 text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {p.colaborador && (
                      <div className="rounded-xl border bg-muted/40 p-4 text-center">
                        <div className="mb-1.5 flex items-center justify-center gap-2 text-muted-foreground">
                          <UserPlus className="size-4" />
                          <span className="text-xs font-medium uppercase tracking-wider">
                            {t.projects.collaborator}
                          </span>
                        </div>
                        <p className="text-foreground font-semibold">{p.colaborador.nome}</p>
                        <div className="mt-2 flex flex-wrap justify-center gap-2">
                          {p.colaborador.linkedin && (
                            <a
                              href={p.colaborador.linkedin}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-background px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-muted"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="size-4" />
                              LinkedIn
                            </a>
                          )}
                          {p.colaborador.github && (
                            <a
                              href={p.colaborador.github}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-lg bg-background px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-muted"
                              aria-label="GitHub"
                            >
                              <Github className="size-4" />
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-center pt-2 pb-6">
                    {p.link && (
                      <Button asChild>
                        <a href={p.link} target="_blank" rel="noreferrer" className="gap-2">
                          {t.projects.viewProject}
                          <ArrowUpRight className="size-4" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </div>
            )
          })()
        ) : (
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
                      <p className="text-foreground mb-2 text-sm font-semibold">{p.colaborador.nome}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.colaborador.linkedin && (
                          <a href={p.colaborador.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md bg-background px-2 py-1 text-xs font-medium shadow-sm hover:bg-muted" aria-label="LinkedIn">
                            <Linkedin className="size-3.5" /> LinkedIn
                          </a>
                        )}
                        {p.colaborador.github && (
                          <a href={p.colaborador.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md bg-background px-2 py-1 text-xs font-medium shadow-sm hover:bg-muted" aria-label="GitHub">
                            <Github className="size-3.5" /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, i) => (
                      <span key={`${p.titulo}-${tag}-${i}`} className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto" asChild>
                    <a href={p.link} target="_blank" rel="noreferrer">{t.projects.viewProject}</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
