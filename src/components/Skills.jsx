import { Code2, Layout, Server, Database, Wrench } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'

const skillCategories = [
  {
    key: 'languages',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'PHP', 'C#', 'C', 'C++'],
    icon: Code2,
    accent: 'from-amber-500/20 to-orange-500/10 border-l-amber-500/40',
  },
  {
    key: 'tools',
    ferramentas: ['Git', 'VS Code', 'Figma', 'Postman'],
    tecnologias: ['Docker', 'Capacitor',],
    icon: Wrench,
    accent: 'from-slate-500/20 to-zinc-500/10 border-l-slate-500/40',
  },
  {
    key: 'frontend',
    items: ['React', 'Ionic', 'Angular', 'Next.js'],
    icon: Layout,
    accent: 'from-blue-500/20 to-cyan-500/10 border-l-blue-500/40',
  },
  {
    key: 'backend',
    items: ['Laravel', 'REST APIs', 'JWT Authentication', 'Node.js', 'Express', 'Knex.js'],
    icon: Server,
    accent: 'from-emerald-500/20 to-green-500/10 border-l-emerald-500/40',
  },
  {
    key: 'databases',
    items: ['SQLite', 'MySQL','PostgreSQL'],
    icon: Database,
    accent: 'from-violet-500/20 to-purple-500/10 border-l-violet-500/40',
  },
]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="border-t bg-muted/30 py-20 md:py-28" aria-labelledby="skills-titulo">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-14 text-center md:mb-16">
          <h2 id="skills-titulo" className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">
            {t.skills.label}
          </h2>
          <p className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            {t.skills.title}
          </p>
        </div>

        {/* Linha de cima: Linguagens + Ferramentas e Tecnologias */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mb-6">
          {skillCategories.slice(0, 2).map((cat) => {
            const { key, icon: Icon, accent } = cat
            const isToolsCard = 'ferramentas' in cat && 'tecnologias' in cat
            return (
              <Card
                key={key}
                className={`overflow-hidden border-l-4 bg-gradient-to-br ${accent} shadow-sm transition-all hover:shadow-md`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-background/80 shadow-sm">
                      <Icon className="text-muted-foreground size-5" />
                    </span>
                    <h3 className="text-foreground text-lg font-semibold tracking-tight">
                      {t.skills.categories[key]}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  {isToolsCard ? (
                    <>
                      <div>
                        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">
                          {t.skills.ferramentas}
                        </h4>
                        <ul className="flex flex-wrap gap-2">
                          {cat.ferramentas.map((skill, i) => (
                            <li
                              key={`${key}-ferramentas-${skill}-${i}`}
                              className="rounded-md border border-border/80 bg-background/90 px-3.5 py-2 text-sm font-medium shadow-sm transition-colors hover:border-foreground/15 hover:bg-background"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">
                          {t.skills.tecnologias}
                        </h4>
                        <ul className="flex flex-wrap gap-2">
                          {cat.tecnologias.map((skill, i) => (
                            <li
                              key={`${key}-tecnologias-${skill}-${i}`}
                              className="rounded-md border border-border/80 bg-background/90 px-3.5 py-2 text-sm font-medium shadow-sm transition-colors hover:border-foreground/15 hover:bg-background"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <ul className="flex flex-wrap gap-2">
                      {(cat.items || []).map((skill, i) => (
                        <li
                          key={`${key}-${skill}-${i}`}
                          className="rounded-md border border-border/80 bg-background/90 px-3.5 py-2 text-sm font-medium shadow-sm transition-colors hover:border-foreground/15 hover:bg-background"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Linha de baixo: Frontend, Backend, Bases de dados */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
          {skillCategories.slice(2).map((cat) => {
            const { key, icon: Icon, accent } = cat
            const isToolsCard = 'ferramentas' in cat && 'tecnologias' in cat
            return (
              <Card
                key={key}
                className={`overflow-hidden border-l-4 bg-gradient-to-br ${accent} shadow-sm transition-all hover:shadow-md`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-background/80 shadow-sm">
                      <Icon className="text-muted-foreground size-5" />
                    </span>
                    <h3 className="text-foreground text-lg font-semibold tracking-tight">
                      {t.skills.categories[key]}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-4">
                  {isToolsCard ? (
                    <>
                      <div>
                        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">
                          {t.skills.ferramentas}
                        </h4>
                        <ul className="flex flex-wrap gap-2">
                          {cat.ferramentas.map((skill, i) => (
                            <li
                              key={`${key}-ferramentas-${skill}-${i}`}
                              className="rounded-md border border-border/80 bg-background/90 px-3.5 py-2 text-sm font-medium shadow-sm transition-colors hover:border-foreground/15 hover:bg-background"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-muted-foreground mb-2 text-xs font-medium uppercase tracking-wider">
                          {t.skills.tecnologias}
                        </h4>
                        <ul className="flex flex-wrap gap-2">
                          {cat.tecnologias.map((skill, i) => (
                            <li
                              key={`${key}-tecnologias-${skill}-${i}`}
                              className="rounded-md border border-border/80 bg-background/90 px-3.5 py-2 text-sm font-medium shadow-sm transition-colors hover:border-foreground/15 hover:bg-background"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <ul className="flex flex-wrap gap-2">
                      {(cat.items || []).map((skill, i) => (
                        <li
                          key={`${key}-${skill}-${i}`}
                          className="rounded-md border border-border/80 bg-background/90 px-3.5 py-2 text-sm font-medium shadow-sm transition-colors hover:border-foreground/15 hover:bg-background"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
