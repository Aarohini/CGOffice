import { Page, expect } from '@playwright/test';

export class LoginPage {

constructor(
private page: Page
) {}


// locators 

private txtUser = '#user-name';

private txtPass = '#password';

private btnLogin ='#login-button';

async openApp() {

await this.page.goto(

'https://www.saucedemo.com/');

}

async login() {

console.log(
'Entering credentials');

// Example
await this.page.fill('input[name="user-name"]','standard_user');
await this.page.fill("//input[@id='password']",'secret1_sauce');



}

async loginWithInvalidCredentials() {
    console.log('Entering invalid credentials');

    await this.page.fill('input[name="user-name"]','invalid_user');
    await this.page.fill("//input[@id='password']",'invalid_password');

}

async errormessage() {
    await expect(this.page.locator('h3[data-test="error"]')).toBeVisible();
}

async loginwithmultipleusers(username: string, password : string){
    await this.page.fill(this.txtUser,username);
    await this.page.fill(this.txtPass,password);
    await this.page.click(this.btnLogin);

}


}
