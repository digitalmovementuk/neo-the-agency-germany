import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = '/Users/raoulito/digital-movement-uk/NEO THE AGENCY GERMANY'
const RESEARCH_DIR = path.join(ROOT, 'research')
const TODAY = process.env.KEYWORD_RUN_DATE || '2026-04-16'
const TARGET_ROWS = Number(process.env.KEYWORD_TARGET_ROWS || 400)

const SEMRUSH_BACKBONE_PATH = path.join(
  RESEARCH_DIR,
  'semrush-keyword-research-2026-04-16.json',
)
const RAW_EVIDENCE_PATH = path.join(
  RESEARCH_DIR,
  `public-keyword-evidence-${TODAY}.json`,
)
const OUTPUT_CSV_PATH = path.join(
  RESEARCH_DIR,
  `seo-sitemap-artifact-a-400-public-expansion-${TODAY}.csv`,
)

const LOCATIONS = [
  { name: 'Dusseldorf', display: 'Dusseldorf', slug: 'duesseldorf', tier: 'Tier 1' },
  { name: 'Koln', display: 'Koeln', slug: 'koeln', tier: 'Tier 1' },
  { name: 'Dortmund', display: 'Dortmund', slug: 'dortmund', tier: 'Tier 1' },
  { name: 'Essen', display: 'Essen', slug: 'essen', tier: 'Tier 2' },
  { name: 'Duisburg', display: 'Duisburg', slug: 'duisburg', tier: 'Tier 2' },
  { name: 'Bochum', display: 'Bochum', slug: 'bochum', tier: 'Tier 2' },
  { name: 'Wuppertal', display: 'Wuppertal', slug: 'wuppertal', tier: 'Tier 2' },
  { name: 'Bonn', display: 'Bonn', slug: 'bonn', tier: 'Tier 3' },
  { name: 'Munster', display: 'Muenster', slug: 'muenster', tier: 'Tier 3' },
  {
    name: 'Monchengladbach',
    display: 'Moenchengladbach',
    slug: 'moenchengladbach',
    tier: 'Tier 3',
  },
  {
    name: 'Gelsenkirchen',
    display: 'Gelsenkirchen',
    slug: 'gelsenkirchen',
    tier: 'Tier 3',
  },
  { name: 'Oberhausen', display: 'Oberhausen', slug: 'oberhausen', tier: 'Tier 3' },
  { name: 'Hagen', display: 'Hagen', slug: 'hagen', tier: 'Tier 3' },
  { name: 'Hamm', display: 'Hamm', slug: 'hamm', tier: 'Tier 3' },
]

const INDUSTRIES = [
  'b2b',
  'ecommerce',
  'shop',
  'immobilien',
  'hotel',
  'tourismus',
  'coaching',
  'zahnarzt',
  'arzt',
  'anwalt',
  'steuerberater',
  'handwerk',
  'photovoltaik',
  'maschinenbau',
  'saas',
  'industrie',
]

const BANNED_TOKENS = [
  'jobs',
  'job',
  'karriere',
  'gehalt',
  'ausbildung',
  'praktikum',
  'kununu',
  'glassdoor',
  'linkedin',
  'wikipedia',
  'youtube',
  'reddit',
  'forum',
  'news',
  'template',
  'vorlage',
  'software',
  'tool',
  'tools',
  'kurs',
  'seminar',
  'studium',
  'bedeutung',
  'definition',
  'erfahrungen',
  'bewertung',
  'bewertungen',
  'beste',
  'top ',
  'gmbh',
  'login',
  'impressum',
  'kontakt',
  'referenzen',
]

const SERVICES = [
  {
    id: 'seo',
    label: 'SEO',
    briefLabel: 'Search Engine Optimisation (SEO)',
    slug: 'seo',
    primaryBase: 'seo',
    recognizedTokens: ['seo', 'suchmaschinenoptimierung', 'local seo'],
    mandatoryQueries: [
      'seo agentur',
      'seo beratung',
      'seo audit',
      'seo kosten',
      'local seo',
      'technisches seo',
      'ecommerce seo',
      'b2b seo',
      'seo agentur dusseldorf',
      'seo agentur koeln',
      'seo agentur dortmund',
    ],
    modifiers: [
      'agentur',
      'beratung',
      'betreuung',
      'audit',
      'strategie',
      'preise',
      'kosten',
      'local',
      'lokal',
      'technisches',
      'content',
      'relaunch',
      'migration',
      'b2b',
      'ecommerce',
      'leadgenerierung',
    ],
    backfillModifiers: ['beratung', 'audit', 'b2b'],
    meta:
      'Technische SEO, saubere Informationsarchitektur und klare Conversion-Pfade fuer organisches Wachstum.',
    crossService: 'google-ads',
    serviceQuota: 134,
  },
  {
    id: 'google-ads',
    label: 'Google Ads',
    briefLabel: 'Paid Ads',
    slug: 'google-ads',
    primaryBase: 'google ads',
    recognizedTokens: ['google ads', 'sea', 'ppc', 'performance marketing'],
    mandatoryQueries: [
      'google ads agentur',
      'google ads betreuung',
      'google ads audit',
      'google ads kosten',
      'google ads landingpage',
      'google ads leadgenerierung',
      'google ads b2b',
      'google ads ecommerce',
      'google ads agentur dusseldorf',
      'google ads agentur koeln',
      'google ads agentur dortmund',
    ],
    modifiers: [
      'agentur',
      'beratung',
      'betreuung',
      'audit',
      'strategie',
      'kosten',
      'preise',
      'landingpage',
      'leadgenerierung',
      'b2b',
      'ecommerce',
      'remarketing',
      'pmax',
      'search',
      'conversion tracking',
    ],
    backfillModifiers: ['betreuung', 'landingpage', 'b2b'],
    meta:
      'Strategie, Setup und Optimierung fuer messbare Nachfrage, qualifizierte Leads und klare Conversion-Logik.',
    crossService: 'seo',
    serviceQuota: 133,
  },
  {
    id: 'webdesign',
    label: 'Webdesign',
    briefLabel: 'Website Development',
    slug: 'webdesign',
    primaryBase: 'webdesign',
    recognizedTokens: ['webdesign', 'webentwicklung', 'website'],
    mandatoryQueries: [
      'webdesign agentur',
      'webdesign agentur dusseldorf',
      'webdesign agentur koeln',
      'webdesign agentur dortmund',
      'website erstellen lassen',
      'webentwicklung agentur',
      'landingpage agentur',
      'wordpress agentur',
      'b2b webdesign',
      'ecommerce webdesign',
      'webdesign relaunch',
    ],
    modifiers: [
      'agentur',
      'landingpage',
      'wordpress',
      'relaunch',
      'ux',
      'conversion',
      'b2b',
      'ecommerce',
      'website erstellen lassen',
      'webentwicklung',
      'corporate website',
      'leadgenerierung',
      'beratung',
    ],
    backfillModifiers: ['landingpage', 'wordpress', 'b2b'],
    meta:
      'Strategie, Design und Entwicklung moderner Websites mit klarem Angebotsfokus und Conversion-Fuehrung.',
    crossService: 'seo',
    serviceQuota: 133,
  },
]

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function slugify(text) {
  return normalize(text).replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

function titleCase(text) {
  return text
    .split(' ')
    .filter(Boolean)
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(' ')
}

function sourceLabel(source) {
  return (
    {
      google: 'Google Suggest',
      bing: 'Bing Autosuggest',
      ddg: 'DuckDuckGo Autosuggest',
      seed: 'Backbone Seed',
      pattern: 'Backbone Pattern',
    }[source] || source
  )
}

async function fetchJson(url) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(5000),
    headers: {
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    },
  })

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} for ${url}`)
  }

  return response.json()
}

async function getSuggestions(source, query) {
  try {
    if (source === 'google') {
      const data = await fetchJson(
        `https://suggestqueries.google.com/complete/search?client=firefox&hl=de&q=${encodeURIComponent(
          query,
        )}`,
      )
      return Array.isArray(data?.[1]) ? data[1] : []
    }

    if (source === 'bing') {
      const data = await fetchJson(
        `https://api.bing.com/osjson.aspx?query=${encodeURIComponent(query)}&market=de-DE`,
      )
      return Array.isArray(data?.[1]) ? data[1] : []
    }

    if (source === 'ddg') {
      const data = await fetchJson(
        `https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&type=list`,
      )
      return Array.isArray(data) ? data.map((item) => item.phrase).filter(Boolean) : []
    }
  } catch (error) {
    return [{ __error: String(error) }]
  }

  return []
}

function detectLocation(query) {
  const normalized = normalize(query)
  return LOCATIONS.find((location) => normalized.includes(location.name.toLowerCase()))
}

function detectIndustry(query) {
  const normalized = normalize(query)
  return INDUSTRIES.find((industry) => normalized.includes(industry))
}

function detectModifier(service, query) {
  const normalized = normalize(query)
  return service.modifiers.find((modifier) => normalized.includes(normalize(modifier))) || 'agentur'
}

function detectService(query, seedServiceId) {
  const normalized = normalize(query)
  const explicit =
    SERVICES.find((service) =>
      service.recognizedTokens.some((token) => normalized.includes(normalize(token))),
    ) || null

  if (explicit) return explicit
  return SERVICES.find((service) => service.id === seedServiceId) || null
}

function isValidKeyword(keyword) {
  const normalized = normalize(keyword)
  if (!normalized) return false
  if (normalized.split(' ').length > 8) return false
  if (BANNED_TOKENS.some((token) => normalized.includes(token))) return false
  return true
}

function buildSeeds() {
  const seeds = []

  for (const service of SERVICES) {
    seeds.push({ serviceId: service.id, query: service.primaryBase, type: 'base' })

    for (const query of service.mandatoryQueries) {
      seeds.push({ serviceId: service.id, query, type: 'mandatory' })
    }

    for (const modifier of service.modifiers) {
      seeds.push({
        serviceId: service.id,
        query: `${service.primaryBase} ${modifier}`,
        type: 'modifier',
      })
    }

    for (const location of LOCATIONS) {
      seeds.push({
        serviceId: service.id,
        query: `${service.primaryBase} agentur ${location.display}`,
        type: 'geo',
      })
    }

    for (const industry of INDUSTRIES) {
      seeds.push({
        serviceId: service.id,
        query: `${service.primaryBase} ${industry}`,
        type: 'industry',
      })
    }
  }

  const deduped = new Map()
  for (const seed of seeds) {
    deduped.set(`${seed.serviceId}::${normalize(seed.query)}`, seed)
  }
  return [...deduped.values()]
}

function bucketPriority(tier) {
  return { Master: 0, 'Tier 1': 1, 'Tier 2': 2, 'Tier 3': 3, Expansion: 4 }[tier] ?? 5
}

function scoreCandidate(candidate, semrushQueries) {
  let score = candidate.sources.size * 14
  score += candidate.seedHits.size * 2

  if (candidate.semrushMatch) score += 40
  if (candidate.pageType === 'master') score += 20
  if (candidate.pageType === 'geo') score += 16
  if (candidate.pageType === 'geo-industry') score += 14
  if (candidate.pageType === 'modifier') score += 10
  if (candidate.location?.tier === 'Tier 1') score += 10
  if (candidate.location?.tier === 'Tier 2') score += 6
  if (candidate.location?.tier === 'Tier 3') score += 3

  if (['agentur', 'beratung', 'betreuung', 'audit', 'landingpage'].includes(candidate.modifier))
    score += 8
  if (['preise', 'kosten'].includes(candidate.modifier)) score += 5
  if (candidate.industry) score += 6
  if (candidate.patternBackfill) score -= 6
  if (candidate.sources.has('google') && candidate.sources.size > 1) score += 4
  if (candidate.focusKeyword.split(' ').length <= 5) score += 3

  const semrushEntry = semrushQueries[normalize(candidate.focusKeyword)]
  if (semrushEntry?.intent === 'Commercial') score += 10
  return score
}

function derivePageType(candidate) {
  if (candidate.focusKeyword === candidate.service.masterKeyword) return 'master'
  if (candidate.location && candidate.industry) return 'geo-industry'
  if (candidate.location && candidate.modifier !== 'agentur') return 'geo-modifier'
  if (candidate.location) return 'geo'
  if (candidate.industry && candidate.modifier !== 'agentur') return 'industry-modifier'
  if (candidate.industry) return 'industry'
  if (candidate.modifier !== 'agentur') return 'modifier'
  return 'expansion'
}

function buildSlug(candidate) {
  if (candidate.pageType === 'master') return `/${candidate.service.slug}/`
  if (candidate.pageType === 'geo') return `/${candidate.service.slug}/${candidate.location.slug}/`
  if (candidate.pageType === 'geo-modifier')
    return `/${candidate.service.slug}/${candidate.location.slug}/${slugify(candidate.modifier)}/`
  if (candidate.pageType === 'geo-industry')
    return `/${candidate.service.slug}/${candidate.location.slug}/${slugify(candidate.industry)}/`
  if (candidate.pageType === 'industry') return `/${candidate.service.slug}/${slugify(candidate.industry)}/`
  if (candidate.pageType === 'industry-modifier')
    return `/${candidate.service.slug}/${slugify(candidate.industry)}/${slugify(candidate.modifier)}/`
  if (candidate.pageType === 'modifier') return `/${candidate.service.slug}/${slugify(candidate.modifier)}/`
  return `/${candidate.service.slug}/${slugify(candidate.focusKeyword.replace(candidate.service.primaryBase, '').trim())}/`
}

function buildRow(candidate, semrushQueries) {
  const semrushEntry = semrushQueries[normalize(candidate.focusKeyword)] || null
  const titleTag = `${titleCase(candidate.focusKeyword)} | NEO THE AGENCY`
  const metaDescription = candidate.location
    ? `NEO THE AGENCY bietet ${candidate.focusKeyword} fuer Unternehmen in ${candidate.location.display}. ${candidate.service.meta}`
    : `NEO THE AGENCY bietet ${candidate.focusKeyword}. ${candidate.service.meta}`

  const parentPage =
    candidate.pageType === 'master'
      ? ''
      : candidate.location
        ? `/${candidate.service.slug}/${candidate.location.slug}/`.replace(
            `/${candidate.service.slug}/${candidate.location.slug}/`,
            candidate.pageType === 'geo' ? `/${candidate.service.slug}/` : `/${candidate.service.slug}/${candidate.location.slug}/`,
          )
        : `/${candidate.service.slug}/`

  const siblingLinkTargets = candidate.location
    ? LOCATIONS.filter(
        (location) => location.name !== candidate.location.name && location.tier === candidate.location.tier,
      )
        .slice(0, 3)
        .map((location) => `/${candidate.service.slug}/${location.slug}/`)
        .join(' | ')
    : SERVICES.filter((service) => service.id !== candidate.service.id)
        .slice(0, 2)
        .map((service) => `/${service.slug}/`)
        .join(' | ')

  const crossServiceTarget = candidate.location
    ? `/${candidate.service.crossService}/${candidate.location.slug}/`
    : `/${candidate.service.crossService}/`

  const evidenceSources = [...candidate.sources].map(sourceLabel).join(' | ')
  const confidence =
    candidate.semrushMatch || candidate.sources.size >= 2
      ? 'high'
      : candidate.patternBackfill
        ? 'medium'
        : 'low'

  const publishRecommendation =
    candidate.semrushMatch || (candidate.sources.size >= 2 && bucketPriority(candidate.priorityTier) <= 2)
      ? 'validate-first'
      : candidate.patternBackfill
        ? 'backlog-cluster'
        : 'research-only'

  return {
    service: candidate.service.label,
    modifier: candidate.modifier,
    location: candidate.location?.display || '',
    language: 'de',
    page_type: candidate.pageType,
    focus_keyword: candidate.focusKeyword,
    suggested_slug: buildSlug(candidate),
    title_tag: titleTag,
    meta_description: metaDescription,
    parent_page: parentPage,
    sibling_link_targets: siblingLinkTargets,
    cross_service_target: crossServiceTarget,
    monthly_volume: semrushEntry?.volume || '',
    keyword_difficulty: semrushEntry?.kd || '',
    intent: semrushEntry?.intent || (candidate.pageType.includes('geo') || candidate.modifier === 'agentur' ? 'Commercial' : ''),
    priority_tier: candidate.priorityTier,
    notes: [
      candidate.semrushMatch
        ? 'Semrush-confirmed keyword from the saved backbone research.'
        : 'Expanded from public suggestion sources using the Semrush backbone.',
      candidate.patternBackfill
        ? 'Added via controlled backbone patterning to complete the 400-row opportunity set.'
        : '',
      candidate.industry ? `Industry angle: ${candidate.industry}.` : '',
      `Confidence: ${confidence}.`,
      `Evidence count: ${candidate.sources.size}.`,
      `Publish recommendation: ${publishRecommendation}.`,
    ]
      .filter(Boolean)
      .join(' '),
    evidence_sources: evidenceSources,
    evidence_count: String(candidate.sources.size),
    backbone_status: candidate.semrushMatch ? 'semrush-confirmed' : candidate.patternBackfill ? 'backbone-patterned' : 'public-expansion',
    publish_recommendation: publishRecommendation,
  }
}

function csvEscape(value) {
  const text = value == null ? '' : String(value)
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
}

async function main() {
  await fs.mkdir(RESEARCH_DIR, { recursive: true })
  const semrushRaw = JSON.parse(await fs.readFile(SEMRUSH_BACKBONE_PATH, 'utf8'))
  const semrushQueries = Object.fromEntries(
    Object.entries(semrushRaw.rawQueries || {}).map(([key, value]) => [normalize(key), value]),
  )

  for (const service of SERVICES) {
    service.masterKeyword =
      service.id === 'seo'
        ? 'seo agentur'
        : service.id === 'google-ads'
          ? 'google ads agentur'
          : 'webdesign agentur'
  }

  const seeds = buildSeeds()
  const rawEvidence = { generatedAt: new Date().toISOString(), seeds: [], sources: {} }
  const candidates = new Map()

  async function processSeed(seed) {
    rawEvidence.seeds.push(seed)
    const sourceEntries = await Promise.all(
      ['google', 'bing', 'ddg'].map(async (source) => [source, await getSuggestions(source, seed.query)]),
    )
    const sourceResults = Object.fromEntries(sourceEntries)

    for (const [source, suggestions] of sourceEntries) {
      
      for (const suggestion of suggestions) {
        if (!suggestion || typeof suggestion !== 'string') continue
        if (!isValidKeyword(suggestion)) continue

        const service = detectService(suggestion, seed.serviceId)
        if (!service) continue

        const focusKeyword = normalize(suggestion)
        const key = `${service.id}::${focusKeyword}`
        const existing =
          candidates.get(key) ||
          {
            focusKeyword,
            service,
            sources: new Set(),
            seedHits: new Set(),
            rawVariants: new Set(),
            patternBackfill: false,
          }

        existing.sources.add(source)
        existing.seedHits.add(seed.query)
        existing.rawVariants.add(suggestion)
        candidates.set(key, existing)
      }
    }
    rawEvidence.sources[seed.query] = sourceResults
  }

  const BATCH_SIZE = 10
  for (let index = 0; index < seeds.length; index += BATCH_SIZE) {
    const batch = seeds.slice(index, index + BATCH_SIZE)
    await Promise.all(batch.map(processSeed))
  }

  for (const service of SERVICES) {
    for (const query of service.mandatoryQueries) {
      const focusKeyword = normalize(query)
      const key = `${service.id}::${focusKeyword}`
      const existing =
        candidates.get(key) ||
        {
          focusKeyword,
          service,
          sources: new Set(),
          seedHits: new Set(),
          rawVariants: new Set(),
          patternBackfill: true,
        }
      existing.sources.add('seed')
      existing.seedHits.add(query)
      existing.rawVariants.add(query)
      candidates.set(key, existing)
    }

    for (const location of LOCATIONS) {
      const geoQuery = normalize(`${service.primaryBase} agentur ${location.display}`)
      const key = `${service.id}::${geoQuery}`
      const existing =
        candidates.get(key) ||
        {
          focusKeyword: geoQuery,
          service,
          sources: new Set(),
          seedHits: new Set(),
          rawVariants: new Set(),
          patternBackfill: true,
        }
      existing.sources.add('pattern')
      existing.seedHits.add(`${service.primaryBase} agentur ${location.display}`)
      existing.rawVariants.add(`${service.primaryBase} agentur ${location.display}`)
      candidates.set(key, existing)

      for (const modifier of service.backfillModifiers) {
        const modifierQuery = normalize(`${service.primaryBase} ${modifier} ${location.display}`)
        const modifierKey = `${service.id}::${modifierQuery}`
        const modifierExisting =
          candidates.get(modifierKey) ||
          {
            focusKeyword: modifierQuery,
            service,
            sources: new Set(),
            seedHits: new Set(),
            rawVariants: new Set(),
            patternBackfill: true,
          }
        modifierExisting.sources.add('pattern')
        modifierExisting.seedHits.add(`${service.primaryBase} ${modifier} ${location.display}`)
        modifierExisting.rawVariants.add(`${service.primaryBase} ${modifier} ${location.display}`)
        candidates.set(modifierKey, modifierExisting)
      }
    }
  }

  const candidateRows = []
  for (const candidate of candidates.values()) {
    candidate.location = detectLocation(candidate.focusKeyword) || null
    candidate.industry = detectIndustry(candidate.focusKeyword) || ''
    candidate.modifier = detectModifier(candidate.service, candidate.focusKeyword)
    candidate.semrushMatch = Boolean(semrushQueries[normalize(candidate.focusKeyword)])
    candidate.pageType = derivePageType(candidate)
    candidate.priorityTier = candidate.pageType === 'master' ? 'Master' : candidate.location?.tier || 'Expansion'
    candidate.score = scoreCandidate(candidate, semrushQueries)
    candidateRows.push(candidate)
  }

  const selected = []
  const usedSlugs = new Set()

  for (const service of SERVICES) {
    const serviceCandidates = candidateRows
      .filter((candidate) => candidate.service.id === service.id)
      .sort((left, right) => {
        if (bucketPriority(left.priorityTier) !== bucketPriority(right.priorityTier)) {
          return bucketPriority(left.priorityTier) - bucketPriority(right.priorityTier)
        }
        return right.score - left.score
      })

    for (const candidate of serviceCandidates) {
      const row = buildRow(candidate, semrushQueries)
      if (usedSlugs.has(row.suggested_slug)) continue
      selected.push(row)
      usedSlugs.add(row.suggested_slug)
      if (selected.filter((item) => item.service === service.label).length >= service.serviceQuota) break
    }
  }

  if (selected.length < TARGET_ROWS) {
    const leftovers = candidateRows
      .sort((left, right) => right.score - left.score)
      .map((candidate) => buildRow(candidate, semrushQueries))
      .filter((row) => !usedSlugs.has(row.suggested_slug))

    for (const row of leftovers) {
      selected.push(row)
      usedSlugs.add(row.suggested_slug)
      if (selected.length >= TARGET_ROWS) break
    }
  }

  selected.sort((left, right) => {
    if (bucketPriority(left.priority_tier) !== bucketPriority(right.priority_tier)) {
      return bucketPriority(left.priority_tier) - bucketPriority(right.priority_tier)
    }
    return left.service.localeCompare(right.service) || left.focus_keyword.localeCompare(right.focus_keyword)
  })

  const headers = [
    'service',
    'modifier',
    'location',
    'language',
    'page_type',
    'focus_keyword',
    'suggested_slug',
    'title_tag',
    'meta_description',
    'parent_page',
    'sibling_link_targets',
    'cross_service_target',
    'monthly_volume',
    'keyword_difficulty',
    'intent',
    'priority_tier',
    'notes',
    'evidence_sources',
    'evidence_count',
    'backbone_status',
    'publish_recommendation',
  ]

  const csv = [headers.join(',')]
  for (const row of selected.slice(0, TARGET_ROWS)) {
    csv.push(headers.map((header) => csvEscape(row[header])).join(','))
  }

  await fs.writeFile(
    RAW_EVIDENCE_PATH,
    JSON.stringify(
      {
        ...rawEvidence,
        selectedRows: selected.slice(0, TARGET_ROWS).length,
      },
      null,
      2,
    ),
  )
  await fs.writeFile(OUTPUT_CSV_PATH, `${csv.join('\n')}\n`)

  console.log(
    JSON.stringify(
      {
        outputCsv: OUTPUT_CSV_PATH,
        rawEvidence: RAW_EVIDENCE_PATH,
        rows: selected.slice(0, TARGET_ROWS).length,
      },
      null,
      2,
    ),
  )
}

await main()
