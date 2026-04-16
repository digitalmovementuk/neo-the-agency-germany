import { expect, test } from '@playwright/test'

test('home page renders core navigation and lead form', async ({ page }) => {
  await page.goto('./')

  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Paid Ads, SEO und Webentwicklung',
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
