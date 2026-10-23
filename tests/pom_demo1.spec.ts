
import { test } from '@playwright/test';
import { InteractionPage } from '../Pages/InteractionPage';
import { FormTablePage } from '../Pages/FormTablePage';
import { DataProvider } from '../Data/DataProvider';

test.describe('Iframe,RadioBtn,Form Tests', () => {
    test('Verify iframe buttons', { tag: '@sanity' }, async ({ page }) => {
        const interactionPage = new InteractionPage(page);
        await interactionPage.testIframe();
    });


});
