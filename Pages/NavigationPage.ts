
import { Page, expect } from '@playwright/test';
import { NavigationLocators } from '../Locators/NavigationLocators';

export class NavigationPage {
    readonly locators: NavigationLocators;

    constructor(private page: Page) {
        this.locators = new NavigationLocators(page);
    }

    async openWebsite() {
        await this.page.goto('/');
        await expect(this.page).toHaveURL('/');
    }
    async openWebTableCard() {
        await this.openWebsite();
        await this.locators.webTableCard.click();
    }
    async openIframeCard() {
        await this.openWebsite();
        await this.locators.iframeCard.click();
    }

    async openRadioCard() {
        await this.openWebsite();
        await this.locators.radioCard.click();
    }

    async openCheckboxCard() {
        await this.openWebsite();
        await this.locators.checkboxCard.click();
    }

    async openFormCard() {
        await this.openWebsite();
        await this.locators.formCard.click();
    }
}
