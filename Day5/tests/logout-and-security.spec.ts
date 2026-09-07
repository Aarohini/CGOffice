import { expect, test } from '@playwright/test';
import { ExcelReader } from '../utils/ExcelReader';

test.describe('Navigation and Security', () => {
  test('Logout from menu blocks protected access', async ({ page }) => {
    const standardUser = ExcelReader.getUserCredentialByUsername('standard_user');

    if (!standardUser) {
      throw new Error('standard_user not found in Excel data');
    }

    // 1. Log in with the standard_user credentials from Excel.
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(standardUser.username);
    await page.locator('[data-test="password"]').fill(standardUser.password);
    await page.locator('[data-test="login-button"]').click();

    // 2. Open the menu and log out.
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

    // 3. Verify the session is terminated.
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('[data-test="username"]')).toBeVisible();
  });
});
