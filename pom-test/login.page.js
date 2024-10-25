// login.page.js

const { expect } = require('@playwright/test');

/**
 * Represents a login page with methods to perform login actions and assertions.
 */
class LoginPage {
    /**
     * Initializes a new instance of the LoginPage class.
     * 
     * @param {Page} page - A reference to the Playwright page.
     */
    constructor(page) {
        this.page = page; // reference to the Playwright page
        this.usernameInput = page.locator(`//input[@name='username']`); // locator for username field.
        this.passwordInput = page.locator(`//input[@name='password']`); // locator for password field.
        this.loginButton = page.locator(`//button[@type='submit']`); // locator for login button.
    }

    /**
     * Performs a login action with the provided username and password.
     * 
     * @async
     * @param {string} username - The username to use for the login action.
     * @param {string} password - The password to use for the login action.
     * @example
     * const loginPage = new LoginPage(page);
     * await loginPage.login('username', 'password');
     * * Asserts that the login action was successful by checking for the presence of a welcome message.
     * 
     * @async
     * @throws {AssertionError} If the welcome message is not visible.
     * @example
     * const loginPage = new LoginPage(page);
     * await loginPage.login('username', 'password');
     * await loginPage.assertLoginSuccess();
     * 
     */

    async loginValid(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

        await expect(this.page.locator(`//b[text() = 'You logged into a secure area!']`)).toBeVisible();
    }

    async loginInValid(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

        await expect(this.page.locator(`//b[text() = 'Your password is invalid!']`)).toBeVisible();
    }
}

module.exports = { LoginPage };