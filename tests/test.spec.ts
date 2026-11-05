// @ts-check

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://ficbook.net/');
       
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Книга фанфиков/); // that test will fail because the title is not "Книга фанфиков"
});

test('cправочник link', async ({ page }) => {
    await page.goto('https://longstoryshort.app/');

    const nav = page.locator('.nav');

   // Create a 'link' locator with the name of 'Справочник' and click it.
  await nav.getByRole('link', { name: 'Справочник' }).click();

  // Expects page to have a title with the name of 'Введение — System Reference Document на русском языке | SRD 5.1 — D&D 5e | Long Story Short'.
  await expect(page).toHaveTitle(/Введение — System Reference Document на русском языке | SRD 5.1 — D&D 5e | Long Story Short/);
});

test('resources link', async ({ page }) => {
    await page.goto('https://longstoryshort.app/');

    const nav = page.locator('.nav');

   // Create a 'link' locator with the name of 'Ресурсы' and click it.
  await nav.getByRole('link', { name: 'Ресурсы' }).click();

  // Expects page to have a title with the name of 'Приключения для D&D 5e | Long Story Short'.
  await expect(page).toHaveTitle(/Приключения для D&D 5e | Long Story Short/);
});