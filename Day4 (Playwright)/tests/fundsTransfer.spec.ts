import { test, expect } from '@playwright/test';
import { transferAMT } from '../pages/fundsTransfer';
import { LoginPage } from '../pages/loginPage';
 
test('Verify user can transfer funds', async ({ page }) => {
 
    const lp = new LoginPage(page);
 
    await lp.open();
 
    await lp.login('apex_user', 'Password123!');
 
    const ft = new transferAMT(page);
 
   
    await ft.transferFunds();
 
    await page.selectOption(ft.transfer_type, {
        label: 'Between My Accounts'
    });
 
    // await page.selectOption(ft.from_account, {
    //     label: 'Savings ($18406)'
    // });
 
    // await page.selectOption(ft.to_account, {
    //     label: 'Checking ($3937.99)'
    // });
 
    await ft.transfer(125);
 
});