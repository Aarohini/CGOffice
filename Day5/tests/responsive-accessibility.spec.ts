import { expect, test } from '@playwright/test';
import { ExcelReader } from '../utils/ExcelReader';

test.describe('Responsive and Accessibility', () => {
  test('Mobile viewport keeps the core flow usable', async ({ page }) => {
    const standardUser = ExcelReader.getUserCredentialByUsername('standard_user');

    if (!standardUser) {
      throw new Error('standard_user not found in Excel data');
    }

    // 1. Set a mobile viewport for responsive validation.
    await page.setViewportSize({ width: 390, height: 844 });

    // 2. Log in with the standard_user credentials from Excel.
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(standardUser.username);
    await page.locator('[data-test="password"]').fill(standardUser.password);
    await page.locator('[data-test="login-button"]').click();

    // 3. Verify the core inventory actions remain accessible on mobile.
    await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
    await expect(page.getByRole('button', { name: 'Open Menu' })).toBeVisible();
    await page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Add to cart' }).click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});
