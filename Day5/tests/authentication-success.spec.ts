import { expect, test } from '@playwright/test';
import { ExcelReader } from '../utils/ExcelReader';

const successfulCredentials = ExcelReader.readUserCredentials()
  .filter(({ username }) => username !== 'locked_out_user');

for (const { username, password } of successfulCredentials) {
  test(`Successful login with ${username}`, async ({ page }) => {
    // 1. Log in with the credentials from the Excel data source.
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(username);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-button"]').click();

    // 2. Verify the user lands on the inventory page.
    await expect(page).toHaveURL(/inventory\.html$/);
    await expect(page.getByText('Products')).toBeVisible();
    await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
  });
}
