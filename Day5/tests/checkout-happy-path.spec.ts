import { expect, test } from '../fixtures/testFixtures';
import { ExcelReader } from '../utils/ExcelReader';

test.describe('Checkout', () => {
  test('Complete order successfully', async ({ page, loginPage, inventoryPage, cartPage, checkoutPage }) => {
    const standardUser = ExcelReader.getUserCredentialByUsername('standard_user');
    const checkoutData = ExcelReader.readCheckoutData()[0];

    if (!standardUser) {
      throw new Error('standard_user not found in Excel data');
    }

    if (!checkoutData) {
      throw new Error('Checkout data not found in Excel');
    }

    // 1. Log in with the standard_user credentials from Excel.
    await loginPage.navigate();
    await loginPage.login(standardUser.username, standardUser.password);

    // 2. Add the Sauce Labs Backpack to the cart.
    await inventoryPage.addBackpackToCart();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('0');

    // 3. Open the cart and start checkout.
    await inventoryPage.openCart();
    await cartPage.clickCheckout();

    // 4. Fill in checkout information and continue.
    await checkoutPage.fillCustomerInfo(checkoutData.firstName, checkoutData.lastName, checkoutData.postalCode);
    await checkoutPage.continueCheckout();

    // 5. Verify the order overview and finish the order.
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await page.getByRole('button', { name: 'Finish' }).click();

    // 6. Verify the order completion page.
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
    await expect(page.getByText('Your order has been dispatched')).toBeVisible();
  });
});
