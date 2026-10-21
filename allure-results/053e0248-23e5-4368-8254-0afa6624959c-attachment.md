# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom_demo1.spec.ts >> Iframe and Radio Button Tests >> Verify iframe buttons
- Location: tests/pom_demo1.spec.ts:5:9

# Error details

```
TypeError: (intermediate value).getLocators is not a function
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
> 8  |         this.locators = new NavigationLocators(page).getLocators();
     |                                                      ^ TypeError: (intermediate value).getLocators is not a function
  9  |     }
  10 | 
  11 |     async clickIframeCard() {
  12 |         await this.locators.iframeCard.click();
  13 |     }
  14 | 
  15 |     async clickRadioCard() {
  16 |         await this.locators.radioCard.click();
  17 |     }
  18 | 
  19 |     async clickCheckboxCard() {
  20 |         await this.locators.checkboxCard.click();
  21 |     }
  22 | 
  23 |     async clickFormCard() {
  24 |         await this.locators.formCard.click();
  25 |     }
  26 | }
  27 | // import { Page, expect } from '@playwright/test';
  28 | // import { NavigationLocators } from '../Locators/NavigationLocators';
  29 | 
  30 | // export class NavigationPage {
  31 | //     readonly locators: NavigationLocators;
  32 | 
  33 | //     constructor(private page: Page) {
  34 | //         this.locators = new NavigationLocators(page);
  35 | //     }
  36 | 
  37 | //     async openWebsite() {
  38 | //         await this.page.goto('/');
  39 | //         await expect(this.page).toHaveURL('/');
  40 | //     }
  41 | 
  42 | //     async openIframeCard() {
  43 | //         await this.openWebsite();
  44 | //         await this.locators.iframeCard.click();
  45 | //     }
  46 | 
  47 | //     async openRadioCard() {
  48 | //         await this.openWebsite();
  49 | //         await this.locators.radioCard.click();
  50 | //     }
  51 | 
  52 | //     async openCheckboxCard() {
  53 | //         await this.openWebsite();
  54 | //         await this.locators.checkboxCard.click();
  55 | //     }
  56 | 
  57 | //     async openFormCard() {
  58 | //         await this.openWebsite();
  59 | //         await this.locators.formCard.click();
  60 | //     }
  61 | // }
  62 | 
```