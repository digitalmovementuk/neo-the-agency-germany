import { useEffect, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'
import { Link, NavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import logoBlue from './assets/images/neo-logo-blue.png'
import logoGrey from './assets/images/neo-logo-grey.png'
import {
  caseStudies,
  companyFacts,
  geoServicePages,
  homeFaqs,
  legalPages,
  publishedContact,
  servicePages,
  siteUrl,
  trustMetrics,
  type FaqItem,
  type LegalPage,
  type Metric,
  type ServicePage,
} from './data/site'

type SeoConfig = {
  title: string
  description: string
  schema: Record<string, unknown>
}

const navigationLinks = [
  { to: '/', label: 'Home' },
  ...servicePages.map((service) => ({ to: `/${service.slug}`, label: service.navLabel })),
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Kontakt' },
]

const utilityLinks = [{ to: '/sitemap', label: 'Sitemap' }]

const sitemapGroups = [
  {
    title: 'Hauptseiten',
    intro: 'Die wichtigsten Einstiegsseiten für Home, Services, Kontakt und Unternehmenskontext.',
    links: [
      { to: '/', label: 'Home' },
      ...servicePages.map((service) => ({ to: `/${service.slug}`, label: service.pageLabel })),
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Kontakt' },
    ],
  },
  {
    title: 'Standortseiten',
    intro: 'Tier-1-Geo-Seiten für Rhein-Ruhr mit direkter Zuordnung zu den Service-Mastern.',
    links: geoServicePages.map((service) => ({
      to: `/${service.slug}`,
      label: service.pageLabel,
    })),
  },
  {
    title: 'Recht und Utility',
    intro: 'Pflichtseiten und technische Übersicht für die veröffentlichte Deutschland-Version.',
    links: [
      { to: '/sitemap', label: 'Sitemap' },
      ...legalPages.map((page) => ({ to: `/${page.slug}`, label: page.label })),
    ],
  },
]

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutPage seo={buildHomeSeo()}>
            <HomePage />
          </LayoutPage>
        }
      />
      {servicePages.map((service) => (
        <Route
          key={service.slug}
          path={`/${service.slug}`}
          element={
            <LayoutPage seo={buildServiceSeo(service)}>
              <ServiceDetailPage service={service} />
            </LayoutPage>
          }
        />
      ))}
      {geoServicePages.map((service) => (
        <Route
          key={service.slug}
          path={`/${service.slug}`}
          element={
            <LayoutPage seo={buildServiceSeo(service)}>
              <ServiceDetailPage service={service} />
            </LayoutPage>
          }
        />
      ))}
      <Route path="/webentwicklung-agentur" element={<Navigate replace to="/webdesign-agentur" />} />
      <Route
        path="/about"
        element={
          <LayoutPage seo={buildAboutSeo()}>
            <AboutPage />
          </LayoutPage>
        }
      />
      <Route
        path="/contact"
        element={
          <LayoutPage seo={buildContactSeo()}>
            <ContactPage />
          </LayoutPage>
        }
      />
      <Route
        path="/sitemap"
        element={
          <LayoutPage seo={buildSitemapSeo()}>
            <SitemapPage />
          </LayoutPage>
        }
      />
      {legalPages.map((page) => (
        <Route
          key={page.slug}
          path={`/${page.slug}`}
          element={
            <LayoutPage seo={buildLegalSeo(page)}>
              <LegalPageView page={page} />
            </LayoutPage>
          }
        />
      ))}
      <Route
        path="*"
        element={
          <LayoutPage seo={build404Seo()}>
            <NotFoundPage />
          </LayoutPage>
        }
      />
    </Routes>
  )
}

function LayoutPage({ children, seo }: { children: ReactNode; seo: SeoConfig }) {
  const location = useLocation()
  const footerRef = useRef<HTMLElement | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showStickyCta, setShowStickyCta] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)
  const isLegalPage =
    location.pathname.startsWith('/datenschutz') ||
    location.pathname.startsWith('/impressum') ||
    location.pathname.startsWith('/nutzungsbedingungen')

  useEffect(() => {
    window.scrollTo({ top: 0 })
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28)
      setShowStickyCta(window.scrollY > Math.max(window.innerHeight * 0.55, 360))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!footerRef.current) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting)
      },
      { threshold: 0.18 },
    )

    observer.observe(footerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <div className="min-h-screen bg-ink text-white">
      <SeoHead config={seo} />
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Header
        menuOpen={menuOpen}
        scrolled={scrolled}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={() => setMenuOpen(false)}
      />
      <AnimatePresence>
        {menuOpen ? <MobileMenu onClose={() => setMenuOpen(false)} /> : null}
      </AnimatePresence>
      <main id="content">{children}</main>
      <Footer footerRef={footerRef} />
      {!isLegalPage && showStickyCta && !footerVisible ? <BottomStickyCta /> : null}
      {!footerVisible ? <FloatingContactButton /> : null}
      <CookieBanner />
    </div>
  )
}

function Header({
  menuOpen,
  scrolled,
  onToggleMenu,
  onCloseMenu,
}: {
  menuOpen: boolean
  scrolled: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
}) {
  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-[rgba(6,16,31,0.84)] backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={onCloseMenu}>
          <img src={logoBlue} alt="NEO THE AGENCY" className="h-8 w-auto sm:h-10" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ActionLink href="/contact" variant="secondary">
            Kontakt
          </ActionLink>
          <ActionLink href={publishedContact.officialContact} variant="primary" external>
            Offizielle Anfrage
          </ActionLink>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-white/35 hover:bg-white/10 lg:hidden"
          onClick={onToggleMenu}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="relative block h-4 w-5">
            <span className="absolute left-0 top-0 h-0.5 w-5 bg-white" />
            <span className="absolute left-0 top-[7px] h-0.5 w-5 bg-white" />
            <span className="absolute bottom-0 left-0 h-0.5 w-5 bg-white" />
          </span>
        </button>
      </div>
    </header>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-[rgba(6,16,31,0.86)] px-6 pb-8 pt-24 backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto flex max-w-md flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-panel">
        {navigationLinks.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              clsx(
                'rounded-2xl border px-4 py-3 text-lg font-medium transition',
                isActive
                  ? 'border-cobalt bg-cobalt text-white'
                  : 'border-white/10 bg-white/5 text-white/80 hover:border-white/30 hover:text-white',
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
        <a
          href={publishedContact.officialContact}
          target="_blank"
          rel="noreferrer"
          className="button-primary mt-2 text-center"
          onClick={onClose}
        >
          Offizielle Anfrage
        </a>
      </div>
    </motion.div>
  )
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'text-sm font-medium uppercase tracking-[0.22em] transition',
          isActive ? 'text-white' : 'text-white/64 hover:text-white',
        )
      }
    >
      {label}
    </NavLink>
  )
}

function Footer({ footerRef }: { footerRef: React.RefObject<HTMLElement | null> }) {
  return (
    <footer ref={footerRef} className="relative overflow-hidden border-t border-white/10 bg-[#040915]">
      <div className="absolute inset-0 bg-grid-shell bg-[size:48px_48px] opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.25fr_0.8fr_0.8fr] lg:px-10">
        <div className="space-y-5">
          <img src={logoGrey} alt="NEO THE AGENCY" className="h-8 w-auto sm:h-10" />
          <p className="max-w-xl text-sm leading-7 text-white/72">
            Performance-driven agency für Unternehmen, die Nachfrage und Lead-Konversion nicht
            trennen wollen. Diese veröffentlichte Deutschland-Seite fokussiert Paid Ads, SEO und
            Webdesign.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-cobalt-soft">
            Service Area: {publishedContact.serviceArea}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
            Seiten
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {navigationLinks.map((item) => (
              <li key={item.to}>
                <Link className="transition hover:text-white" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
            {legalPages.map((page) => (
              <li key={page.slug}>
                <Link className="transition hover:text-white" to={`/${page.slug}`}>
                  {page.label}
                </Link>
              </li>
            ))}
            {utilityLinks.map((item) => (
              <li key={item.to}>
                <Link className="transition hover:text-white" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
            Kontakt
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a className="transition hover:text-white" href={`mailto:${publishedContact.email}`}>
                {publishedContact.email}
              </a>
            </li>
            <li>
              <a className="transition hover:text-white" href={publishedContact.phoneHref}>
                {publishedContact.phoneDisplay}
              </a>
            </li>
            <li>{publishedContact.addressLines.join(', ')}</li>
            <li>
              <a
                className="transition hover:text-white"
                href={publishedContact.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="pt-2 text-xs leading-6 text-white/50">{publishedContact.sourceNote}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-6 py-5 text-center text-xs text-white/45 lg:px-10">
        © {new Date().getFullYear()} NEO THE AGENCY. Germany market page.
      </div>
    </footer>
  )
}

function BottomStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[rgba(4,9,21,0.92)] px-4 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cobalt-soft">Ready for growth</p>
          <p className="text-sm text-white/78">
            Google Ads, SEO und Webdesign als klarer Conversion-Pfad.
          </p>
        </div>
        <div className="flex w-full gap-3 sm:w-auto">
          <ActionLink href="/contact" variant="secondary" className="flex-1 sm:flex-none">
            Kontakt
          </ActionLink>
          <ActionLink
            href={publishedContact.officialContact}
            variant="primary"
            className="flex-1 sm:flex-none"
            external
          >
            Offizielle Anfrage
          </ActionLink>
        </div>
      </div>
    </div>
  )
}

function FloatingContactButton() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-24 right-4 z-40 inline-flex min-h-11 min-w-11 items-center gap-2 rounded-full border border-cobalt/40 bg-cobalt px-4 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-cobalt-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:right-6"
    >
      Kontakt
    </Link>
  )
}

function CookieBanner() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    setHidden(window.localStorage.getItem('neo-cookie-choice') !== null)
  }, [])

  if (hidden) {
    return null
  }

  const storeChoice = (value: string) => {
    window.localStorage.setItem('neo-cookie-choice', value)
    setHidden(true)
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md rounded-[1.75rem] border border-white/12 bg-[rgba(4,9,21,0.95)] p-5 shadow-panel backdrop-blur-xl">
      <p className="text-xs uppercase tracking-[0.2em] text-cobalt-soft">Cookie notice</p>
      <p className="mt-3 text-sm leading-7 text-white/78">
        Diese Seite nutzt keine Marketing- oder Analyse-Cookies. Gespeichert wird nur deine
        Datenschutzeinstellung im Browser.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button type="button" className="button-primary" onClick={() => storeChoice('essential')}>
          Nur notwendige speichern
        </button>
        <button type="button" className="button-secondary" onClick={() => storeChoice('acknowledged')}>
          Verstanden
        </button>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-shell">
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <Reveal className="space-y-8">
            <div className="eyebrow">NEO THE AGENCY · Germany Market Entry</div>
            <div className="space-y-6">
              <p className="max-w-2xl text-sm uppercase tracking-[0.32em] text-cobalt-soft">
                Digital Performance Marketing
              </p>
              <h1 className="text-balance font-display text-5xl font-semibold leading-[0.94] text-white sm:text-6xl xl:text-7xl">
                Google Ads, SEO und Webdesign für Unternehmen, die Nachfrage und Conversion
                gemeinsam führen wollen.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/76">
                NEO verbindet Strategie, Marketing und Software Engineering zu einem klaren
                Lead-System. Die deutsche Seite fokussiert drei Kernleistungen: Google Ads, SEO
                und Webdesign mit sauberer CTA-Logik.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionLink href="/contact" variant="primary">
                Projekt anfragen
              </ActionLink>
              <ActionLink href="/seo-agentur" variant="secondary">
                SEO ansehen
              </ActionLink>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="panel-muted">
                  <p className="text-xs uppercase tracking-[0.24em] text-cobalt-soft">{metric.label}</p>
                  <p className="mt-3 font-display text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{metric.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:pt-6">
            <LeadForm
              title="Kostenlose Projektanfrage"
              intro="Die Formularfelder öffnen dein Mailprogramm mit einer vorbereiteten Anfrage an den offiziell veröffentlichten NEO-Kontakt."
              defaultService="Paid Ads"
            />
          </Reveal>
        </div>
      </section>

      <SectionShell
        eyebrow="Operating model"
        title="Von Nachfrage zu qualifizierten Leads statt von Kanal zu Kanal"
        intro="Die Seitenarchitektur ist bewusst auf drei Kerndisziplinen verdichtet. Jede Leistung hat einen klaren Job im Wachstumsmodell."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {companyFacts.operatingModel.map((item, index) => (
            <Reveal key={item} className="panel flex h-full flex-col gap-6">
              <div className="text-xs uppercase tracking-[0.28em] text-cobalt-soft">
                0{index + 1}
              </div>
              <p className="text-lg leading-8 text-white/84">{item}</p>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Core services"
        title="Drei Service-Seiten mit klarer Suchintention und sauberer Verlinkung"
        intro="Die Deutschland-Version vermeidet eine überladene Angebotsliste. Jede Kernleistung bekommt eine fokussierte Seite mit eigener Conversion-Führung."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {servicePages.map((service) => (
            <Reveal key={service.slug}>
              <article className="panel h-full">
                <p className="text-xs uppercase tracking-[0.25em] text-cobalt-soft">
                  {service.pageLabel}
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white">
                  {service.kicker}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/70">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/74">
                  {service.deliverables.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cobalt-soft" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ActionLink href={`/${service.slug}`} variant="secondary" className="mt-8">
                  Zur Seite
                </ActionLink>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Public proof"
        title="Öffentlich kommunizierte Cases, sauber in den Angebotskontext übersetzt"
        intro="Die Seite nutzt nur Proof, der auf der Live-Website sichtbar ist. So bleibt die Argumentation belastbar und vermeidet erfundene Referenzen."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <Reveal key={caseStudy.name}>
              <article className="panel h-full">
                <p className="text-xs uppercase tracking-[0.26em] text-cobalt-soft">
                  {caseStudy.sector}
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white">
                  {caseStudy.name}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72">“{caseStudy.quote}”</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {caseStudy.services.map((service) => (
                    <span key={service} className="badge-chip">
                      {service}
                    </span>
                  ))}
                </div>
                <div className="mt-6 space-y-2 text-sm text-white/78">
                  {caseStudy.metrics.map((metric) => (
                    <p key={metric}>{metric}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Why NEO"
        title="Warum diese Seite bewusst straffer und klarer ist als ein generischer Agentur-Auftritt"
        intro={companyFacts.summary}
      >
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="panel space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt-soft">Differentiators</p>
            <ul className="space-y-4 text-base leading-8 text-white/78">
              {companyFacts.differentiators.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 rounded-full bg-cobalt-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="panel">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt-soft">Team profile</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {companyFacts.teamRoles.map((role) => (
                <div key={role} className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-sm font-medium text-white/82">{role}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <FaqSection
        eyebrow="FAQ"
        title="Häufige Fragen zur Deutschland-Seite"
        intro="Die wichtigsten Rückfragen zu Scope, Zielgruppe und nächstem Schritt beantwortet die Seite direkt."
        items={homeFaqs}
      />

      <SectionShell
        eyebrow="Next step"
        title="Wenn du einen fokussierten Deutschland-Auftritt willst, muss die Anfrage nicht kompliziert sein"
        intro="Der nächste Schritt ist eine konkrete Projektanfrage. Dafür stehen E-Mail, offizieller Kontaktbereich und die drei Service-Pfade bereit."
      >
        <div className="panel flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-white/78">
              Sende eine kurze Projektanfrage und markiere, ob Google Ads, SEO, Webdesign oder
              ein kombiniertes Setup im Fokus steht.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/contact" variant="primary">
              Kontakt aufnehmen
            </ActionLink>
            <ActionLink href={publishedContact.officialContact} variant="secondary" external>
              Zum offiziellen Kontakt
            </ActionLink>
          </div>
        </div>
      </SectionShell>
    </>
  )
}

function ServiceDetailPage({ service }: { service: ServicePage }) {
  const relatedServices = service.parentSlug
    ? [
        servicePages.find((entry) => entry.slug === service.parentSlug),
        ...geoServicePages.filter(
          (entry) => entry.locationKey === service.locationKey && entry.slug !== service.slug,
        ),
      ].filter((entry): entry is ServicePage => Boolean(entry))
    : servicePages.filter((entry) => entry.slug !== service.slug)

  return (
    <>
      <PageHero
        eyebrow={service.kicker}
        title={service.title}
        description={service.description}
        primary={{ href: '/contact', label: 'Projekt anfragen' }}
        secondary={{ href: publishedContact.officialContact, label: 'Offizieller Kontakt', external: true }}
        metrics={service.proof}
      />

      <SectionShell eyebrow="Seitenfokus" title="Was diese Leistungsseite leisten soll" intro={service.summary[0]}>
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <Reveal className="panel space-y-4">
            {service.summary.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-white/76">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal className="panel space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt-soft">Deliverables</p>
            <ul className="space-y-4 text-base leading-8 text-white/78">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 rounded-full bg-cobalt-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Workflow"
        title="So wird aus der Leistung eine saubere Nachfrage- und Conversion-Strecke"
        intro="Die Seite verbindet strategische Klarheit, Angebotsbotschaft und konkrete nächste Schritte."
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {service.workflow.map((step, index) => (
            <Reveal key={step} className="panel h-full">
              <div className="text-xs uppercase tracking-[0.28em] text-cobalt-soft">
                Schritt 0{index + 1}
              </div>
              <p className="mt-5 text-base leading-8 text-white/78">{step}</p>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Proof and restraint"
        title="Öffentliche Proof-Signale sauber einordnen"
        intro={service.proofNote}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {service.proof.map((metric) => (
            <Reveal key={metric.label} className="panel h-full">
              <p className="text-xs uppercase tracking-[0.25em] text-cobalt-soft">{metric.label}</p>
              <p className="mt-4 font-display text-4xl font-semibold text-white">{metric.value}</p>
              <p className="mt-3 text-sm leading-7 text-white/68">{metric.detail}</p>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Interne Verlinkung"
        title={service.parentSlug ? 'Verwandte Seiten im lokalen Cluster' : 'Verwandte Leistungsseiten'}
        intro={
          service.parentSlug
            ? 'Geo-Seiten sollten an ihre Master-Seite und an weitere relevante Seiten im selben Standort-Cluster angeschlossen werden.'
            : 'Die Deutschland-Seite verzahnt die drei Kernleistungen bewusst miteinander, damit Nutzer und Suchmaschinen die Leistungsbeziehungen klar verstehen.'
        }
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {relatedServices.map((entry) => (
            <Reveal key={entry.slug}>
              <article className="panel h-full">
                <p className="text-xs uppercase tracking-[0.25em] text-cobalt-soft">
                  {entry.pageLabel}
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white">
                  {entry.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/70">{entry.description}</p>
                <ActionLink href={`/${entry.slug}`} variant="secondary" className="mt-8">
                  Zur Seite
                </ActionLink>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <FaqSection
        eyebrow="FAQ"
        title={`Fragen zu ${service.pageLabel}`}
        intro="Jede Leistungsseite beantwortet die wichtigsten kaufnahen Rückfragen direkt auf der Seite."
        items={service.faqs}
      />

      <SectionShell
        eyebrow="Next step"
        title="Wenn die Leistung relevant ist, sollte der nächste Schritt direkt erreichbar sein"
        intro="Darum endet jede Seite mit einem klaren Kontaktweg und nicht mit offenen Fragen."
      >
        <div className="panel flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-white/78">
              Du kannst direkt eine Anfrage für {service.navLabel} senden oder den offiziellen
              Kontaktbereich von NEO nutzen.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/contact" variant="primary">
              Kontakt aufnehmen
            </ActionLink>
            <ActionLink href={publishedContact.officialContact} variant="secondary" external>
              Zum offiziellen Kontakt
            </ActionLink>
          </div>
        </div>
      </SectionShell>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NEO"
        title="Seniorige Rollen, klarer Anspruch und ein Setup, das nicht bei schöner Oberfläche stoppt"
        description="Die Deutschland-Seite übersetzt die auf der Live-Website kommunizierte Haltung von NEO in einen fokussierten Marktauftritt: strategisch, klar und performance-orientiert."
        primary={{ href: '/contact', label: 'Projekt anfragen' }}
        secondary={{ href: publishedContact.officialSite, label: 'Zur Hauptwebsite', external: true }}
        metrics={trustMetrics}
      />

      <SectionShell
        eyebrow="Positioning"
        title="NEO verbindet Strategie, Technologie und kreative Umsetzung"
        intro={companyFacts.summary}
      >
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="panel">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt-soft">Differentiators</p>
            <ul className="mt-6 space-y-4 text-base leading-8 text-white/78">
              {companyFacts.differentiators.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 rounded-full bg-cobalt-soft" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="panel">
            <p className="text-xs uppercase tracking-[0.25em] text-cobalt-soft">Team profile</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {companyFacts.teamRoles.map((role) => (
                <div key={role} className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-sm font-medium text-white/82">{role}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Cases"
        title="Öffentlich sichtbare Erfolgsbeispiele"
        intro="Die About-Seite nutzt reale Case-Elemente, die NEO bereits veröffentlicht hat. Damit entsteht Vertrauen, ohne fiktive Proof-Elemente zu erfinden."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <Reveal key={caseStudy.name} className="panel h-full">
              <p className="text-xs uppercase tracking-[0.24em] text-cobalt-soft">{caseStudy.sector}</p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-white">{caseStudy.name}</h2>
              <p className="mt-4 text-sm leading-7 text-white/72">“{caseStudy.quote}”</p>
              <div className="mt-6 space-y-2 text-sm text-white/78">
                {caseStudy.metrics.map((metric) => (
                  <p key={metric}>{metric}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Contact"
        title="Bereit für ein fokussiertes Deutschland-Setup?"
        intro="Wenn Google Ads, SEO und Website-Struktur nicht mehr nebeneinander laufen sollen, ist der nächste Schritt eine konkrete Projektanfrage."
      >
        <div className="panel flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-base leading-8 text-white/78">
            Die deutsche Marktseite ist so aufgebaut, dass Services, Trust und Kontaktfluss schon
            im Erstkontakt klar werden.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/contact" variant="primary">
              Kontakt aufnehmen
            </ActionLink>
            <ActionLink href={publishedContact.instagram} variant="secondary" external>
              Instagram
            </ActionLink>
          </div>
        </div>
      </SectionShell>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Eine Projektanfrage sollte konkret, schnell und ohne Reibung möglich sein"
        description="Die Seite bietet einen direkten Mail-Kontakt, die offiziell veröffentlichte Kontaktseite von NEO und die öffentlich sichtbaren Kontaktdaten der Hauptwebsite."
        primary={{ href: publishedContact.officialContact, label: 'Offizieller Kontakt', external: true }}
        secondary={{ href: `mailto:${publishedContact.email}`, label: 'E-Mail senden', external: true }}
        metrics={[
          { label: 'E-Mail', value: publishedContact.email, detail: 'Offiziell veröffentlichter Kontakt' },
          { label: 'Telefon', value: publishedContact.phoneDisplay, detail: 'Offiziell veröffentlichter Kontakt' },
          { label: 'Service Area', value: publishedContact.serviceArea, detail: 'Deutschland-Fokus der Seite' },
        ]}
      />

      <SectionShell
        eyebrow="Anfrage"
        title="Projektanfrage direkt aus der Seite"
        intro="Das Formular öffnet dein Mailprogramm mit einer vorbereiteten Nachricht an den aktuell veröffentlichten NEO-Kontakt."
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="panel">
            <LeadForm
              title="Projekt starten"
              intro="Keine Daten werden serverseitig gespeichert. Der Versand läuft über dein eigenes Mailprogramm."
              defaultService="SEO"
              compact={false}
            />
          </Reveal>
          <Reveal className="panel space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cobalt-soft">Offiziell veröffentlichte Daten</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/76">
                <li>
                  <a href={`mailto:${publishedContact.email}`} className="transition hover:text-white">
                    {publishedContact.email}
                  </a>
                </li>
                <li>
                  <a href={publishedContact.phoneHref} className="transition hover:text-white">
                    {publishedContact.phoneDisplay}
                  </a>
                </li>
                <li>{publishedContact.addressLines.join(', ')}</li>
                <li>
                  <a href={publishedContact.instagram} target="_blank" rel="noreferrer" className="transition hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-[1.5rem] border border-cobalt/20 bg-cobalt/10 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-cobalt-soft">Hinweis</p>
              <p className="mt-3 text-sm leading-7 text-white/72">{publishedContact.sourceNote}</p>
            </div>
          </Reveal>
        </div>
      </SectionShell>

      <FaqSection
        eyebrow="FAQ"
        title="Fragen zum Kontaktweg"
        intro="Die wichtigsten Hinweise zu Kontakt, Hosting und Veröffentlichung werden direkt offengelegt."
        items={[
          {
            question: 'Wird das Formular auf dieser Seite serverseitig verarbeitet?',
            answer:
              'Nein. Die Anfrage wird in dein Mailprogramm übernommen oder du wirst auf den offiziellen Kontaktbereich von NEO weitergeleitet.',
          },
          {
            question: 'Warum verweist die Seite auf die Hauptwebsite?',
            answer:
              'Weil dort die offiziell veröffentlichten Kontakt- und Rechtshinweise von NEO gepflegt werden. Diese Deutschland-Seite übernimmt diese Angaben transparent.',
          },
          {
            question: 'Kann ich auch direkt anrufen?',
            answer:
              `Ja. Der auf der Hauptwebsite veröffentlichte Telefonkontakt lautet ${publishedContact.phoneDisplay}.`,
          },
        ]}
      />
    </>
  )
}

function SitemapPage() {
  const totalPageCount = sitemapGroups.reduce((count, group) => count + group.links.length, 0)

  return (
    <>
      <PageHero
        eyebrow="Sitemap"
        title="Alle veröffentlichten Seiten auf einen Blick"
        description="Diese Übersicht listet die aktuell veröffentlichten Seiten der Deutschland-Version inklusive Service-Master, Geo-Seiten und Pflichtseiten."
        primary={{ href: '/contact', label: 'Kontakt' }}
        secondary={{ href: `${siteUrl}/sitemap.xml`, label: 'XML Sitemap', external: true }}
        metrics={[
          { label: 'Seiten', value: String(totalPageCount), detail: 'Veröffentlichte HTML-Seiten in dieser Übersicht' },
          { label: 'Service-Master', value: String(servicePages.length), detail: 'Kernleistungen mit eigener Hauptseite' },
          { label: 'Geo-Seiten', value: String(geoServicePages.length), detail: 'Tier-1-Standortseiten im Rhein-Ruhr-Cluster' },
        ]}
      />

      <SectionShell
        eyebrow="Seitenübersicht"
        title="Alle erreichbaren Seiten der Germany-Market-Version"
        intro="Die Liste basiert direkt auf der vorhandenen Seitenstruktur im Projekt, damit Footer-Link, HTML-Sitemap und XML-Sitemap sauber zusammenpassen."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {sitemapGroups.map((group) => (
            <Reveal key={group.title} className="panel h-full">
              <p className="text-xs uppercase tracking-[0.24em] text-cobalt-soft">{group.title}</p>
              <p className="mt-4 text-sm leading-7 text-white/70">{group.intro}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-white/78">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link className="transition hover:text-white" to={link.to}>
                      {link.label}
                    </Link>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/42">{link.to}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  )
}

function LegalPageView({ page }: { page: LegalPage }) {
  return (
    <>
      <PageHero
        eyebrow={page.label}
        title={page.title}
        description={page.intro}
        primary={{ href: '/contact', label: 'Kontakt' }}
        secondary={{ href: publishedContact.officialSite, label: 'Hauptwebsite', external: true }}
      />
      <SectionShell eyebrow="Rechtliches" title={page.label} intro={page.metaDescription}>
        <div className="space-y-5">
          {page.sections.map((section) => (
            <Reveal key={section.heading} className="panel">
              <h2 className="font-display text-2xl font-semibold text-white">{section.heading}</h2>
              <div className="mt-5 space-y-4 text-sm leading-8 text-white/74">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>
    </>
  )
}

function NotFoundPage() {
  return (
    <SectionShell
      eyebrow="404"
      title="Diese Seite wurde nicht gefunden"
      intro="Nutze die Home-Seite oder gehe direkt in den Kontakt, um die relevanten Leistungsseiten zu erreichen."
      className="pt-36"
    >
      <div className="panel flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="max-w-2xl text-base leading-8 text-white/76">
          Die veröffentlichte Deutschland-Seite umfasst Home, drei Service-Seiten, About, Contact
          sowie Datenschutz-, Impressums- und Nutzungsbedingungen.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ActionLink href="/" variant="primary">
            Zur Startseite
          </ActionLink>
          <ActionLink href="/contact" variant="secondary">
            Kontakt
          </ActionLink>
        </div>
      </div>
    </SectionShell>
  )
}

function PageHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  metrics,
}: {
  eyebrow: string
  title: string
  description: string
  primary: { href: string; label: string; external?: boolean }
  secondary: { href: string; label: string; external?: boolean }
  metrics?: Metric[]
}) {
  return (
    <section className="hero-shell">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-32 lg:px-10">
        <Breadcrumbs />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="space-y-7">
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="text-balance font-display text-5xl font-semibold leading-[0.96] text-white sm:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-white/76">{description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ActionLink href={primary.href} variant="primary" external={primary.external}>
                {primary.label}
              </ActionLink>
              <ActionLink href={secondary.href} variant="secondary" external={secondary.external}>
                {secondary.label}
              </ActionLink>
            </div>
          </Reveal>
          {metrics?.length ? (
            <Reveal className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <div key={metric.label} className="panel-muted">
                  <p className="text-xs uppercase tracking-[0.24em] text-cobalt-soft">{metric.label}</p>
                  <p className="mt-3 font-display text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/66">{metric.detail}</p>
                </div>
              ))}
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  )
}

function SectionShell({
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  eyebrow: string
  title: string
  intro: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={clsx('mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20', className)}>
      <Reveal className="mb-10 max-w-3xl space-y-4">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="text-balance font-display text-4xl font-semibold text-white sm:text-5xl">
          {title}
        </h2>
        <p className="text-lg leading-8 text-white/72">{intro}</p>
      </Reveal>
      {children}
    </section>
  )
}

function FaqSection({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string
  title: string
  intro: string
  items: FaqItem[]
}) {
  return (
    <SectionShell eyebrow={eyebrow} title={title} intro={intro}>
      <div className="space-y-4">
        {items.map((item) => (
          <Reveal key={item.question}>
            <details className="faq-card group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="font-display text-xl font-semibold text-white">{item.question}</span>
                <span className="mt-1 text-cobalt-soft transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-4xl text-sm leading-8 text-white/72">{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}

function Breadcrumbs() {
  const location = useLocation()
  const path = location.pathname === '/' ? [] : location.pathname.split('/').filter(Boolean)

  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.22em] text-white/46">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link className="transition hover:text-white" to="/">
            Home
          </Link>
        </li>
        {path.map((segment, index) => {
          const href = `/${path.slice(0, index + 1).join('/')}`
          const geoLocation = geoServicePages.find((entry) => entry.locationKey === segment)
          const label =
            servicePages.find((service) => service.slug === segment)?.pageLabel ||
            legalPages.find((page) => page.slug === segment)?.label ||
            geoLocation?.areaServed ||
            (segment === 'about'
              ? 'About'
              : segment === 'contact'
                ? 'Kontakt'
                : segment === 'sitemap'
                  ? 'Sitemap'
                  : segment)

          return (
            <li key={href} className="flex items-center gap-2">
              <span>/</span>
              <Link className="transition hover:text-white" to={href}>
                {label}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

function LeadForm({
  title,
  intro,
  defaultService,
  compact,
}: {
  title: string
  intro: string
  defaultService: string
  compact?: boolean
}) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const service = String(formData.get('service') || '')
    const message = String(formData.get('message') || '')
    const subject = encodeURIComponent(`Projektanfrage Deutschland | ${service}`)
    const body = encodeURIComponent(
      [
        'Projektanfrage über die veröffentlichte Germany-Seite',
        '',
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Service: ${service}`,
        '',
        'Projektbeschreibung:',
        message,
      ].join('\n'),
    )

    setSubmitted(true)
    window.location.href = `mailto:${publishedContact.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="panel space-y-5">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-cobalt-soft">{title}</p>
        <p className="mt-4 text-sm leading-7 text-white/72">{intro}</p>
      </div>
      <div className={clsx('grid gap-4', compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2')}>
        <label className="field-shell">
          <span>Name</span>
          <input name="name" type="text" placeholder="Dein Name" required />
        </label>
        <label className="field-shell">
          <span>E-Mail</span>
          <input name="email" type="email" placeholder="name@unternehmen.de" required />
        </label>
        <label className="field-shell sm:col-span-2">
          <span>Service</span>
          <select name="service" defaultValue={defaultService}>
            {servicePages.map((service) => (
              <option key={service.slug} value={service.pageLabel}>
                {service.pageLabel}
              </option>
            ))}
          </select>
        </label>
        <label className="field-shell sm:col-span-2">
          <span>Projekt</span>
          <textarea
            name="message"
            rows={compact ? 4 : 6}
            placeholder="Worum geht es, was ist das Ziel und welche Leistung hat Priorität?"
            required
          />
        </label>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="button-primary">
          Anfrage per E-Mail vorbereiten
        </button>
        <a
          href={publishedContact.officialContact}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white/64 transition hover:text-white"
        >
          Oder offiziellen Kontakt öffnen
        </a>
      </div>
      <p className="text-xs leading-6 text-white/50">
        {submitted
          ? 'Dein Mailprogramm sollte sich geöffnet haben. Falls nicht, nutze den offiziellen Kontaktlink.'
          : 'Es werden keine Formulardaten serverseitig gespeichert.'}
      </p>
    </form>
  )
}

function ActionLink({
  href,
  children,
  variant,
  external,
  className,
}: {
  href: string
  children: ReactNode
  variant: 'primary' | 'secondary'
  external?: boolean
  className?: string
}) {
  const classes = clsx(variant === 'primary' ? 'button-primary' : 'button-secondary', className)

  if (external || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={classes} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={classes}>
      {children}
    </Link>
  )
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

function SeoHead({ config }: { config: SeoConfig }) {
  const location = useLocation()

  useEffect(() => {
    document.title = config.title
    setMetaTag('name', 'description', config.description)
    setMetaTag('property', 'og:title', config.title)
    setMetaTag('property', 'og:description', config.description)
    setMetaTag('property', 'og:url', `${siteUrl}${location.pathname}`)
    setMetaTag('property', 'og:image', `${siteUrl}/og-image.svg`)
    setMetaTag('name', 'twitter:title', config.title)
    setMetaTag('name', 'twitter:description', config.description)
    setMetaTag('name', 'twitter:image', `${siteUrl}/og-image.svg`)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${siteUrl}${location.pathname}`)

    let script = document.getElementById('structured-data')
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.setAttribute('id', 'structured-data')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(config.schema)
  }, [config, location.pathname])

  return null
}

function setMetaTag(attribute: 'name' | 'property', value: string, content: string) {
  let node = document.querySelector(`meta[${attribute}="${value}"]`)
  if (!node) {
    node = document.createElement('meta')
    node.setAttribute(attribute, value)
    document.head.appendChild(node)
  }
  node.setAttribute('content', content)
}

function buildHomeSeo(): SeoConfig {
  return {
    title: 'Google Ads, SEO und Webdesign für Deutschland | NEO THE AGENCY',
    description:
      'NEO THE AGENCY bündelt Google Ads, SEO und Webdesign für Unternehmen in Deutschland mit klaren Conversion-Pfaden.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'NEO THE AGENCY',
      url: siteUrl,
      description:
        'Performance-driven agency für Deutschland mit Fokus auf Google Ads, SEO und Webdesign.',
      areaServed: 'Germany',
      serviceType: servicePages.map((service) => service.pageLabel),
      sameAs: [publishedContact.instagram, publishedContact.officialSite],
      email: publishedContact.email,
      telephone: publishedContact.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: publishedContact.addressLines[0],
        addressLocality: 'Zagreb',
        postalCode: '10000',
        addressCountry: 'HR',
      },
    },
  }
}

function buildServiceSeo(service: ServicePage): SeoConfig {
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.pageLabel,
      provider: {
        '@type': 'ProfessionalService',
        name: 'NEO THE AGENCY',
        url: siteUrl,
      },
      areaServed: service.areaServed || 'Germany',
      description: service.description,
      url: `${siteUrl}/${service.slug}`,
    },
  }
}

function buildAboutSeo(): SeoConfig {
  return {
    title: 'About | NEO THE AGENCY Germany',
    description:
      'Seniorige Rollen, öffentlicher Proof und ein klarer Performance-Ansatz: About-Seite der Deutschland-Version von NEO THE AGENCY.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NEO THE AGENCY',
      url: `${siteUrl}/about`,
      sameAs: [publishedContact.instagram, publishedContact.officialSite],
      description: companyFacts.summary,
    },
  }
}

function buildContactSeo(): SeoConfig {
  return {
    title: 'Kontakt | NEO THE AGENCY Germany',
    description:
      'Kontaktseite der Deutschland-Version von NEO THE AGENCY mit Mail-, Telefon- und offiziellem Kontaktweg.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'NEO THE AGENCY Germany Contact',
      url: `${siteUrl}/contact`,
      mainEntity: {
        '@type': 'Organization',
        name: 'NEO THE AGENCY',
        email: publishedContact.email,
        telephone: publishedContact.phoneDisplay,
        sameAs: [publishedContact.instagram],
      },
    },
  }
}

function buildSitemapSeo(): SeoConfig {
  return {
    title: 'Sitemap | NEO THE AGENCY Germany',
    description:
      'HTML-Sitemap der Deutschland-Version von NEO THE AGENCY mit Home, Service-Mastern, Geo-Seiten und Pflichtseiten.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Sitemap',
      url: `${siteUrl}/sitemap`,
      description:
        'HTML-Sitemap der Deutschland-Version von NEO THE AGENCY mit allen veröffentlichten Haupt-, Geo- und Rechtseiten.',
      hasPart: sitemapGroups.flatMap((group) =>
        group.links.map((link) => ({
          '@type': 'WebPage',
          name: link.label,
          url: `${siteUrl}${link.to}`,
        })),
      ),
    },
  }
}

function buildLegalSeo(page: LegalPage): SeoConfig {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.label,
      url: `${siteUrl}/${page.slug}`,
      description: page.metaDescription,
    },
  }
}

function build404Seo(): SeoConfig {
  return {
    title: '404 | NEO THE AGENCY Germany',
    description: 'Die aufgerufene Seite wurde nicht gefunden.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '404',
      url: siteUrl,
      description: 'Die aufgerufene Seite wurde nicht gefunden.',
    },
  }
}
