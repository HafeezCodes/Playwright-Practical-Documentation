import { test, expect } from '@playwright/test';


test('Test case Title: First Test Case', async ({ page }) => {
    await page.goto("https://playwright.dev/", {
        timeout: 30000,
        waitUntil: "load"
    });
});