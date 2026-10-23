
import { test } from '@playwright/test';
import { InteractionPage } from '../Pages/InteractionPage';
import { FormTablePage } from '../Pages/FormTablePage';
import { DataProvider } from '../Data/DataProvider';

test.describe('Iframe,RadioBtn,Form Tests', () => {
    test('Verify iframe buttons', async ({ page }) => {
        const interactionPage = new InteractionPage(page);
        await interactionPage.testIframe();
    });

    test('Verify radio button functionality', async ({ page }) => {
        const interactionPage = new InteractionPage(page);

        await interactionPage.testRadioButtons();
    });
    test('Fill and submit the form', async ({ page }) => {
        const formTablePage = new FormTablePage(page);
        const data = DataProvider.getData()[0];

        await formTablePage.submitForm(data.form);
    });
});
