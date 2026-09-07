// import { test } from "@playwright/test";
// import { readCsvData } from "../utils/csvReader";

// const data = readCsvData("./loginData.csv");

// data.forEach(({ username, password }) => {
//   test(`Login Test with username: ${username} and password: ${password}`, async ({ page }) => {
//     await page.goto("https://www.playwrightpad.in/sandbox/banking");
//     await page.fill('input[name="username"]', username);
//     await page.fill('input[name="password"]', password);
//     await page.getByRole('button', { name: 'Login' }).click();
//   });
// });

import { test } from "@playwright/test";
import { readCsvData } from "../utils/csvReader";
import { LoginPage } from "../pages/loginPage";
const data = readCsvData("./loginData.csv");



  test("Login Test with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);


    //login using data from CSV
    for (const { username, password } of data) {
      await loginPage.open();
      await loginPage.login(username, password);
    }
  });