
import { Page } from '@playwright/test';

export class InteractionLocators {
    constructor(private page: Page) {}

    // Iframe
    get iframeButton1() {
        return this.page
            .frameLocator("iframe[name='iframe1']")
            .getByRole('button', { name: /click me/i });
    }

    get iframeButton2() {
        return this.page
            .frameLocator("iframe[name='iframe2']")
            .getByRole('button', { name: /click me/i });
    }

    get iframeMessage1() {
        return this.page.getByText(
            'You have clicked on iframe 1 button'
        );
    }

    get iframeMessage2() {
        return this.page.getByText(
            'You have clicked on iframe 2 button'
        );
    }

    // Radio buttons
    get femaleFirst() {
        return this.page.getByRole('radio', { name: 'Female' }).first();
    }

    get femaleLast() {
        return this.page.getByRole('radio', { name: 'Female' }).last();
    }

    get age() {
        return this.page.getByRole('radio', { name: '18-35' });
    }

    get radioButton1() {
        return this.page.getByRole('radio', { name: 'Radio Button 1' });
    }

    get disabledRadio() {
        return this.page.getByRole('radio', {
            name: 'Disabled Radio Button',
        });
    }

    get showGenderButton() {
        return this.page.getByRole('button', {
            name: 'Show Selected Gender',
        });
    }

    get showValuesButton() {
        return this.page.getByRole('button', {
            name: 'Show Selected Values',
        });
    }

    // Checkboxes
    get singleCheckbox() {
        return this.page.getByRole('checkbox', { name: 'Check me!' });
    }

    get enableCheckbox1() {
        return this.page.getByRole('checkbox', {
            name: 'Enable Checkbox 1',
        });
    }

    get enableCheckbox2() {
        return this.page.getByRole('checkbox', {
            name: 'Enable Checkbox 2',
        });
    }

    get disabledCheckbox3() {
        return this.page.getByRole('checkbox', {
            name: 'Disable Checkbox 3',
        });
    }

    get disabledCheckbox4() {
        return this.page.getByRole('checkbox', {
            name: 'Disable Checkbox 4',
        });
    }

    get checkAllButton() {
        return this.page.getByRole('button', { name: /check all/i });
    }

    get checkboxHeading() {
        return this.page.getByRole('heading', {
            name: 'Checkbox Demo',
            exact: true,
        });
    }
}
