# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom_demo2.spec.ts >> Table, Checkbox and Form Tests >> Add a web table record
- Location: tests/pom_demo2.spec.ts:8:9

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('Name')

```

# Test source

```ts
  1  | 
  2  | import { Page, expect } from '@playwright/test';
  3  | import { FormTableLocators } from '../Locators/FormTableLocators';
  4  | import { NavigationPage } from './NavigationPage';
  5  | import { WebTableData, UserFormData } from '../Data/DataProvider';
  6  | 
  7  | export class FormTablePage {
  8  |     locators: FormTableLocators;
  9  |     navigation: NavigationPage;
  10 | 
  11 |     constructor(private page: Page) {
  12 |         this.locators = new FormTableLocators(page);
  13 |         this.navigation = new NavigationPage(page);
  14 |     }
  15 | 
  16 |     async addTableRecord(data: WebTableData) {
  17 | 
  18 | 
> 19 |         await this.locators.nameInput.fill(data.name);
     |                                       ^ Error: locator.fill: Target page, context or browser has been closed
  20 |         await this.locators.countryInput.fill(data.country);
  21 | 
  22 |         await this.locators.addRecordButton.click();
  23 | 
  24 |         await expect(
  25 |             this.locators.textCell(data.name)
  26 |         ).toBeVisible();
  27 | 
  28 |         await expect(
  29 |             this.locators.textCell(data.country)
  30 |         ).toBeVisible();
  31 |     }
  32 | 
  33 |     async submitForm(data: UserFormData) {
  34 |         await this.navigation.openFormCard();
  35 | 
  36 |         await this.locators.firstName.fill(data.firstName);
  37 |         await this.locators.middleName.fill(data.middleName);
  38 |         await this.locators.lastName.fill(data.lastName);
  39 |         await this.locators.email.fill(data.email);
  40 |         await this.locators.password.fill(data.password);
  41 |         await this.locators.address.fill(data.address);
  42 |         await this.locators.city.fill(data.city);
  43 |         await this.locators.state.fill(data.state);
  44 |         await this.locators.pinCode.fill(data.pinCode);
  45 | 
  46 |         await this.locators.submitButton.scrollIntoViewIfNeeded();
  47 |         await this.locators.submitButton.click();
  48 |     }
  49 | }
  50 | 
```