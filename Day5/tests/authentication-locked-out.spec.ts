import { expect, test } from '@playwright/test';
import { ExcelReader } from '../utils/ExcelReader';

test.describe('Authentication', () => {
  test('Locked out user is blocked', async ({ page }) => {
    const lockedOutUser = ExcelReader.getUserCredentialByUsername('locked_out_user');

    if (!lockedOutUser) {
      throw new Error('Locked out user not found in Excel data');
    }

    // 1. Attempt to log in with the locked_out_user credentials from Excel.
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(lockedOutUser.username);
    await page.locator('[data-test="password"]').fill(lockedOutUser.password);
    await page.locator('[data-test="login-button"]').click();

    // 2. Verify the account lock message is shown.
    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
    await expect(page.locator('[data-test="username"]')).toBeVisible();
  });
});
