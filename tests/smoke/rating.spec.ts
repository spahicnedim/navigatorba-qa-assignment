import { test, expect } from '@playwright/test';

test('Rate a place from detail view', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const searchInput = page.getByPlaceholder('Traži ulicu ili objekat');
    await searchInput.fill('Sarajevo City Center');
    await searchInput.press('Enter');

    await page.waitForSelector('.menu_content_list.search-results', { timeout: 5000 });
    await page.locator('.menu_content_list.search-results').first().click();

    await page.waitForLoadState('networkidle');


    const starsContainer = page.locator('.rating-web .stars-container');


    const fourthStar = starsContainer.locator('.empty span[data-value="4"]');
    await expect(fourthStar).toBeVisible();
    await fourthStar.click({force: true});

    await expect(starsContainer.locator('.full')).toBeVisible();
});
