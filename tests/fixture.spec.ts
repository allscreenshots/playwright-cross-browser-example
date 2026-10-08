import { test, expect } from '@playwright/test';

test('valid form submission and responsive layout', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Website screenshots across browsers' })).toBeVisible();
  await page.getByLabel('Email', { exact: true }).fill('reader@example.test');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('status')).toHaveText('Ready to continue');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test('native validation blocks an empty form and full-page capture includes the end marker', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('status')).toBeEmpty();
  expect(await page.getByLabel('Email', { exact: true }).evaluate((input: HTMLInputElement) => input.validity.valueMissing)).toBe(true);
  const end = page.getByText('END OF CAPTURE', { exact: false });
  await end.scrollIntoViewIfNeeded();
  await expect(end).toBeVisible();
  const path = testInfo.outputPath('full-page.png');
  await page.screenshot({ path, fullPage: true });
  await testInfo.attach('full-page', { path, contentType: 'image/png' });
});
