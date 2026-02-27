import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useLanguage } from '@/contexts/LanguageContext'

export function Header() {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#sobre', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#estagios', label: t.nav.internships },
    { href: '#projetos', label: t.nav.projects },
    { href: '#contacto', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-tight">
          {t.header.logo}
        </a>

        <div className="flex items-center gap-2">
          {/* Desktop nav */}
          <ul className="max-md:hidden flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground" asChild>
                  <a href={href}>{label}</a>
                </Button>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label={t.header.openMenu}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>{t.header.menu}</SheetTitle>
              </SheetHeader>
              <ul className="mt-6 flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-base"
                      asChild
                    >
                      <a href={href} onClick={() => setOpen(false)}>{label}</a>
                    </Button>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>

          {/* Language switcher — à direita */}
          <div className="flex rounded-lg border p-0.5" role="group" aria-label="Idioma / Language">
            <button
              type="button"
              onClick={() => setLocale('pt')}
              className={`rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
                locale === 'pt'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              PT
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
                locale === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
