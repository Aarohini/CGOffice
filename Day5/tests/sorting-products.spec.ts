import { expect, test } from '@playwright/test';
import { ExcelReader } from '../utils/ExcelReader';

test.describe('Product Sorting', () => {
  test('Sort products low to high', async ({ page }) => {
    const standardUser = ExcelReader.getUserCredentialByUsername('standard_user');

    if (!standardUser) {
      throw new Error('standard_user not found in Excel data');
    }

    // 1. Log in with the standard_user credentials from Excel.
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(standardUser.username);
    await page.locator('[data-test="password"]').fill(standardUser.password);
    await page.locator('[data-test="login-button"]').click();

    // 2. Change the sort order to Price (low to high).
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

    // 3. Verify the first product is the lowest priced item.
    const firstCard = page.locator('.inventory_item').first();
    await expect(firstCard.getByText('Sauce Labs Onesie')).toBeVisible();
    await expect(firstCard.getByText('$7.99')).toBeVisible();
  });
});
