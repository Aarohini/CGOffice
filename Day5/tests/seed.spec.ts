import { test, expect } from '@playwright/test';
import { ExcelReader } from '../utils/ExcelReader';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    const standardUser = ExcelReader.getUserCredentialByUsername('standard_user');

    if (!standardUser) {
      throw new Error('standard_user not found in Excel data');
    }

    // generate code here.
    // launching of the browser with the url
    await page.goto('https://www.saucedemo.com/');

    // enter username from Excel data
    await page.locator('input[name="user-name"]').fill(standardUser.username);

    // enter password from Excel data
    await page.locator("//input[@id='password']").fill(standardUser.password);

    // click on login button
    await page.locator('input[name="login-button"]').click();

    // validation for landing home page
    const dashboardText = await page.locator("//div[@class='app_logo']").textContent();

    // assertion
    expect(dashboardText).toBe('Swag Labs');
  });
});
