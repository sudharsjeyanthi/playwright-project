import { test, expect } from '@playwright/test';

test('GoToWebsite 1', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://testing.qaautomationlabs.com/');
    await expect(page).toHaveURL('https://testing.qaautomationlabs.com/');
    await page.waitForTimeout(2000);
    // iframe
    await page.getByTestId('tool-card-iframe').click();
    const frame1 = page.frameLocator("iframe[name='iframe1']");
    await frame1.getByRole('button', { name: 'CLick Me' }).click();
    await expect(page.getByText('You have clicked on iframe 1 button')).toBeVisible();
    await page.waitForTimeout(2000);
    const frame2 = page.frameLocator("iframe[name='iframe2']");
    await frame2.getByRole('button', { name: 'Click Me' }).click();
    await expect(page.getByText('You have clicked on iframe 2 button')).toBeVisible();
    await page.waitForTimeout(2000);
    // radio button
    await page.goto('https://testing.qaautomationlabs.com/');
    await page.getByTestId('tool-card-radio-button').click();
    await page.getByRole('radio', { name: 'Female' }).first().check();
    await expect(page.getByRole('radio', { name: 'Female' }).first()).toBeChecked();
    await page.getByRole('button', { name: 'Show Selected Gender' }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('button', { name: 'Show Selected Gender' }).click();
    await page.getByRole('radio', { name: 'Radio Button 1' }).check();
    await expect(page.getByRole('radio', { name: 'Radio Button 1' })).toBeChecked();
    await expect(page.getByRole('radio', { name: 'Disabled Radio Button' })).toBeDisabled();
    await page.waitForTimeout(1000);

    const femaleRadio = page.getByRole('radio', { name: 'Female' }).last();
    const ageRadio = page.getByRole('radio', { name: '18-35' });

    await femaleRadio.check();
    await femaleRadio.scrollIntoViewIfNeeded();
    await ageRadio.check();
    await ageRadio.scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: /show selected/i }).last().click();

    await expect(femaleRadio).toBeChecked();
    await expect(ageRadio).toBeChecked();
    await page.waitForTimeout(1000);
    // table
    await page.getByRole('link', { name: 'Web Table' }).click();
    const newName = 'Cbe';
    const newCountry = 'India';
    await page.getByPlaceholder('Name').scrollIntoViewIfNeeded();
    await page.getByPlaceholder('Name').fill(newName);
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Country').scrollIntoViewIfNeeded();
    await page.getByPlaceholder('Country').fill(newCountry);
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Add Record' }).scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: 'Add Record' }).click();
    await expect(page.getByText(newName)).toBeVisible();
    await expect(page.getByText(newCountry)).toBeVisible();
    await page.waitForTimeout(1000);
    // checkbox
    await page.goto('https://testing.qaautomationlabs.com/');
    await page.getByTestId('tool-card-checkbox').click();
    await expect(page.getByRole('heading', { name: 'Checkbox Demo', exact: true })).toBeVisible();
    await page.waitForTimeout(1000);
    const singleCheckbox = page.getByRole('checkbox', { name: 'Check me!' });
    await singleCheckbox.check();
    await expect(singleCheckbox).toBeChecked();
    await page.waitForTimeout(1000);
    await singleCheckbox.uncheck();
    await singleCheckbox.scrollIntoViewIfNeeded();
    await expect(singleCheckbox).not.toBeChecked();
    await page.waitForTimeout(1000);
    await page.getByRole('checkbox', { name: 'Enable Checkbox 1' }).check();
    await page.getByRole('checkbox', { name: 'Enable Checkbox 2' }).check();
    await expect(page.getByRole('checkbox', { name: 'Disable Checkbox 3' })).toBeDisabled();
    await expect(page.getByRole('checkbox', { name: 'Disable Checkbox 4' })).toBeDisabled();
    const checkAllButton = page.getByRole('button', { name: /check all/i });
    await checkAllButton.click();
    await checkAllButton.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    //form
    await page.goto('https://testing.qaautomationlabs.com/');
    await page.getByTestId('tool-card-form').click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter your first name').fill('Sudharsana');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter your middle name').fill('hi');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter your last name').fill('Jagadeesan');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter your email address').fill('sud@gmail.com');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter your password').fill('123456');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter your address').fill('06, Sivaram nagar CBE, TN');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter your city').fill('CBE');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter your state').fill('TN');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Enter your pin code').fill('641020');
    await page.waitForTimeout(1000);
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await submitButton.scrollIntoViewIfNeeded();
    await submitButton.click();
    await page.waitForTimeout(2000);
    await page.goto('https://testing.qaautomationlabs.com/');
    await expect(page).toHaveURL('https://testing.qaautomationlabs.com/');
    await page.waitForTimeout(2000);

});

