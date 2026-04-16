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
  parentSlug?: string
  locationKey?: string
  areaServed?: string
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
    pageLabel: 'Google Ads Agentur',
    kicker: 'Google Ads für qualifizierte Nachfrage und saubere Conversion-Strecken',
    title: 'Google Ads Agentur für Unternehmen, die Suchnachfrage in messbare Geschäftschancen übersetzen wollen',
    description:
      'NEO THE AGENCY verbindet Kampagnenarchitektur, Angebotsbotschaft, Landingpage-Handoffs und Conversion-Tracking, damit Google Ads nicht als isolierter Kanal arbeitet.',
    metaTitle: 'Paid Ads Agentur für Deutschland | NEO THE AGENCY',
    metaDescription:
      'Google Ads Agentur für Deutschland: NEO THE AGENCY verbindet Kampagnenstruktur, Landingpages und Conversion-Logik für planbare Nachfrage.',
    summary: [
      'Eine Google Ads Agentur plant, baut und optimiert Suchkampagnen für Unternehmen, die für relevante Suchanfragen sichtbar werden wollen. Entscheidend ist dabei nicht nur das Konto, sondern ob Suchintention, Angebot und Landingpage sauber zusammenpassen.',
      'NEO setzt Google Ads nicht als reines Media Buying auf. Der Kanal wird in die gesamte Conversion-Strecke eingebettet: von der Suchanfrage über die Anzeige und die Zielfläche bis zur Qualifizierung der Anfrage.',
      'Der Fokus liegt auf qualifizierter Nachfrage, klaren Lernzyklen und einem Setup, das auch mit mehr Budget stabil bleibt.',
    ],
    deliverables: [
      'Kampagnenarchitektur für Google Search und suchnahe Performance-Setups',
      'Angebots- und Anzeigentexte auf Basis realer Suchintention',
      'Landingpage-Handoffs mit klarer CTA- und Formularlogik',
      'Sauberes Conversion-Tracking für relevante Lead- und Qualitätssignale',
      'Reporting mit Fokus auf Nachfrage, CPL, Lead-Qualität und Conversion-Pfad',
    ],
    workflow: [
      'Angebotsfit prüfen: Suchintention, Marge, Kaufhürden und vorhandene Zielflächen bewerten.',
      'Kampagnenstruktur aufbauen: Suchbegriffe, Anzeigengruppen und Botschaften sauber nach Angebot ordnen.',
      'Landingpages und Tracking absichern: Zielflächen, Formulare und Conversion-Signale als Teil derselben Strecke aufsetzen.',
      'Daten in Optimierung übersetzen: Suchbegriffe, Anzeigen und Lead-Qualität laufend auf kommerzielle Relevanz prüfen.',
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
        question: 'Ist Google Ads für jedes Unternehmen geeignet?',
        answer:
          'Nein. Google Ads ist besonders stark, wenn bereits aktive Suchnachfrage existiert, das Angebot klar differenzierbar ist und eingehende Anfragen sauber bearbeitet werden können.',
      },
      {
        question: 'Übernimmt NEO nur die Kampagnen oder auch die Landingpages?',
        answer:
          'NEO denkt Kampagnen, Landingpages, Tracking und Conversion-Logik gemeinsam, weil die Ergebnisse sonst häufig an den Übergängen verloren gehen.',
      },
      {
        question: 'Wie schnell sieht man Resultate?',
        answer:
          'Google Ads liefert schneller Signale als SEO. Die ersten Wochen werden genutzt, um Suchbegriffe, Anzeigen, Gebote und Seiten datenbasiert zu justieren.',
      },
      {
        question: 'Welche Metriken sind wirklich wichtig?',
        answer:
          'Wichtiger als reine Klickdaten sind qualifizierte Leads, Conversion-Rate, CPL, Suchbegriffqualität und der Anteil der Anfragen, der in echte Sales-Chancen übergeht.',
      },
      {
        question: 'Arbeitet NEO nur mit Search oder auch mit anderen Kanälen?',
        answer:
          'Der Schwerpunkt liegt auf Google Ads. Bei Bedarf können Retargeting, CRM-Automation oder weitere Touchpoints an die Suchkampagnen angeschlossen werden.',
      },
      {
        question: 'Was unterscheidet gute Google Ads Betreuung von durchschnittlicher Betreuung?',
        answer:
          'Gute Betreuung verknüpft Suchintention, Angebotsbotschaft, Landingpage-Nutzen und Tracking. Durchschnittliche Betreuung optimiert oft nur innerhalb des Kontos.',
      },
    ],
  },
  {
    slug: 'seo-agentur',
    navLabel: 'SEO',
    pageLabel: 'SEO Agentur',
    kicker: 'SEO für qualifizierte Nachfrage und saubere Seitenstrukturen',
    title: 'SEO Agentur für Unternehmen, die organische Sichtbarkeit in qualifizierte Nachfrage übersetzen wollen',
    description:
      'NEO THE AGENCY verbindet Suchintention, Seitenstruktur, Copy und Conversion-Führung, damit SEO nicht als isolierter Content-Kanal endet.',
    metaTitle: 'SEO Agentur für Deutschland | NEO THE AGENCY',
    metaDescription:
      'SEO Agentur für Deutschland: NEO THE AGENCY verbindet Struktur, Content und Conversion-Pfade, damit organische Sichtbarkeit in qualifizierte Nachfrage mündet.',
    summary: [
      'Eine SEO Agentur hilft Unternehmen dabei, für relevante Suchanfragen sichtbar zu werden und diese Sichtbarkeit in sinnvolle Gespräche, Anfragen und Pipeline zu überführen.',
      'Für NEO bedeutet SEO nicht, möglichst viele Seiten zu produzieren. Der Schwerpunkt liegt auf Suchbegriffen mit echter Geschäftsrelevanz, auf Seiten mit klarem Nutzwert und auf einer Website, die organischen Traffic nicht im Leerlauf verliert.',
      'SEO wird deshalb als verbundenes System aus Recherche, Seitenarchitektur, Copy, interner Verlinkung und Conversion-Führung aufgebaut.',
    ],
    deliverables: [
      'Keyword- und Intent-Struktur für Kernservices mit kommerziellem Fokus',
      'Page Mapping für Home, Service-Seiten, About, Contact und sinnvolle Expansionen',
      'People-first Copy mit FAQ, Metadaten und schema-fähigen Fakten',
      'Interne Verlinkung zwischen Paid Ads, SEO und Webdesign',
      'Conversion-orientierte Seitengerüste statt textlastiger SEO-Flächen ohne Abschlussnähe',
    ],
    workflow: [
      'Nachfrage und Suchintention priorisieren: Welche Suchanfragen haben echte Abschlussnähe?',
      'Seitenarchitektur festziehen: Slugs, Seitenrollen, interne Links und Content-Prioritäten vor dem Build definieren.',
      'Master-Copy schreiben: klare Leistungen, FAQ, Kaufhürden und CTA-Pfade je Seite ausarbeiten.',
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
        question: 'Wie schnell wirkt SEO?',
        answer:
          'SEO ist kein Sofortkanal. Erste qualitative Verbesserungen an Seitenstruktur und Angebotsseiten können schnell umgesetzt werden, aber stabile Ranking-Effekte brauchen meist mehrere Monate.',
      },
      {
        question: 'Ist SEO für jedes Unternehmen sinnvoll?',
        answer:
          'SEO lohnt sich vor allem dann, wenn es relevante Suchnachfrage gibt, das Angebot klar erklärt werden kann und das Unternehmen bereit ist, Struktur, Inhalte und Conversion-Wege zu verbessern.',
      },
      {
        question: 'Arbeitet NEO nur strategisch oder auch in der Umsetzung?',
        answer:
          'Die Leistung ist auf Umsetzung ausgelegt und verbindet Recherche, Seitenplanung, Copy, interne Verlinkung, Metadaten und technische oder redaktionelle Umsetzung.',
      },
      {
        question: 'Wie unterscheidet sich SEO hier von klassischer Content-Produktion?',
        answer:
          'Der Fokus liegt auf Seiten mit echtem Geschäftsnutzen, nicht auf möglichst vielen Artikeln. Service-Seiten, kommerzielle FAQ und klare Conversion-Pfade haben Vorrang.',
      },
      {
        question: 'Wie spielen SEO und Google Ads zusammen?',
        answer:
          'Google Ads liefert schnellere Signale, während SEO nachhaltige Sichtbarkeit aufbaut. Wenn Messaging und Landingpages gemeinsam gedacht werden, profitieren beide Kanäle voneinander.',
      },
      {
        question: 'Welche Nachweise bringt NEO für SEO mit?',
        answer:
          'Auf der aktuellen NEO-Website werden für SEO keine separaten Ergebniskennzahlen ausgewiesen. Kommuniziert werden jedoch ein senioriges Teammodell, mehr als zehn Jahre Erfahrung und ein integrierter Delivery-Ansatz.',
      },
    ],
  },
  {
    slug: 'webdesign-agentur',
    navLabel: 'Webdesign',
    pageLabel: 'Webdesign Agentur',
    kicker: 'Webdesign für klarere Angebote, Vertrauen und Conversion',
    title: 'Webdesign Agentur für Websites, die Nachfrage sauber aufnehmen und in qualifizierte Anfragen überführen',
    description:
      'NEO THE AGENCY verbindet Design, Seitenstruktur, Copy und technische Umsetzung, damit die Website nicht zwischen Branding und Performance aufgeteilt wird.',
    metaTitle: 'Webdesign Agentur für Deutschland | NEO THE AGENCY',
    metaDescription:
      'Webdesign Agentur für Deutschland: NEO THE AGENCY baut Websites mit klarer Angebotsstruktur, Conversion-Führung und technischer Basis für Wachstum.',
    summary: [
      'Eine Webdesign Agentur plant und entwickelt Websites für Unternehmen, die ihr Angebot klarer präsentieren und bessere Conversion-Pfade schaffen wollen.',
      'NEO betrachtet Webdesign nicht als reine Gestaltung. Die Website ist die zentrale Zielfläche für Ads, SEO, Direktanfragen und spätere CRM-Prozesse.',
      'Im Fokus stehen Angebotsklarheit, mobile Lesbarkeit, CTA-Hierarchie, technische Basis und ein Aufbau, der mit weiteren Seiten sauber mitwachsen kann.',
    ],
    deliverables: [
      'Seitenstruktur für Home, Service-Seiten, About, Contact und rechtliche Pflichtseiten',
      'Visuelles System mit klaren Layout-Rhythmen, CTA-Hierarchie und responsiven Modulen',
      'Conversion-orientierte Hero-, Proof-, FAQ- und Kontaktmodule',
      'Technische Basis mit Routing, Metadaten, Schema und mobilem Performance-Fokus',
      'Launch-Readiness mit QA und sauberer Erweiterbarkeit für weitere Service-Seiten',
    ],
    workflow: [
      'Seitenrollen definieren: Welche Seitentypen werden wirklich gebraucht und welche Aufgabe hat jede Seite im Conversion-Pfad?',
      'Design-System aufbauen: Typografie, Farben, Karten, Buttons und Layout-Rhythmen markenklar und responsiv strukturieren.',
      'Copy und Module verbinden: Hero, Proof, FAQ und Kontaktlogik so entwickeln, dass Nutzerfragen sauber beantwortet werden.',
      'Technisch produktionsreif machen: Routing, Metadaten, strukturierte Daten und mobile Lesbarkeit für den Livegang absichern.',
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
        question: 'Was ist der Unterschied zwischen Webdesign und Webentwicklung hier?',
        answer:
          'Webdesign wird hier als Gesamtleistung verstanden, bei der Struktur, Copy, visuelles System und technische Umsetzung ineinandergreifen.',
      },
      {
        question: 'Baut NEO nur einzelne Landingpages oder ganze Websites?',
        answer:
          'Beides ist möglich. In vielen Fällen ist eine konsistente Website-Struktur sinnvoller als eine isolierte Einzel-Landingpage ohne tragfähigen Gesamtaufbau.',
      },
      {
        question: 'Ist die Website nur für SEO gedacht?',
        answer:
          'Nein. Die Website soll organische Sichtbarkeit unterstützen, aber ebenso gut mit Google Ads, Direktanfragen und weiterem Vertrieb funktionieren.',
      },
      {
        question: 'Wie viel Input muss ein Unternehmen liefern?',
        answer:
          'Das Unternehmen sollte Angebot, Zielgruppe, Hürden und vorhandene Materialien sauber einbringen. NEO übersetzt diese Grundlagen dann in Struktur, Copy und technische Prioritäten.',
      },
      {
        question: 'Wann ist ein Relaunch sinnvoll?',
        answer:
          'Ein Relaunch ist sinnvoll, wenn Angebot, Zielgruppe oder Kanalstrategie nicht mehr sauber auf der Website abgebildet werden oder Vertrauen, Lesbarkeit und Erweiterbarkeit sichtbar leiden.',
      },
      {
        question: 'Welche Nachweise bringt NEO für Webprojekte mit?',
        answer:
          'Auf der aktuellen NEO-Website werden Projekte aus Hospitality, Leadgenerierung und CRM-naher Webarbeit gezeigt. Das unterstreicht, dass Web hier als produktive Geschäftsstrecke verstanden wird.',
      },
    ],
  },
]

const tierOneLocations = [
  {
    key: 'duesseldorf',
    city: 'Düsseldorf',
    marketNote:
      'Der Markt rund um Düsseldorf ist dicht, vergleichsorientiert und häufig von dienstleistungsnahen B2B-Angeboten geprägt.',
  },
  {
    key: 'koeln',
    city: 'Köln',
    marketNote:
      'In Köln konkurrieren viele Angebote über Marke, Vertrauen und Klarheit in der Positionierung statt nur über Reichweite.',
  },
  {
    key: 'dortmund',
    city: 'Dortmund',
    marketNote:
      'In Dortmund und dem umliegenden Mittelstands-Umfeld zählt oft, ob Leistungen konkret, glaubwürdig und umsetzungsnah erklärt werden.',
  },
] as const

type TierOneLocation = (typeof tierOneLocations)[number]

function requireServicePage(slug: string) {
  const service = servicePages.find((entry) => entry.slug === slug)

  if (!service) {
    throw new Error(`Missing service page for slug: ${slug}`)
  }

  return service
}

function buildSeoGeoPage(location: TierOneLocation): ServicePage {
  const master = requireServicePage('seo-agentur')

  return {
    ...master,
    slug: `${master.slug}/${location.key}`,
    pageLabel: `SEO Agentur ${location.city}`,
    kicker: `SEO in ${location.city} für Unternehmen mit klarer Nachfrage- und Angebotslogik`,
    title: `SEO Agentur ${location.city} für Unternehmen, die lokale Sichtbarkeit in qualifizierte Anfragen übersetzen wollen`,
    description: `NEO THE AGENCY verbindet Suchintention, Seitenstruktur, lokale Relevanz und Conversion-Führung für Unternehmen in ${location.city}.`,
    metaTitle: `SEO Agentur ${location.city} | NEO THE AGENCY`,
    metaDescription: `SEO Agentur ${location.city}: NEO THE AGENCY verbindet Struktur, Content und Conversion-Pfade für Unternehmen mit lokaler und regionaler Nachfrage.`,
    summary: [
      `SEO Agentur ${location.city} ist für Unternehmen relevant, wenn organische Sichtbarkeit nicht nur Reichweite erzeugen, sondern in qualifizierte Gespräche und belastbare Anfragen münden soll.`,
      location.marketNote,
      `NEO baut lokale SEO-Seiten für ${location.city} deshalb nicht als isolierte Stadtvariante, sondern als Teil eines Systems aus Master-Seite, sinnvoller interner Verlinkung, klarer Angebotsbotschaft und sauberer CTA-Führung auf.`,
    ],
    deliverables: [
      `Lokale Keyword- und Intent-Struktur für ${location.city} mit Fokus auf kommerzielle Suchanfragen`,
      `Geo-adaptierte Service-Copy mit klarer Einordnung der Leistung für Unternehmen in ${location.city}`,
      'Interne Verlinkung zwischen Master-Seite, relevanten Stadtseiten und benachbarten Kernleistungen',
      'FAQ, Metadaten und strukturierte Daten mit kontrollierter lokaler Relevanz',
      'Conversion-orientierte Seitengerüste statt tokengetauschter Stadtseiten ohne Nutzwert',
    ],
    workflow: [
      `Lokale Suchintention priorisieren: Welche Kombinationen aus Leistung und ${location.city} haben echte Abschlussnähe?`,
      `Geo-Rolle definieren: Wie ergänzt die Seite die Master-Seite, ohne in Doorway-Logik zu kippen?`,
      `Copy auf Nutzwert prüfen: Welche Fragen und Kaufhürden sind für Interessenten in ${location.city} wirklich relevant?`,
      'Interne Links, Metadaten und CTA-Führung sauber mit dem restlichen Service-Cluster verzahnen.',
    ],
    proofNote:
      'Die öffentliche Beleglage bleibt dieselbe wie auf der Master-Seite. Für lokale Varianten sollten später zusätzliche Nachweise, Referenzen oder Marktsignale ergänzt werden, statt die Seite mit generischen Stadtphrasen zu überladen.',
    faqs: [
      {
        question: `Braucht man für ${location.city} wirklich eine eigene SEO-Seite?`,
        answer: `Nur dann, wenn Suchintention, Angebotsfit und lokaler Marktbezug dafür sprechen. Die Seite sollte einen klaren Zweck im Cluster haben und nicht nur als Stadtvariante existieren.`,
      },
      {
        question: `Wie unterscheidet sich die SEO-Seite für ${location.city} von der Master-Seite?`,
        answer: `Die Master-Seite erklärt die Leistung grundsätzlich. Die ${location.city}-Seite ergänzt sie um lokale Suchintention, regionale Relevanz und einen engeren Bezug zu typischen Entscheidungsfragen im jeweiligen Markt.`,
      },
      {
        question: `Wie verhindert NEO dünne Geo-Seiten für ${location.city}?`,
        answer: `Durch begrenzten Scope, klare Hierarchie zwischen Master und Geo-Seite, kontrollierte lokale Hinweise und Copy, die echte Kaufhürden adressiert statt nur Ortsnamen einzusetzen.`,
      },
      {
        question: `Ist Local SEO in ${location.city} nur für lokale Läden relevant?`,
        answer: `Nein. Auch B2B- und Dienstleistungsunternehmen profitieren davon, wenn Suchanfragen mit regionalem Bezug existieren und die Seite den Marktbezug glaubwürdig erklären kann.`,
      },
      {
        question: `Wie spielen SEO und Google Ads in ${location.city} zusammen?`,
        answer: `Google Ads kann lokale Nachfrage schneller testen, während SEO nachhaltige Sichtbarkeit aufbaut. Wenn beide Seitenstrukturen und Botschaften teilen, wird der lokale Funnel deutlich sauberer.`,
      },
      {
        question: `Welche nächsten Schritte sind für eine SEO-Seite in ${location.city} sinnvoll?`,
        answer: `Zuerst sollte geprüft werden, welche Suchanfragen, Unterseiten und internen Links wirklich gebraucht werden. Danach kann die Seite gezielt mit lokalen Proof-Signalen und konkreter Angebotslogik angereichert werden.`,
      },
    ],
    parentSlug: master.slug,
    locationKey: location.key,
    areaServed: location.city,
  }
}

function buildGoogleAdsGeoPage(location: TierOneLocation): ServicePage {
  const master = requireServicePage('paid-ads-agentur')

  return {
    ...master,
    slug: `${master.slug}/${location.key}`,
    pageLabel: `Google Ads Agentur ${location.city}`,
    kicker: `Google Ads in ${location.city} für Unternehmen mit klarer Nachfrage- und Lead-Logik`,
    title: `Google Ads Agentur ${location.city} für Unternehmen, die Suchnachfrage in messbare Geschäftschancen übersetzen wollen`,
    description: `NEO THE AGENCY verbindet Kampagnenstruktur, Landingpages und Conversion-Tracking für Unternehmen in ${location.city}.`,
    metaTitle: `Google Ads Agentur ${location.city} | NEO THE AGENCY`,
    metaDescription: `Google Ads Agentur ${location.city}: NEO THE AGENCY verbindet Kampagnenstruktur, Landingpages und Conversion-Logik für qualifizierte Nachfrage.`,
    summary: [
      `Google Ads Agentur ${location.city} ist für Unternehmen relevant, wenn aktive Suchnachfrage nicht nur eingekauft, sondern sauber in qualifizierte Leads und belastbare Lernzyklen übersetzt werden soll.`,
      location.marketNote,
      `NEO baut Google Ads für ${location.city} deshalb nicht als isoliertes Kampagnenkonto, sondern als verbundenes System aus Suchintention, Anzeigentext, Landingpage-Handoff, Tracking und klarer Auswertung der Lead-Qualität.`,
    ],
    deliverables: [
      `Suchkampagnen-Struktur für ${location.city} mit Fokus auf relevante Angebots- und Nachfragecluster`,
      'Anzeigentexte und Messaging auf Basis realer Suchintention und Conversion-Ziel',
      'Landingpage-Handoffs mit klarer CTA- und Formularlogik',
      'Tracking für Leads, Qualitäts-Signale und verwertbare Optimierungsdaten',
      'Interne Verlinkung zwischen Google Ads, SEO und Webdesign innerhalb des Stadt-Clusters',
    ],
    workflow: [
      `Suchnachfrage in ${location.city} prüfen: Welche Begriffe und Services sind kaufnah genug für bezahlten Traffic?`,
      'Kampagnen und Zielflächen gemeinsam strukturieren, damit Suchbegriffe nicht von der Angebotsbotschaft getrennt laufen.',
      'Conversion-Signale absichern: Formulare, Tracking und Qualifizierung müssen dieselbe Logik tragen.',
      `Daten in Optimierung übersetzen: Suchbegriffe, Budgets und Lead-Qualität für ${location.city} laufend schärfen.`,
    ],
    proofNote:
      'Die öffentliche Proof-Basis stammt weiterhin aus den übergeordneten NEO-Cases. Lokale Seiten wie diese sollten später durch standortnahe Resultate, Referenzen oder Marktbeispiele ergänzt werden, sobald sie belegbar sind.',
    faqs: [
      {
        question: `Braucht man für ${location.city} eine eigene Google-Ads-Seite?`,
        answer: `Eine eigene Seite ist dann sinnvoll, wenn lokaler Suchbezug, Angebotsfit und Landingpage-Logik eine klar getrennte Ansprache rechtfertigen. Ohne diesen Unterschied entsteht schnell nur zusätzlicher Pflegeaufwand.`,
      },
      {
        question: `Was ist bei Google Ads in ${location.city} wichtiger als reine Klicks?`,
        answer: `Entscheidend sind qualifizierte Leads, Conversion-Rate, CPL, Suchbegriffqualität und der Anteil der Anfragen, der tatsächlich in belastbare Sales-Chancen übergeht.`,
      },
      {
        question: `Übernimmt NEO für ${location.city} nur die Kampagnen oder auch die Landingpages?`,
        answer: `Die Leistung ist als gemeinsame Strecke gedacht. Kampagnen, Botschaft, Landingpage-Handoff und Tracking werden zusammen gedacht, weil die Performance sonst an den Übergängen verloren geht.`,
      },
      {
        question: `Ist Google Ads in ${location.city} nur für große Budgets sinnvoll?`,
        answer: `Nicht automatisch. Wichtiger als das absolute Budget ist, ob das Angebot klar differenzierbar ist, genug Suchnachfrage existiert und das Unternehmen eingehende Leads sauber bearbeiten kann.`,
      },
      {
        question: `Wie unterscheiden sich die Seiten für ${location.city} und die Master-Seite?`,
        answer: `Die Master-Seite erklärt den grundsätzlichen Leistungsansatz. Die Stadtseite dient dazu, lokale Suchintention, regionale Relevanz und angepasste Conversion-Hinweise sauber abzubilden.`,
      },
      {
        question: `Wie spielen Google Ads und SEO in ${location.city} zusammen?`,
        answer: `Google Ads kann Nachfrage schnell testen und Signale liefern, während SEO nachhaltige Sichtbarkeit aufbaut. Wenn beide Seiten logisch verbunden sind, profitiert der gesamte lokale Funnel.`,
      },
    ],
    parentSlug: master.slug,
    locationKey: location.key,
    areaServed: location.city,
  }
}

function buildWebdesignGeoPage(location: TierOneLocation): ServicePage {
  const master = requireServicePage('webdesign-agentur')

  return {
    ...master,
    slug: `${master.slug}/${location.key}`,
    pageLabel: `Webdesign Agentur ${location.city}`,
    kicker: `Webdesign in ${location.city} für klarere Angebote, Vertrauen und Conversion`,
    title: `Webdesign Agentur ${location.city} für Websites, die Nachfrage sauber aufnehmen und in qualifizierte Anfragen überführen`,
    description: `NEO THE AGENCY verbindet Design, Seitenstruktur und technische Umsetzung für Unternehmen in ${location.city}, die ihre Website als produktive Zielfläche brauchen.`,
    metaTitle: `Webdesign Agentur ${location.city} | NEO THE AGENCY`,
    metaDescription: `Webdesign Agentur ${location.city}: NEO THE AGENCY baut Websites mit klarer Angebotsstruktur, Conversion-Führung und technischer Basis für Wachstum.`,
    summary: [
      `Webdesign Agentur ${location.city} ist für Unternehmen relevant, wenn die Website nicht nur gut aussehen, sondern Angebote verständlich erklären und qualifizierte Anfragen sauber aufnehmen soll.`,
      location.marketNote,
      `NEO baut Webdesign für ${location.city} deshalb nicht als Oberflächenprojekt, sondern als zentrale Zielfläche für Ads, SEO, Direktanfragen und spätere Vertriebs- oder CRM-Prozesse.`,
    ],
    deliverables: [
      `Seitenstruktur für Unternehmen in ${location.city} mit klarer Angebots- und Kontaktlogik`,
      'Visuelles System mit responsiven Rhythmen, CTA-Hierarchie und lesbarer Content-Struktur',
      'Hero-, Proof-, FAQ- und Kontaktmodule mit Conversion-Fokus',
      'Technische Basis mit Routing, Metadaten, Schema und mobiler Performance',
      'Interne Verlinkung zwischen Webdesign, SEO und Google Ads innerhalb des lokalen Clusters',
    ],
    workflow: [
      `Seitenrollen für ${location.city} definieren: Welche Seitentypen werden wirklich gebraucht und wie greifen sie zusammen?`,
      'Design-System und Angebotsklarheit verbinden, damit Marke und Conversion nicht gegeneinander arbeiten.',
      'Copy, Module und CTA-Führung gemeinsam aufbauen, statt Design und Inhalt getrennt zu behandeln.',
      'Technisch produktionsreif ausliefern: Struktur, Metadaten und mobile Lesbarkeit für den Livegang absichern.',
    ],
    proofNote:
      'Auch auf den Stadtseiten sollten öffentliche Nachweise sauber eingeordnet bleiben. Lokale Varianten gewinnen erst dann zusätzlich an Stärke, wenn reale Referenzen oder Marktsignale für den jeweiligen Standort vorliegen.',
    faqs: [
      {
        question: `Braucht man für ${location.city} eine eigene Webdesign-Seite?`,
        answer: `Nur dann, wenn lokale Suchintention und Angebotsfit eine klar eigene Seite rechtfertigen. Die Stadtseite sollte einen nachvollziehbaren Nutzen innerhalb des gesamten Seitenclusters haben.`,
      },
      {
        question: `Wie unterscheidet sich die Webdesign-Seite für ${location.city} von der Master-Seite?`,
        answer: `Die Master-Seite erklärt den grundsätzlichen Leistungsansatz. Die Stadtseite ergänzt lokale Relevanz, regionale Suchintention und eine präzisere Einordnung typischer Anforderungen im jeweiligen Markt.`,
      },
      {
        question: `Ist die Website für ${location.city} nur für SEO gedacht?`,
        answer: `Nein. Die Seite soll organische Sichtbarkeit unterstützen, aber ebenso gut mit Google Ads, Direktanfragen und späteren Vertriebsprozessen funktionieren.`,
      },
      {
        question: `Was ist bei Webdesign in ${location.city} wichtiger als schöne Optik?`,
        answer: `Angebotsklarheit, Lesbarkeit, Vertrauenssignale, CTA-Hierarchie und eine technische Basis, die spätere Service- oder Kampagnenseiten sauber tragen kann.`,
      },
      {
        question: `Wann ist für Unternehmen in ${location.city} ein Relaunch sinnvoll?`,
        answer: `Ein Relaunch ist sinnvoll, wenn Angebot, Zielgruppe oder Kanalstrategie nicht mehr sauber auf der Website abgebildet werden oder Vertrauen, Lesbarkeit und Erweiterbarkeit sichtbar leiden.`,
      },
      {
        question: `Wie spielen Webdesign, SEO und Google Ads in ${location.city} zusammen?`,
        answer: `Die Website ist die Zielfläche für beide Nachfragekanäle. Wenn Seitenstruktur, Copy und Conversion-Führung sauber aufgebaut sind, können SEO und Google Ads dieselbe Strecke deutlich effektiver nutzen.`,
      },
    ],
    parentSlug: master.slug,
    locationKey: location.key,
    areaServed: location.city,
  }
}

export const geoServicePages: ServicePage[] = [
  ...tierOneLocations.map(buildSeoGeoPage),
  ...tierOneLocations.map(buildGoogleAdsGeoPage),
  ...tierOneLocations.map(buildWebdesignGeoPage),
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
      'Diese Version fokussiert bewusst die drei Kernleistungen Google Ads, SEO und Webdesign. Weitere Themen wie CRM, Automationen oder AI werden nur dort erwähnt, wo sie die Kernleistungen sinnvoll ergänzen.',
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
          'Diese Seite ist eine veröffentlichte GitHub-Pages-Version für den deutschen Markt. Sie dient der klareren Angebotsdarstellung der Kernleistungen Google Ads, SEO und Webdesign.',
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
  return [...servicePages, ...geoServicePages].find((service) => service.slug === slug)
}

export function findLegalPage(slug: string) {
  return legalPages.find((page) => page.slug === slug)
}
