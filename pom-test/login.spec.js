/**
 * Login test suite.
 * 
 * This test suite contains a single test case to verify the login functionality.
 * 
 * @module login.test
 */

const { test } = require('@playwright/test');
const { LoginPage } = require('./login.page');

test('should log in with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://practice.expandtesting.com/login');

    await loginPage.loginValid('practice', 'SuperSecretPassword!');
});


test('should not log in with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://practice.expandtesting.com/login');

    await loginPage.loginInValid('practice', 'WrongPassword');
});