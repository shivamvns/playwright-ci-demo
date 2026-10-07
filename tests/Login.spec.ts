import { test, expect } from '@playwright/test';

test('user can log in and log out', async ({ page }) => {
  // Open the login page.
  await page.goto('/web/index.php/auth/login');

  // Enter the public demo credentials.
  await page.locator("input[placeholder='Username']").fill('Admin');
  await page.locator("input[placeholder='Password']").fill('admin123');

  // Log in.
  await page.locator("button[type='submit']").click();

  // Verify login succeeded.
  const logo=  page.locator("img[alt='client brand banner']")

  await expect(logo).toBeVisible();
});