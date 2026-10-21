
import { Page, expect } from '@playwright/test';
import { InteractionLocators } from '../Locators/InteractionLocators';
import { NavigationPage } from './NavigationPage';

export class InteractionPage {
    locators: InteractionLocators;
    navigation: NavigationPage;

    constructor(private page: Page) {
        this.locators = new InteractionLocators(page);
        this.navigation = new NavigationPage(page);
    }

    async testIframe() {
        await this.navigation.openIframeCard();

        await this.locators.iframeButton1.click();
        await expect(this.locators.iframeMessage1).toBeVisible();

        await this.locators.iframeButton2.click();
        await expect(this.locators.iframeMessage2).toBeVisible();
    }

    async testRadioButtons() {
        await this.navigation.openRadioCard();

        await this.locators.femaleFirst.check();
        await expect(this.locators.femaleFirst).toBeChecked();

        await this.locators.showGenderButton.click();

        await this.locators.showGenderButton.click();

        await this.locators.radioButton1.check();
        await expect(this.locators.radioButton1).toBeChecked();
        await expect(this.locators.disabledRadio).toBeDisabled();

        await this.locators.femaleLast.check();
        await this.locators.age.check();

        await this.locators.showValuesButton.click();

        await expect(this.locators.femaleLast).toBeChecked();
        await expect(this.locators.age).toBeChecked();
    }

    async testCheckboxes() {
        await this.navigation.openCheckboxCard();

        await expect(this.locators.checkboxHeading).toBeVisible();

        await this.locators.singleCheckbox.check();
        await expect(this.locators.singleCheckbox).toBeChecked();

        await this.locators.singleCheckbox.uncheck();
        await expect(this.locators.singleCheckbox).not.toBeChecked();

        await this.locators.enableCheckbox1.check();
        await this.locators.enableCheckbox2.check();

        await expect(this.locators.disabledCheckbox3).toBeDisabled();
        await expect(this.locators.disabledCheckbox4).toBeDisabled();

        await this.locators.checkAllButton.click();
    }
}
