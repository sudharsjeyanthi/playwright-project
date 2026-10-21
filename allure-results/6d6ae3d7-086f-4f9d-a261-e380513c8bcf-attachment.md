# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom_demo1.spec.ts >> Iframe and Radio Button Tests >> Verify iframe buttons
- Location: tests/pom_demo1.spec.ts:5:9

# Error details

```
TypeError: this.navigation.openIframeCard is not a function
```

# Test source

```ts
  1  | 
  2  | import { Page, expect } from '@playwright/test';
  3  | import { InteractionLocators } from '../Locators/InteractionLocators';
  4  | import { NavigationPage } from './NavigationPage';
  5  | 
  6  | export class InteractionPage {
  7  |     readonly locators: InteractionLocators;
  8  |     readonly navigation: NavigationPage;
  9  | 
  10 |     constructor(private page: Page) {
  11 |         this.locators = new InteractionLocators(page);
  12 |         this.navigation = new NavigationPage(page);
  13 |     }
  14 | 
  15 |     async testIframe() {
> 16 |         await this.navigation.openIframeCard();
     |                               ^ TypeError: this.navigation.openIframeCard is not a function
  17 | 
  18 |         await this.locators.iframeButton1.click();
  19 |         await expect(this.locators.iframeMessage1).toBeVisible();
  20 | 
  21 |         await this.locators.iframeButton2.click();
  22 |         await expect(this.locators.iframeMessage2).toBeVisible();
  23 |     }
  24 | 
  25 |     async testRadioButtons() {
  26 |         await this.navigation.openRadioCard();
  27 | 
  28 |         await this.locators.femaleFirst.check();
  29 |         await expect(this.locators.femaleFirst).toBeChecked();
  30 | 
  31 |         await this.locators.showGenderButton.click();
  32 | 
  33 |         await this.locators.showGenderButton.click();
  34 | 
  35 |         await this.locators.radioButton1.check();
  36 |         await expect(this.locators.radioButton1).toBeChecked();
  37 |         await expect(this.locators.disabledRadio).toBeDisabled();
  38 | 
  39 |         await this.locators.femaleLast.check();
  40 |         await this.locators.age.check();
  41 | 
  42 |         await this.locators.showValuesButton.click();
  43 | 
  44 |         await expect(this.locators.femaleLast).toBeChecked();
  45 |         await expect(this.locators.age).toBeChecked();
  46 |     }
  47 | 
  48 |     async testCheckboxes() {
  49 |         await this.navigation.openCheckboxCard();
  50 | 
  51 |         await expect(this.locators.checkboxHeading).toBeVisible();
  52 | 
  53 |         await this.locators.singleCheckbox.check();
  54 |         await expect(this.locators.singleCheckbox).toBeChecked();
  55 | 
  56 |         await this.locators.singleCheckbox.uncheck();
  57 |         await expect(this.locators.singleCheckbox).not.toBeChecked();
  58 | 
  59 |         await this.locators.enableCheckbox1.check();
  60 |         await this.locators.enableCheckbox2.check();
  61 | 
  62 |         await expect(this.locators.disabledCheckbox3).toBeDisabled();
  63 |         await expect(this.locators.disabledCheckbox4).toBeDisabled();
  64 | 
  65 |         await this.locators.checkAllButton.click();
  66 |     }
  67 | }
  68 | 
```