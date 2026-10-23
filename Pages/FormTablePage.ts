
import { Page, expect } from '@playwright/test';
import { FormTableLocators } from '../Locators/FormTableLocators';
import { NavigationPage } from './NavigationPage';
import { WebTableData, UserFormData } from '../Data/DataProvider';

export class FormTablePage {
    locators: FormTableLocators;
    navigation: NavigationPage;

    constructor(private page: Page) {
        this.locators = new FormTableLocators(page);
        this.navigation = new NavigationPage(page);
    }

    async addTableRecord(data: WebTableData) {
        await this.navigation.openWebTableCard();
        await this.locators.nameInput.fill(data.name);
        await this.locators.countryInput.fill(data.country);

        await this.locators.addRecordButton.click();

        await expect(
            this.locators.textCell('hi')
        ).toBeVisible();

        await expect(
            this.locators.textCell(data.country)
        ).toBeVisible();
    }

    async submitForm(data: UserFormData) {
        await this.navigation.openFormCard();

        await this.locators.firstName.fill(data.firstName);
        await this.locators.middleName.fill(data.middleName);
        await this.locators.lastName.fill(data.lastName);
        await this.locators.email.fill(data.email);
        await this.locators.password.fill(data.password);
        await this.locators.address.fill(data.address);
        await this.locators.city.fill(data.city);
        await this.locators.state.fill(data.state);
        await this.locators.pinCode.fill(data.pinCode);

        await this.locators.submitButton.scrollIntoViewIfNeeded();
        await this.locators.submitButton.click();
    }
}
