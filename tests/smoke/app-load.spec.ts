import { test, expect } from '@playwright/test';

test('Application loads successfully', async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState('networkidle'); // wait for full page load
    await expect(page.getByPlaceholder("Traži ulicu ili objekat")).toBeVisible();
    await expect(page.locator('ul.menu_content_list.categories')).toBeVisible();
    await expect(page.locator('.leaflet-map-pane')).toBeVisible();
})