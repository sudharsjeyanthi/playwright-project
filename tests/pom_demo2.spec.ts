
import { test } from '@playwright/test';
import { InteractionPage } from '../Pages/InteractionPage';
import { FormTablePage } from '../Pages/FormTablePage';
import { DataProvider } from '../Data/DataProvider';

test.describe('Table, Checkbox and Form Tests', () => {
    test('Add a web table record', async ({ page }) => {
        const formTablePage = new FormTablePage(page);
        const data = DataProvider.getData()[0];

        await formTablePage.addTableRecord(data.webTable);
    });

    test('Verify checkbox functionality', async ({ page }) => {
        const interactionPage = new InteractionPage(page);

        await interactionPage.testCheckboxes();
    });

    test('Fill and submit the form', async ({ page }) => {
        const formTablePage = new FormTablePage(page);
        const data = DataProvider.getData()[0];

        await formTablePage.submitForm(data.form);
    });
});
