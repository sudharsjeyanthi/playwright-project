import { test, expect } from '@playwright/test';

test('Dropdown page', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dropdown');
    await expect(page).toHaveURL('https://practice.expandtesting.com/dropdown');


    const simpleDropdown = page.locator('select').nth(0);

    await simpleDropdown.scrollIntoViewIfNeeded();
    await simpleDropdown.selectOption('Option 2');
    await expect(simpleDropdown.locator('option:checked')).toHaveText('Option 1');

    const elementsPerPage = page.locator('select').nth(1);
    await elementsPerPage.scrollIntoViewIfNeeded();
    await elementsPerPage.selectOption('50');
    await expect(elementsPerPage.locator('option:checked')).toHaveText('50');

    const countryDropdown = page.locator('select').nth(2);
    await countryDropdown.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await countryDropdown.selectOption('India');
    await expect(countryDropdown.locator('option:checked')).toHaveText('India');
});