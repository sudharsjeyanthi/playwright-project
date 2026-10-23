
import { test } from '@playwright/test';
import { InteractionPage } from '../Pages/InteractionPage';
import { FormTablePage } from '../Pages/FormTablePage';
import { DataProvider } from '../Data/DataProvider';

test.describe('Iframe,RadioBtn,Form Tests', () => {
    test('Verify iframe buttons', { tag: '@sanity' }, async ({ page }) => {
        const interactionPage = new InteractionPage(page);
        await interactionPage.testIframe();
    });
    test('Verify radio button functionality', { tag: '@sanity' }, async ({ page }) => {
        const interactionPage = new InteractionPage(page);
        await interactionPage.testRadioButtons();
    });
    test('Fill and submit the form', { tag: '@sanity' }, async ({ page }) => {
        const formTablePage = new FormTablePage(page);
        const data = DataProvider.getData();
        for (const item of data) {
            await formTablePage.submitForm(item.form);
        }
    });

});
