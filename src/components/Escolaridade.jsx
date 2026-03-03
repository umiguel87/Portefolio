import { useState } from 'react'
import { Calendar, GraduationCap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'
import logoIpvc from '@/assets/ipvc.jpeg'
import logoSanches from '@/assets/sanches.jpeg'

function EscolaLogo({ src }) {
  const [error, setError] = useState(false)
  if (error) return <GraduationCap className="text-primary size-8" />
  return <img src={src} alt="" className="size-full object-contain" onError={() => setError(true)} />
}

const escolaridade = [
  {
    instituicao: 'IPVC - Instituto Politécnico de Viana do Castelo',
    instituicaoEn: 'IPVC - Polytechnic Institute of Viana do Castelo',
    curso: 'CTESP em Tecnologia de Sistemas de Informação',
    cursoEn: 'Higher Professional Technical Course in Information Systems Technology and Programming',
    periodo: '2024 — 2026',
    periodoEn: '2024 — 2026',
    descricao: 'Curso Técnico Superior Profissional, nível 5 do QNQ. Formação orientada para a prática e para o mercado de trabalho.',
    descricaoEn: 'Short-cycle higher education (level 5 EQF). Practice-oriented training for the job market. Includes work-based learning (Internship).',
    logo: logoIpvc,
    link: null,
  },
  {
    instituicao: 'Agrupamento de Escolas D. Afonso Sanches',
    instituicaoEn: 'D. Afonso Sanches School Group, Vila do Conde',
    curso: 'Curso Profissional de Gestão e Programação de Sistemas Informáticos',
    cursoEn: 'Professional Course in Management and Programming of Information Systems',
    periodo: '2021 — 2024',
    periodoEn: '2021 — 2024',
    descricao: 'Curso profissional de nível secundário na área de informática. Inclui formação em contexto de trabalho (Estágio).',
    descricaoEn: 'Upper secondary vocational course in computing. Includes work-based learning (Internship).',
    logo: logoSanches,
    link: null,
  },
]

export function Escolaridade() {
  const { t, locale } = useLanguage()
  const isEn = locale === 'en'

  return (
    <section id="escolaridade" className="border-t bg-muted/10 py-20 md:py-28" aria-labelledby="escolaridade-titulo">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h2 id="escolaridade-titulo" className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">
          {t.education.label}
        </h2>
        <p className="text-foreground mb-12 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.education.title}
        </p>

        <div className="space-y-8">
          {escolaridade.map((e, i) => (
            <Card key={`${e.instituicao}-${e.periodo}-${i}`} className="overflow-hidden border-l-4 border-l-primary/30 shadow-sm">
              <CardContent className="p-0">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-muted/50 p-1.5 sm:size-16">
                        {e.logo ? (
                          <EscolaLogo src={e.logo} />
                        ) : (
                          <GraduationCap className="text-primary size-8" />
                        )}
                      </span>
                      <div>
                        <p className="text-foreground text-lg font-semibold leading-tight">
                          {e.link ? (
                            <a href={e.link} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
                              {isEn && e.instituicaoEn ? e.instituicaoEn : e.instituicao}
                            </a>
                          ) : (
                            isEn && e.instituicaoEn ? e.instituicaoEn : e.instituicao
                          )}
                        </p>
                        <p className="text-muted-foreground mt-0.5 text-sm font-medium">
                          {isEn && e.cursoEn ? e.cursoEn : e.curso}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm sm:shrink-0">
                      <Calendar className="size-4" />
                      <span>{isEn && e.periodoEn ? e.periodoEn : e.periodo}</span>
                    </div>
                  </div>
                  {(e.descricao || e.descricaoEn) && (
                    <p className="text-muted-foreground mt-6 border-t pt-6 text-sm leading-relaxed">
                      {isEn ? e.descricaoEn : e.descricao}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
