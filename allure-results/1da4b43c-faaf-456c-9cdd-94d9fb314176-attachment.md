# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom_demo1.spec.ts >> Iframe and Radio Button Tests >> Verify radio button functionality
- Location: tests/pom_demo1.spec.ts:11:9

# Error details

```
TypeError: navigationLocators.getLocators is not a function
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | import { NavigationLocators } from '../Locators/NavigationLocators';
  3  | 
  4  | export class NavigationPage {
  5  |     private locators: ReturnType<NavigationLocators['getLocators']>;
  6  | 
  7  |     constructor(private page: Page) {
  8  |         const navigationLocators = new NavigationLocators(page);
  9  | 
  10 |         console.log(
  11 |             'getLocators type:',
  12 |             typeof navigationLocators.getLocators
  13 |         );
  14 | 
> 15 |         this.locators = navigationLocators.getLocators();
     |                                            ^ TypeError: navigationLocators.getLocators is not a function
  16 |     }
  17 | 
  18 |     async clickIframeCard() {
  19 |         await this.locators.iframeCard.click();
  20 |     }
  21 | 
  22 |     async clickRadioCard() {
  23 |         await this.locators.radioCard.click();
  24 |     }
  25 | 
  26 |     async clickCheckboxCard() {
  27 |         await this.locators.checkboxCard.click();
  28 |     }
  29 | 
  30 |     async clickFormCard() {
  31 |         await this.locators.formCard.click();
  32 |     }
  33 | }
  34 | // import { Page, expect } from '@playwright/test';
  35 | // import { NavigationLocators } from '../Locators/NavigationLocators';
  36 | 
  37 | // export class NavigationPage {
  38 | //     readonly locators: NavigationLocators;
  39 | 
  40 | //     constructor(private page: Page) {
  41 | //         this.locators = new NavigationLocators(page);
  42 | //     }
  43 | 
  44 | //     async openWebsite() {
  45 | //         await this.page.goto('/');
  46 | //         await expect(this.page).toHaveURL('/');
  47 | //     }
  48 | 
  49 | //     async openIframeCard() {
  50 | //         await this.openWebsite();
  51 | //         await this.locators.iframeCard.click();
  52 | //     }
  53 | 
  54 | //     async openRadioCard() {
  55 | //         await this.openWebsite();
  56 | //         await this.locators.radioCard.click();
  57 | //     }
  58 | 
  59 | //     async openCheckboxCard() {
  60 | //         await this.openWebsite();
  61 | //         await this.locators.checkboxCard.click();
  62 | //     }
  63 | 
  64 | //     async openFormCard() {
  65 | //         await this.openWebsite();
  66 | //         await this.locators.formCard.click();
  67 | //     }
  68 | // }
  69 | 
```