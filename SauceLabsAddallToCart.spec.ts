 import { test, expect } from '@playwright/test';
test('Add items to cart and check total', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const usernameInput = await page.locator('[data-test="username"]');
  const passwordInput = await page.locator('[data-test="password"]');
  const loginButton = await page.locator('[data-test="login-button"]');

  // Focus on the username input field before filling it
  await usernameInput.focus();
  await usernameInput.fill('standard_user');

  // Move to the next input field by pressing the Tab key
  await usernameInput.press('Tab');

  // Fill the password input field
  await passwordInput.fill('secret_sauce');

  // Click on the login button
  await loginButton.click();

  // Add items to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

  // Check total items in the cart
  await page.locator('a').filter({ hasText: '6' }).click();

  // Continue shopping
  await page.locator('[data-test="continue-shopping"]').click();

  // Remove an item from the cart
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  // Check total items in the cart
  await page.locator('a').filter({ hasText: '5' }).click();

  // Continue to checkout
  await page.locator('[data-test="checkout"]').click();
  
  // // Assert that the page title is 'Checkout: Your Information'
  // await expect(page).toHaveTitle('Checkout: Your Information');
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Justin');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Credible');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('43011');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
});
