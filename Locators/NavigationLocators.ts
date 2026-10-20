
import { Page } from '@playwright/test';

export class NavigationLocators {
    constructor(private page: Page) {}

    get iframeCard() {
        return this.page.getByTestId('tool-card-iframe');
    }

    get radioCard() {
        return this.page.getByTestId('tool-card-radio-button');
    }

    get checkboxCard() {
        return this.page.getByTestId('tool-card-checkbox');
    }

    get formCard() {
        return this.page.getByTestId('tool-card-form');
    }
}
