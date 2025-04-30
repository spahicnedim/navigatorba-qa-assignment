import { test, expect } from '@playwright/test';

test('View place details after search', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const searchInput = page.getByPlaceholder('Traži ulicu ili objekat');
    await searchInput.fill('Sarajevo City Center');
    await searchInput.press('Enter');

    await page.waitForSelector('.menu_content_list.search-results', { timeout: 5000 });

    // click on first result
    await page.locator('.menu_content_list.search-results').first().click();

    await expect(page.locator('text=Detaljno')).toBeVisible();
    await expect(page.locator('text=Opis Objekta')).toBeVisible();
});
