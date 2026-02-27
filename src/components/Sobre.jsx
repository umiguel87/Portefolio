import { useLanguage } from '@/contexts/LanguageContext'

export function Sobre() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="border-t py-20 md:py-28" aria-labelledby="sobre-titulo">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <h2 id="sobre-titulo" className="text-muted-foreground mb-2 text-sm font-medium uppercase tracking-wider">
          {t.about.label}
        </h2>
        <p className="text-foreground mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.about.title}
        </p>
        <div className="text-muted-foreground space-y-5 text-lg leading-relaxed">
          <p>{t.about.para1}</p>
          <p>{t.about.para2}</p>
          <p>{t.about.para3}</p>
        </div>

        <div className="mt-10 pt-8 border-t">
          <h3 className="text-muted-foreground mb-3 text-sm font-medium uppercase tracking-wider">
            {t.about.languages}
          </h3>
          <ul className="flex flex-wrap gap-3">
            <li className="rounded-lg border bg-muted/40 px-4 py-2 text-sm font-medium">
              {t.about.langPortuguese}
            </li>
            <li className="rounded-lg border bg-muted/40 px-4 py-2 text-sm font-medium">
              {t.about.langEnglish}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
