import { cp, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const distDir = path.resolve('dist')
const indexPath = path.join(distDir, 'index.html')
const indexHtml = await readFile(indexPath, 'utf8')

const routes = [
  'paid-ads-agentur',
  'paid-ads-agentur/duesseldorf',
  'paid-ads-agentur/koeln',
  'paid-ads-agentur/dortmund',
  'seo-agentur',
  'seo-agentur/duesseldorf',
  'seo-agentur/koeln',
  'seo-agentur/dortmund',
  'webdesign-agentur',
  'webdesign-agentur/duesseldorf',
  'webdesign-agentur/koeln',
  'webdesign-agentur/dortmund',
  'webentwicklung-agentur',
  'about',
  'contact',
  'sitemap',
  'datenschutz',
  'impressum',
  'nutzungsbedingungen',
]

for (const route of routes) {
  const routeDir = path.join(distDir, route)
  await mkdir(routeDir, { recursive: true })
  await writeFile(path.join(routeDir, 'index.html'), indexHtml, 'utf8')
}

await cp(path.join(distDir, 'index.html'), path.join(distDir, '404.html'))
