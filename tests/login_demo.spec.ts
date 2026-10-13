import { test, expect } from '@playwright/test';

test('Login page', async ({ page }) => {
    await page.goto('https://demo.applitools.com/');

    await expect(page).toHaveURL(
        'https://demo.applitools.com/'
    );
    await page.pause();
    await page.getByPlaceholder('Enter your username').fill("sudhars");
    await page.getByPlaceholder('Enter your password').fill("123");
    await page.getByText('Sign in').click();

});