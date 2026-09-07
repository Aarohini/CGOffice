import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils/Logger';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators
  get usernameInput() {
    return this.page.locator('[data-test="username"]');
  }

  get passwordInput() {
    return this.page.locator('[data-test="password"]');
  }

  get loginButton() {
    return this.page.locator('[data-test="login-button"]');
  }

  // Actions
  async navigate() {
    Logger.info('Navigating to SauceDemo login page');
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    Logger.info(`Attempting login for user: ${username}`);
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    Logger.info(`Login submitted for user: ${username}`);
  }
}
