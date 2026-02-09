import { test, expect } from '@playwright/test';


// Navigation
test('Login to Orange HRM', async ({ page }) => {
    test.setTimeout(30_000);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {
        timeout: 30000,
        waitUntil: "load"
    });
    await page.getByRole("textbox", { name: "Username" }).fill("Admin")
    await page.getByRole("textbox", { name: "Password" }).fill("admin123")
    await page.getByRole("button", { name: "Login" }).click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index", { ignoreCase: true, timeout: 5000 })
    await expect(page.locator(".oxd-topbar-header-title")).toHaveText("Dashboard")
    await expect(page).toHaveTitle("OrangeHRM")

    await page.locator("span", { hasText: "Admin", }).click()

});

// Basic Actions
// click
// check
// uncheck
// hover
// fill
// focus
// press
// SetInputFiles
// SelectOption

