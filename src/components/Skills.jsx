import { Code2, Layout, Server, Database } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'

const skillCategories = [
  {
    key: 'languages',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
    icon: Code2,
    accent: 'from-amber-500/20 to-orange-500/10 border-l-amber-500/40',
  },
  {
    key: 'frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    icon: Layout,
    accent: 'from-blue-500/20 to-cyan-500/10 border-l-blue-500/40',
  },
  {
    key: 'backend',
    items: ['Node.js', 'Express', 'REST APIs'],
    icon: Server,
    accent: 'from-emerald-500/20 to-green-500/10 border-l-emerald-500/40',
  },
  {
    key: 'databases',
    items: ['PostgreSQL', 'MongoDB', 'SQLite'],
    icon: Database,
    accent: 'from-violet-500/20 to-purple-500/10 border-l-violet-500/40',
  },
]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="border-t bg-muted/30 py-20 md:py-28" aria-labelledby="skills-titulo">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mb-14 text-center md:mb-16">
          <h2 id="skills-titulo" className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">
            {t.skills.label}
          </h2>
          <p className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            {t.skills.title}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map(({ key, items, icon: Icon, accent }) => (
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
              <CardContent className="pt-0">
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border/80 bg-background/90 px-3.5 py-2 text-sm font-medium shadow-sm transition-colors hover:border-foreground/15 hover:bg-background"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
