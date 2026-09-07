import { type Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { Logger } from '../utils/Logger';

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get backpackAddToCartButton() {
    return this.page.locator('.inventory_item').filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Add to cart' });
  }

  get cartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }

  get cartLink() {
    return this.page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    Logger.info('Adding Sauce Labs Backpack to cart');
    await this.backpackAddToCartButton.click();
    Logger.info('Backpack added to cart');
  }

  async openCart() {
    Logger.info('Opening cart');
    await this.cartLink.click();
  }

  async getCartCount() {
    const badge = this.cartBadge;
    const countText = await badge.textContent();
    const count = countText ? Number.parseInt(countText.trim(), 10) : 0;
    Logger.info(`Cart count retrieved: ${count}`);
    return count;
  }

  async expectCartCount(expected: number) {
    Logger.info(`Verifying cart count is ${expected}`);
    await expect(this.cartBadge).toHaveText(String(expected));
  }
}
