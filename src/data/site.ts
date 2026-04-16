export type Metric = {
  label: string
  value: string
  detail: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ServicePage = {
  slug: string
  navLabel: string
  pageLabel: string
  kicker: string
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  summary: string[]
  deliverables: string[]
  workflow: string[]
  proof: Metric[]
  proofNote: string
  faqs: FaqItem[]
}

export type LegalPage = {
  slug: string
  label: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  sections: Array<{
    heading: string
    body: string[]
  }>
}

export const siteUrl = 'https://digitalmovementuk.github.io/neo-the-agency-germany'

export const publishedContact = {
  officialSite: 'https://www.neotheagency.com',
  officialContact: 'https://www.neotheagency.com/contact',
  officialPrivacy: 'https://www.neotheagency.com/privacy-policy',
  officialTerms: 'https://www.neotheagency.com/terms-of-service',
  instagram: 'https://www.instagram.com/neo.theagency/',
  email: 'info@flabbergast.agency',
  phoneDisplay: '+385 91 400 7079',
  phoneHref: 'tel:+385914007079',
  addressLines: ['Zavrtnica 17', '10 000 Zagreb', 'Croatia'],
  serviceArea: 'Deutschland',
  sourceNote:
    'Kontaktdaten und Rechtshinweise orientieren sich an den derzeit auf der NEO-Hauptwebsite veröffentlichten Angaben.',
}

export const trustMetrics: Metric[] = [
  {
    label: 'Track Record',
    value: '+10 Jahre',
    detail:
      'Auf der Live-Seite kommuniziert NEO mehr als zehn Jahre Erfahrung in Strategie, Marketing und Software Engineering.',
  },
  {
    label: 'Arbeitsmodell',
    value: 'Senior Experts',
    detail:
      'NEO positioniert sich mit seniorigen Rollen aus Strategie, Kreation, Web, CRM und Marketing statt generischer Delivery.',
  },
  {
    label: 'Systemansatz',
    value: 'Ads + SEO + Web',
    detail:
      'Die deutsche Seite bündelt Nachfrageaufbau und Lead-Konversion in einem stringenten Angebotsrahmen.',
  },
]

export const caseStudies = [
  {
    name: 'AZURA LIVING BALI',
    sector: 'High-End Luxury Villas',
    services: ['Paid Ads', 'Web', 'CRM', 'Social Media'],
    quote:
      'NEO created a digital brand that our customers love. Website, Social Media, automated messages – everything feels seamless for our investors.',
    metrics: ['ROAS +347%', 'CPL -62%', 'Umsatz €284K in 90 Tagen'],
  },
  {
    name: 'ADDRESSBALI',
    sector: '5-Star Hotel and Residences',
    services: ['Web', 'CRM', 'Paid Ads'],
    quote:
      'The CRM implementation was a game-changer. Our response rate increased by 180%, and the automated follow-ups mean we never lose a lead.',
    metrics: ['Lead Response Rate +180%', 'Conversion-orientierte Web- und CRM-Strecke'],
  },
  {
    name: 'ONLINE COACHING',
    sector: 'Lead Generation Infrastructure',
    services: ['Paid Ads', 'CRM'],
    quote:
      'NEO built the lead generation and sales infrastructure we were missing — paid ads, funnel logic, CRM, and follow-up systems all working together.',
    metrics: ['Lead-to-Call Conversion +38%', 'Instagram Automations +423%', 'Revenue +350%'],
  },
]

export const servicePages: ServicePage[] = [
  {
    slug: 'paid-ads-agentur',
    navLabel: 'Paid Ads',
    pageLabel: 'Paid Ads Agentur',
    kicker: 'Paid Ads für klare Nachfrage- und Conversion-Wege',
    title: 'Paid Ads Agentur für Unternehmen, die Performance und Conversion gemeinsam steuern wollen',
    description:
      'NEO entwickelt Paid-Ads-Setups, die nicht bei Klicks stoppen. Kampagnenstruktur, Landingpage-Handoffs, Creative-Tests und Conversion-Logik werden als ein System geführt.',
    metaTitle: 'Paid Ads Agentur für Deutschland | NEO THE AGENCY',
    metaDescription:
      'Paid Ads Agentur für Deutschland: NEO verbindet Kampagnenstrategie, Landingpages und Conversion-Logik für planbare Nachfrage.',
    summary: [
      'Die Seite richtet sich an Unternehmen, die Google Ads und Paid Social nicht isoliert betreiben wollen, sondern in einen belastbaren Vertriebspfad übersetzen möchten.',
      'NEO kombiniert Kampagnenarchitektur, Angebotsbotschaft, Creative-Testing und Landingpage-Übergaben, damit Performance-Media nicht in Streuverlusten endet.',
      'Der Fokus liegt auf Nachfrageaufbau, sauberer Qualifizierung und einer Auswertung, die für Marketing und Sales gleichermaßen lesbar bleibt.',
    ],
    deliverables: [
      'Kampagnenarchitektur für Search, Social oder hybride Setups',
      'Angebots- und Funnel-Messaging für qualifizierte Anfragen',
      'Landingpage-Handoffs mit klarer CTA- und Formularlogik',
      'Testing-Rhythmus für Creatives, Zielgruppen und Conversion-Hebel',
      'Reporting mit Fokus auf Nachfrage, CPL, Qualität und Conversion-Pfad',
    ],
    workflow: [
      'Commercial Fit prüfen: Angebot, Zielgruppe, Kaufhürden und Prioritäten scharfziehen.',
      'Kampagnen- und Funnel-Setup aufbauen: Suche, Paid Social, Retargeting und Landingpage-Handoffs aufeinander abstimmen.',
      'Creative- und Conversion-Tests fahren: Hypothesen sauber priorisieren statt wahllos Varianten zu stapeln.',
      'Lernkurve verdichten: Budgets, Signale und Sales-Feedback in einen klaren Optimierungszyklus übersetzen.',
    ],
    proof: [
      { label: 'ROAS', value: '+347%', detail: 'Case: AZURA LIVING BALI' },
      { label: 'CPL', value: '-62%', detail: 'Case: AZURA LIVING BALI' },
      { label: 'Lead-to-Call Conversion', value: '+38%', detail: 'Case: Online Coaching' },
    ],
    proofNote:
      'Die Kennzahlen stammen aus öffentlich sichtbaren Case-Study-Blöcken der NEO-Hauptwebsite. Sie werden hier als Nachweis des Arbeitsmodells verwendet, nicht als Erfolgsversprechen.',
    faqs: [
      {
        question: 'Übernimmt NEO nur Kampagnen oder auch Landingpages und Conversion-Strecken?',
        answer:
          'Der Paid-Ads-Ansatz wird bewusst mit Angebotsbotschaft, Landingpage-Handoffs und Conversion-Logik verbunden. Genau diese Verzahnung ist einer der Kernunterschiede.',
      },
      {
        question: 'Ist Paid Ads nur für große Budgets sinnvoll?',
        answer:
          'Nicht automatisch. Wichtiger als die absolute Höhe ist, ob Angebot, Marge, Sales-Kapazität und Lernrhythmus zu einer testbaren Paid-Strategie passen.',
      },
      {
        question: 'Welche Kanäle stehen im Fokus?',
        answer:
          'Abhängig von Suchintention und Geschäftsmodell kann das Setup Search, Paid Social oder beides priorisieren. Der Kanal folgt der Nachfrage, nicht umgekehrt.',
      },
      {
        question: 'Wie wird Erfolg bewertet?',
        answer:
          'Nicht nur über Klicks, sondern über qualifizierte Anfragen, CPL, Conversion-Signale und den Anteil der Nachfrage, der in brauchbare Sales-Chancen übergeht.',
      },
    ],
  },
  {
    slug: 'seo-agentur',
    navLabel: 'SEO',
    pageLabel: 'SEO Agentur',
    kicker: 'SEO für Sichtbarkeit mit kommerziellem Fokus',
    title: 'SEO Agentur für Unternehmen, die organische Sichtbarkeit in Nachfrage übersetzen wollen',
    description:
      'NEO baut SEO nicht als Content-Fließband, sondern als Vertriebssystem: klare Suchintention, saubere Seitenstruktur, belastbare interne Verlinkung und Conversion-Wege, die auch nach dem Klick funktionieren.',
    metaTitle: 'SEO Agentur für Deutschland | NEO THE AGENCY',
    metaDescription:
      'SEO Agentur für Deutschland: NEO verbindet Struktur, Content und Conversion-Pfade, damit organische Sichtbarkeit messbar wird.',
    summary: [
      'Die deutsche SEO-Seite fokussiert sich auf kommerzielle Suchanfragen statt auf breit gestreute Themenproduktion ohne Abschlussnähe.',
      'NEO verbindet SEO-Architektur, Angebotsseiten, Informationsdesign und Conversion-Elemente, damit Rankings nicht von der eigentlichen Nachfrage entkoppelt werden.',
      'Der Vorteil liegt in der Verbindung aus strategischer Priorisierung, klaren Service-Seiten und einer Website, die Interessenten nicht im Leerlauf lässt.',
    ],
    deliverables: [
      'Keyword- und Intent-Struktur für Kernservices ohne Doorway-Explosion',
      'Page Mapping für Home, Service-Seiten, About, Contact und unterstützende Rechtstexte',
      'People-first Copy mit FAQ, Entitäten, Metadaten und schema-fähigen Fakten',
      'Interne Verlinkung zwischen Paid Ads, SEO und Webentwicklung',
      'Conversion-orientierte Seitengerüste statt rein textlastiger SEO-Flächen',
    ],
    workflow: [
      'Nachfrage und Suchintention priorisieren: Welche Begriffe haben Abschlussnähe und passen wirklich zum Angebot?',
      'Informationsarchitektur festziehen: Slugs, Seitenrollen, interne Links und Content-Prioritäten vor dem Build definieren.',
      'Seiten mit kommerziellem Nutzen schreiben: klare Leistungen, Einordnung, FAQ und CTA-Pfade je Seite.',
      'Technische und inhaltliche Qualität absichern: saubere Struktur, Metadaten, Schema und crawlbare Seitensignale.',
    ],
    proof: [
      { label: 'Track Record', value: '+10 Jahre', detail: 'Strategie, Marketing, Software Engineering' },
      { label: 'SEO-Verzahnung', value: 'Content + Conversion', detail: 'Keine isolierte Traffic-Logik' },
      { label: 'Rollenmodell', value: 'Senior Experts', detail: 'Strategie, Web, CRM und Marketing' },
    ],
    proofNote:
      'Für SEO werden auf der Hauptwebsite keine separaten Ergebniswerte publiziert. Stattdessen stützt sich diese Seite auf die öffentlich kommunizierte Erfahrung, den Rollenmix und die integrative Arbeitsweise von NEO.',
    faqs: [
      {
        question: 'Macht NEO nur Strategie oder auch die Umsetzung der Seiten?',
        answer:
          'Die deutsche Website bündelt Planung, Copy, Struktur und Umsetzung. SEO wird hier als konkrete Website-Arbeit verstanden, nicht als separates Beratungspapier.',
      },
      {
        question: 'Wie verhindert NEO dünne SEO-Seiten?',
        answer:
          'Durch begrenzten Scope, klare Suchintention, unterschiedliche Seitennutzen und Content, der auf echte Fragen und Kaufhürden eingeht statt Varianten zu vervielfachen.',
      },
      {
        question: 'Wie spielen SEO und Paid Ads zusammen?',
        answer:
          'Paid Ads priorisiert direkte Nachfrage. SEO baut nachhaltige Sichtbarkeit auf. Beide Disziplinen teilen Messaging, Landingpage-Logik und Conversion-Pfade.',
      },
      {
        question: 'Ist diese Seite auf Deutschland fokussiert?',
        answer:
          'Ja. Die Angebotsstruktur, die Sprache und die CTA-Führung wurden für Unternehmen im deutschen Markt ausgerichtet.',
      },
    ],
  },
  {
    slug: 'webentwicklung-agentur',
    navLabel: 'Webentwicklung',
    pageLabel: 'Webentwicklung Agentur',
    kicker: 'Webentwicklung für bessere Lead-Konversion',
    title: 'Webentwicklung Agentur für Websites, die Nachfrage sauber aufnehmen und in Anfragen führen',
    description:
      'NEO entwickelt Websites nicht als reine Präsentationsfläche. Struktur, Copy, Conversion-Führung und technische Qualität werden so aufgebaut, dass Paid Ads, SEO und Vertrieb dieselbe Strecke bedienen.',
    metaTitle: 'Webentwicklung Agentur für Deutschland | NEO THE AGENCY',
    metaDescription:
      'Webentwicklung Agentur für Deutschland: NEO baut performante Websites mit klarer Angebotsstruktur, Conversion-Führung und sauberer technischer Basis.',
    summary: [
      'Die Webentwicklungs-Seite ist für Unternehmen gedacht, die mehr brauchen als schönes Design: nämlich eine Website, die Angebot, Vertrauen und nächste Schritte klar zusammenführt.',
      'NEO verbindet Design-System, Struktur, Messaging und technische Umsetzung so, dass Paid Ads und SEO auf eine belastbare Zielfläche einzahlen.',
      'Im Fokus stehen Lesbarkeit, mobile Conversion, saubere CTA-Hierarchie und ein Aufbau, der mit weiteren Services und Seiten mitwachsen kann.',
    ],
    deliverables: [
      'Seitenstruktur für Home, Service-Seiten, About, Contact und rechtliche Pflichtseiten',
      'Design-System mit markenklaren Farben, Buttons, Karten und responsiven Rhythmen',
      'Conversion-orientierte Hero-, Proof-, FAQ- und Kontaktmodule',
      'Technische Basis mit sauberem Routing, Metadaten, Schema und Performance-Fokus',
      'Launch-Readiness inklusive QA, Screenshots und GitHub-Publikation',
    ],
    workflow: [
      'Informations- und Conversion-Logik definieren: Welche Seiten, welche CTAs und welche Vertrauenssignale werden wirklich gebraucht?',
      'Visuelles System aus Brand-Farben und Editorial-Layout entwickeln, ohne in generische Agentur-Vorlagen abzurutschen.',
      'Seiten und Komponenten implementieren: Hero, Services, Proof, FAQ, Kontakt, Footer und rechtliche Seiten.',
      'Produktionsreife absichern: Accessibility, mobile Lesbarkeit, Asset-Setup und GitHub-Publikation verifizieren.',
    ],
    proof: [
      { label: 'Systemgedanke', value: 'Website + Ads + SEO', detail: 'Ein gemeinsamer Conversion-Pfad' },
      { label: 'Output', value: 'Launch-ready', detail: 'Build, QA und GitHub-Publikation' },
      { label: 'Experience', value: 'Senior Team', detail: 'Strategie, Kreation und Entwicklung verzahnt' },
    ],
    proofNote:
      'NEO kommuniziert auf der Hauptwebsite einen integrierten Ansatz aus Web, Marketing und Technologie. Diese Seite übersetzt genau diesen Ansatz in eine deutsche Angebotsseite.',
    faqs: [
      {
        question: 'Geht es hier um Design oder um Entwicklung?',
        answer:
          'Beides, aber nicht getrennt. Das Ziel ist eine Website, die visuell stark wirkt und gleichzeitig Leads sauber aufnimmt, qualifiziert und weiterführt.',
      },
      {
        question: 'Ist die Website nur für SEO gedacht?',
        answer:
          'Nein. Die technische und inhaltliche Struktur ist so gedacht, dass sie sowohl organische Nachfrage als auch Paid-Traffic und direkte Anfragen sauber verarbeitet.',
      },
      {
        question: 'Wie stark wird die Marke neu interpretiert?',
        answer:
          'Die Seite behält die zentralen NEO-Farben und die markante, kraftvolle Typografie-Logik bei, modernisiert aber Struktur, Klarheit und Conversion-Führung.',
      },
      {
        question: 'Kann die Website später ausgebaut werden?',
        answer:
          'Ja. Die Architektur ist bewusst modular, damit weitere Service-, Proof- oder Kampagnenseiten sauber ergänzt werden können.',
      },
    ],
  },
]

export const homeFaqs: FaqItem[] = [
  {
    question: 'Für wen ist die Deutschland-Seite von NEO gedacht?',
    answer:
      'Für Unternehmen, die Nachfrage und Conversion nicht als getrennte Disziplinen betrachten wollen. Die Seite richtet sich vor allem an Teams, die Paid Ads, SEO und Website-Führung als ein System denken.',
  },
  {
    question: 'Welche Leistungen stehen im Fokus?',
    answer:
      'Diese Version fokussiert bewusst die drei Kernleistungen Paid Ads, SEO und Webentwicklung. Weitere Themen wie CRM, Automationen oder AI werden nur dort erwähnt, wo sie die Kernleistungen sinnvoll ergänzen.',
  },
  {
    question: 'Ist NEO nur für eine Branche geeignet?',
    answer:
      'Nein. Die öffentlich sichtbaren Cases reichen von Hospitality und Real Estate bis zu Online Coaching. Entscheidend ist, ob ein sauberes Lead- und Conversion-System gebraucht wird.',
  },
  {
    question: 'Wie läuft der nächste Schritt ab?',
    answer:
      'Die Seite führt in eine konkrete Projektanfrage. Dafür stehen Mail-Kontakt, offizieller Kontaktlink und eine klar priorisierte Service-Auswahl bereit.',
  },
]

export const companyFacts = {
  summary:
    'NEO THE AGENCY positioniert sich als performance-driven agency, die Strategie, Technologie und kreative Umsetzung in ein gemeinsames Wachstumsmodell übersetzt.',
  differentiators: [
    'Nachfrageaufbau und Lead-Konversion werden gemeinsam geplant statt an verschiedene Teams ausgelagert.',
    'Seniorige Rollen aus Strategie, Kreation, Web, CRM und Marketing bilden die operative Basis.',
    'Die deutsche Website ist service-orientiert aufgebaut: klare Angebotsseiten statt diffuser Sammelseiten.',
  ],
  teamRoles: [
    'Strategy Consultant',
    'Creative Director',
    'Web Designer',
    'Web Developer',
    'Graphic Designer',
    'Social Media Manager',
    'CRM Specialist',
    'Marketing Manager',
    'Project Manager',
  ],
  operatingModel: [
    'Lead Generation: Paid Ads und SEO erzeugen qualifizierte Nachfrage.',
    'Lead Conversion: Website, Messaging und CTA-Logik übernehmen die Qualifizierung.',
    'Commercial Feedback: Performance-Daten und Sales-Signale fließen zurück in Struktur, Creatives und Seiten.',
  ],
}

export const legalPages: LegalPage[] = [
  {
    slug: 'datenschutz',
    label: 'Datenschutz',
    title: 'Datenschutzhinweise für die Deutschland-Seite von NEO THE AGENCY',
    metaTitle: 'Datenschutz | NEO THE AGENCY Germany',
    metaDescription:
      'Datenschutzhinweise zur Deutschland-Seite von NEO THE AGENCY inklusive Cookies, Hosting und Kontaktwegen.',
    intro:
      'Diese Datenschutzhinweise beschreiben die Datenverarbeitung auf der veröffentlichten Deutschland-Seite. Sie ersetzen keine individuellen Vertragsunterlagen oder die weitergehenden Hinweise auf der offiziellen NEO-Hauptwebsite.',
    sections: [
      {
        heading: 'Verantwortung und Quelle der Angaben',
        body: [
          'Die Deutschland-Seite verwendet ausschließlich Informationen, Kontaktangaben und Rechtshinweise, die auf der offiziellen NEO-Hauptwebsite oder im bereitgestellten Projektmaterial öffentlich verfügbar waren.',
          publishedContact.sourceNote,
        ],
      },
      {
        heading: 'Hosting und technische Verarbeitung',
        body: [
          'Diese veröffentlichte Seite wird über GitHub Pages ausgeliefert. Beim Abruf der Seite werden technisch notwendige Verbindungsdaten wie IP-Adresse, Zeitstempel und Browserinformationen durch den Hosting-Provider verarbeitet.',
          'Die Website selbst setzt keine Analyse-, Retargeting- oder Marketing-Cookies. Verarbeitet wird lediglich die lokal gespeicherte Cookie-Präferenz für diese Seite.',
        ],
      },
      {
        heading: 'Kontaktaufnahme',
        body: [
          `Wenn du über die Formulare auf dieser Seite eine Anfrage sendest, wird kein internes Backend angesprochen. Stattdessen wird dein Standard-Mailprogramm mit einer Nachricht an ${publishedContact.email} geöffnet oder du wirst auf den offiziellen Kontaktbereich von NEO weitergeleitet.`,
          'Die tatsächliche weitere Verarbeitung im Rahmen einer Anfrage richtet sich nach den Kontaktwegen und Rechtshinweisen der Hauptwebsite.',
        ],
      },
      {
        heading: 'Cookies und lokale Speicherung',
        body: [
          'Diese Seite nutzt nur technisch notwendige lokale Speicherung, um deine Auswahl im Cookie-Hinweis zu merken.',
          'Es werden keine optionalen Tracking- oder Werbe-Cookies gesetzt.',
        ],
      },
      {
        heading: 'Weiterführende Hinweise',
        body: [
          `Für ergänzende Angaben verweisen wir auf die offizielle Datenschutzerklärung von NEO: ${publishedContact.officialPrivacy}.`,
        ],
      },
    ],
  },
  {
    slug: 'impressum',
    label: 'Impressum',
    title: 'Impressum und Anbieterhinweise',
    metaTitle: 'Impressum | NEO THE AGENCY Germany',
    metaDescription:
      'Impressum und Anbieterhinweise der veröffentlichten Deutschland-Seite von NEO THE AGENCY.',
    intro:
      'Die nachstehenden Anbieterhinweise basieren auf den derzeit öffentlich veröffentlichten Kontaktdaten der NEO-Hauptwebsite.',
    sections: [
      {
        heading: 'Anbieterhinweise',
        body: [
          'NEO THE AGENCY',
          ...publishedContact.addressLines,
          `E-Mail: ${publishedContact.email}`,
          `Telefon: ${publishedContact.phoneDisplay}`,
        ],
      },
      {
        heading: 'Hinweis zur Deutschland-Seite',
        body: [
          'Diese Seite ist eine veröffentlichte GitHub-Pages-Version für den deutschen Markt. Sie dient der klareren Angebotsdarstellung der Kernleistungen Paid Ads, SEO und Webentwicklung.',
          'Sollten sich rechtliche Pflichtangaben, Ansprechpartner oder veröffentlichte Kontaktdaten der Hauptwebsite ändern, müssen diese Angaben angepasst werden.',
        ],
      },
      {
        heading: 'Verweise',
        body: [
          `Offizielle Website: ${publishedContact.officialSite}`,
          `Kontakt: ${publishedContact.officialContact}`,
          `Instagram: ${publishedContact.instagram}`,
        ],
      },
    ],
  },
  {
    slug: 'nutzungsbedingungen',
    label: 'Nutzungsbedingungen',
    title: 'Nutzungsbedingungen der veröffentlichten Deutschland-Seite',
    metaTitle: 'Nutzungsbedingungen | NEO THE AGENCY Germany',
    metaDescription:
      'Nutzungsbedingungen für die veröffentlichte Deutschland-Seite von NEO THE AGENCY.',
    intro:
      'Diese Nutzungsbedingungen regeln den Zugriff auf die veröffentlichte Deutschland-Seite. Sie ersetzen keine individuellen Angebote, Statements of Work oder Serviceverträge.',
    sections: [
      {
        heading: 'Nutzung der Inhalte',
        body: [
          'Die Inhalte dieser Website dienen der geschäftlichen Information über Leistungen, Arbeitsweise und Kontaktwege von NEO THE AGENCY.',
          'Inhalte, Texte, Designs und sonstige Materialien dürfen ohne vorherige schriftliche Zustimmung nicht außerhalb der eigenen Bewertung oder Anfrage weiterverwendet werden.',
        ],
      },
      {
        heading: 'Leistungsbeziehungen',
        body: [
          'Konkrete Leistungsumfänge, Termine, Vergütung und Erfolgskriterien werden ausschließlich in individuellen Angeboten und Vereinbarungen zwischen NEO und dem jeweiligen Kunden geregelt.',
          'Website-Inhalte, Cases und Kennzahlen sind daher als Einordnung des Arbeitsmodells zu verstehen, nicht als bindendes Leistungsversprechen.',
        ],
      },
      {
        heading: 'Weitere Hinweise',
        body: [
          `Für die offiziellen Terms of Service der Hauptwebsite verweisen wir ergänzend auf: ${publishedContact.officialTerms}.`,
        ],
      },
    ],
  },
]

export function findService(slug: string) {
  return servicePages.find((service) => service.slug === slug)
}

export function findLegalPage(slug: string) {
  return legalPages.find((page) => page.slug === slug)
}
