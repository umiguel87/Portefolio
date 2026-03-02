import { useState } from 'react'
import { Calendar, Briefcase } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'
import brvrLogo from '@/assets/br_vr.jpeg'
import coreLogo from '@/assets/core.png'

function EstagioLogo({ src }) {
  const [error, setError] = useState(false)
  if (error) return <Briefcase className="text-primary size-8" />
  return <img src={src} alt="" className="size-full object-contain" onError={() => setError(true)} />
}

const estagios = [
  {
    empresa: 'BR&VR Identificação Informática e Serviços, Lda.',
    logo: brvrLogo,
    funcao: 'Estagiário',
    funcaoEn: 'Intern',
    periodo: 'Janeiro 2023 — Março 2023 (3 meses)',
    periodoEn: 'January 2023 — March 2023 (3 months)',
    descricao: 'Durante o meu estágio na BR&VR Identificação Informática e Serviços, Lda., participei na instalação e configuração de hardware e software, o que me permitiu aprofundar conhecimentos técnicos na área de IT. Desenvolvi competências práticas no diagnóstico e resolução de problemas técnicos, bem como na manutenção de equipamentos informáticos, ganhando experiência direta em contexto real de trabalho.',
    descricaoEn: 'During my internship at BR&VR Identificação Informática e Serviços, Lda., I took part in the installation and configuration of hardware and software, which allowed me to deepen my technical knowledge in the IT field. I developed practical skills in diagnosing and solving technical issues, as well as in maintaining computer equipment, gaining direct experience in a real work environment.',
    link: null,
  },
  {
    empresa: 'Core Soluções',
    logo: coreLogo,
    funcao: 'Estagiário',
    funcaoEn: 'Intern',
    periodo: 'Abril 2024 — Junho 2024 (3 meses)',
    periodoEn: 'April 2024 — June 2024 (3 months)',
    descricao: 'Durante o meu estágio na Core Soluções, aprofundei conhecimentos na área de encriptação e desencriptação de dados através da utilização de bibliotecas específicas. Ao longo do período de estágio, consolidei competências em linguagens de programação e ferramentas de desenvolvimento, aplicando esses conhecimentos em projetos práticos e em contexto real de trabalho, o que contribuiu para o meu crescimento técnico e autonomia.',
    descricaoEn: 'During my internship at Core Soluções, I deepened my knowledge in data encryption and decryption using specific libraries. Throughout the internship, I consolidated my skills in programming languages and development tools, applying this knowledge in practical projects and in a real work context, which contributed to my technical growth and autonomy.',
    link: null,
  },
]

export function Estagios() {
  const { t, locale } = useLanguage()
  const isEn = locale === 'en'

  return (
    <section id="estagios" className="border-t bg-muted/20 py-20 md:py-28" aria-labelledby="estagios-titulo">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h2 id="estagios-titulo" className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">
          {t.internships.label}
        </h2>
        <p className="text-foreground mb-12 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.internships.title}
        </p>

        <div className="space-y-8">
          {estagios.map((e, i) => (
            <Card key={`${e.empresa}-${e.periodo}-${i}`} className="overflow-hidden border-l-4 border-l-primary/30 shadow-sm">
              <CardContent className="p-0">
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-muted/50 p-1.5 sm:size-16">
                        {e.logo ? (
                          <EstagioLogo src={e.logo} />
                        ) : (
                          <span className="text-muted-foreground text-xs font-medium">—</span>
                        )}
                      </span>
                      <div>
                        <p className="text-foreground text-lg font-semibold leading-tight">
                          {e.link ? (
                            <a href={e.link} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
                              {e.empresa}
                            </a>
                          ) : (
                            e.empresa
                          )}
                        </p>
                        <p className="text-muted-foreground mt-0.5 text-sm font-medium">
                          {isEn ? e.funcaoEn : e.funcao}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm sm:shrink-0">
                      <Calendar className="size-4" />
                      <span>{isEn ? e.periodoEn : e.periodo}</span>
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
