
import { Page, Locator } from '@playwright/test';

export class FormTableLocators {
    constructor(private page: Page) {}

    // Web table
    get webTableLink() {
        return this.page.getByRole('link', { name: 'Web Table' });
    }

    get nameInput() {
        return this.page.getByPlaceholder('Name');
    }

    get countryInput() {
        return this.page.getByPlaceholder('Country');
    }

    get addRecordButton() {
        return this.page.getByRole('button', { name: 'Add Record' });
    }

    textCell(value: string): Locator {
        return this.page.getByText(value, { exact: true }).first();
    }

    // Form
    get firstName() {
        return this.page.getByPlaceholder('Enter your first name');
    }

    get middleName() {
        return this.page.getByPlaceholder('Enter your middle name');
    }

    get lastName() {
        return this.page.getByPlaceholder('Enter your last name');
    }

    get email() {
        return this.page.getByPlaceholder('Enter your email address');
    }

    get password() {
        return this.page.getByPlaceholder('Enter your password');
    }

    get address() {
        return this.page.getByPlaceholder('Enter your address');
    }

    get city() {
        return this.page.getByPlaceholder('Enter your city');
    }

    get state() {
        return this.page.getByPlaceholder('Enter your state');
    }

    get pinCode() {
        return this.page.getByPlaceholder('Enter your pin code');
    }

    get submitButton() {
        return this.page.getByRole('button', { name: 'Submit' });
    }
}
