import { chromium } from "@playwright/test";
async function globalSetup() {
    console.log("Global setup started");
    let browser = await chromium.launch();
    let page = await browser.newPage();
    
    await page.goto("https://www.playwrightpad.in/sandbox/banking");

    await page.fill('input[name="username"]', 'apex_user');
    await page.fill('input[name="password"]', 'Password123!');
    await page.click('button[type="submit"]');

    await page.context().storageState({ path: 'auth.json' });


    await browser.close();
console.log("Global setup completed");
}

export default globalSetup;