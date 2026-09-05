import {Given,When,Then} from '@cucumber/cucumber';
import {LoginPage} from '../../pages/loginPage';
import {CustomWorld} from '../../support/world'
import { expect } from '@playwright/test';
 
 
let login : LoginPage;

Given('the user is on the login page', async function (this:CustomWorld) {
    login = new LoginPage(this.page);
    await login.openApp();
});


When('the user enters valid credentials', async function (this:CustomWorld) {
    await login.login();
});

When('clicks the login button', async function (this:CustomWorld) {
  console.log('Clicking the login button');
  await this.page.click('input[name="login-button"]');
});

Then('the user should be logged in successfully', async function (this:CustomWorld) {
  console.log('Login successful');

});

When('the user enters invalid credentials', async function (this:CustomWorld) {
  await login.loginWithInvalidCredentials();
});


Then('the user should view the invalid credentials error', 
  async function () {
  console.log('Error message displayed for invalid credentials');
  await login.errormessage();
});

When(
  'the user enters {string} and {string}',
  async function (this: CustomWorld, username: string, password: string) {

    await login.loginwithmultipleusers(username, password);

  }
);
