import { expect, test } from '@playwright/test'

test('home page renders core navigation and lead form', async ({ page }) => {
  await page.goto('./')

  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Google Ads, SEO und Webdesign',
  )
  await expect(page.getByRole('link', { name: 'Kontakt' }).first()).toBeVisible()
  await expect(page.getByLabel('Name')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Anfrage per E-Mail vorbereiten' })).toBeVisible()
})

test('service page keeps one h1 and no mobile overflow', async ({ page }) => {
  await page.goto('paid-ads-agentur')

  await expect(page.locator('h1')).toHaveCount(1)

  const metrics = await page.evaluate(() => ({
    innerWidth: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }))

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1)
})

test('geo child page renders nested route with one h1', async ({ page }) => {
  await page.goto('seo-agentur/duesseldorf')

  await expect(page.locator('h1')).toHaveCount(1)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Düsseldorf')
})

test('footer sitemap link opens a page listing key routes', async ({ page }) => {
  await page.goto('./')

  await page.getByRole('link', { name: 'Sitemap' }).click()

  await expect(page).toHaveURL(/\/sitemap$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Alle veröffentlichten Seiten',
  )
  await expect(page.locator('#content').getByRole('link', { name: 'SEO Agentur Düsseldorf' })).toBeVisible()
  await expect(page.locator('#content').getByRole('link', { name: 'Datenschutz' })).toBeVisible()
})
