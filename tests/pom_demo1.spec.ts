
import { test } from '@playwright/test';
import { InteractionPage } from '../Pages/InteractionPage';

test.describe('Iframe and Radio Button Tests', () => {
    test('Verify iframe buttons', async ({ page }) => {
        const interactionPage = new InteractionPage(page);

        await interactionPage.testIframe();
    });

    test('Verify radio button functionality', async ({ page }) => {
        const interactionPage = new InteractionPage(page);

        await interactionPage.testRadioButtons();
    });
});
