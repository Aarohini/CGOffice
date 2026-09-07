import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get checkoutButton() {
    return this.page.getByRole('button', { name: 'Checkout' });
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}
