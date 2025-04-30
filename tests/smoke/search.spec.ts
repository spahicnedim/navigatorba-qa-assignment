import { test, expect } from '@playwright/test';

test('Search for a valid address', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const searchInput = page.getByPlaceholder('Traži ulicu ili objekat');
    await searchInput.fill('Maršala Tita');
    await searchInput.press('Enter');

    // wait for results to show
    await page.waitForSelector('.menu_content_list.search-results', { timeout: 5000 });
    await expect(page.locator('.menu_content_list.search-results')).toBeVisible();
});