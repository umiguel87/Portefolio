import { Briefcase } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'

const estagios = [
  {
    empresa: 'Nome da empresa',
    funcao: 'Estagiário de desenvolvimento web',
    periodo: 'Jan 2024 — Jun 2024',
    descricao: 'Breve descrição das tuas funções, tecnologias usadas e o que aprendeste. Podes usar 2–3 frases.',
    link: null, // opcional: 'https://empresa.com'
  },
  // Adiciona mais estágios abaixo, no mesmo formato
]

export function Estagios() {
  const { t } = useLanguage()

  return (
    <section id="estagios" className="border-t py-20 md:py-28" aria-labelledby="estagios-titulo">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <h2 id="estagios-titulo" className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">
          {t.internships.label}
        </h2>
        <p className="text-foreground mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.internships.title}
        </p>

        <div className="space-y-6">
          {estagios.map((e) => (
            <Card key={e.empresa + e.periodo} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <Briefcase className="text-muted-foreground size-5" />
                  </span>
                  <div>
                    <p className="text-foreground font-semibold">
                      {e.funcao}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {t.internships.at}{' '}
                      {e.link ? (
                        <a
                          href={e.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-foreground underline-offset-2 hover:underline"
                        >
                          {e.empresa}
                        </a>
                      ) : (
                        e.empresa
                      )}
                    </p>
                    <p className="text-muted-foreground mt-1 text-xs">
                      {e.periodo}
                    </p>
                  </div>
                </div>
              </CardHeader>
              {e.descricao && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {e.descricao}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
