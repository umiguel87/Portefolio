import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/translations'

const STORAGE_KEY = 'portefolio-lang'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return 'pt'
    return window.localStorage.getItem(STORAGE_KEY) || 'pt'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale === 'pt' ? 'pt' : 'en'
  }, [locale])

  const setLocale = (lang) => {
    if (lang === 'pt' || lang === 'en') setLocaleState(lang)
  }

  const t = translations[locale] || translations.pt

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
