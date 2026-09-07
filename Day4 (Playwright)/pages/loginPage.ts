import {Page} from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

//locators

username = 'input[name="username"]';
password = 'input[name="password"]';
loginButton = 'button[type="submit"]';

async open() {
  await this.page.goto('https://www.playwrightpad.in/sandbox/banking');
}

async login(username: string, password: string) {
  await this.page.fill(this.username, username);
  await this.page.fill(this.password, password);
  await this.page.click(this.loginButton);
}
}