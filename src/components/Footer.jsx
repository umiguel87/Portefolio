import { useLanguage } from '@/contexts/LanguageContext'

export function Footer() {
  const { locale, t } = useLanguage()
  const year = new Date().getFullYear()
  const portfolioLabel = locale === 'pt' ? 'Portefólio' : 'Portfolio'

  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-8">
        <div className="text-muted-foreground text-center text-sm sm:text-left">
          <p>© {year} {portfolioLabel}. {t.footer.madeBy}</p>
          <p className="mt-0.5">{t.footer.madeWith}</p>
        </div>
        <a
          href="#hero"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          {t.footer.backToTop}
        </a>
      </div>
    </footer>
  )
}
