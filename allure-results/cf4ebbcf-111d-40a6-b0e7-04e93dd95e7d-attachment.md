# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom_demo1.spec.ts >> Iframe and Radio Button Tests >> Verify iframe buttons
- Location: tests/pom_demo1.spec.ts:5:9

# Error details

```
Error: page.goto: Protocol error (Playwright.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | import { Page, expect } from '@playwright/test';
  3  | import { NavigationLocators } from '../Locators/NavigationLocators';
  4  | 
  5  | export class NavigationPage {
  6  |     readonly locators: NavigationLocators;
  7  | 
  8  |     constructor(private page: Page) {
  9  |         this.locators = new NavigationLocators(page);
  10 |     }
  11 | 
  12 |     async openWebsite() {
> 13 |         await this.page.goto('/');
     |                         ^ Error: page.goto: Protocol error (Playwright.navigate): Cannot navigate to invalid URL
  14 |         await expect(this.page).toHaveURL('/');
  15 |     }
  16 | 
  17 |     async openIframeCard() {
  18 |         await this.openWebsite();
  19 |         await this.locators.iframeCard.click();
  20 |     }
  21 | 
  22 |     async openRadioCard() {
  23 |         await this.openWebsite();
  24 |         await this.locators.radioCard.click();
  25 |     }
  26 | 
  27 |     async openCheckboxCard() {
  28 |         await this.openWebsite();
  29 |         await this.locators.checkboxCard.click();
  30 |     }
  31 | 
  32 |     async openFormCard() {
  33 |         await this.openWebsite();
  34 |         await this.locators.formCard.click();
  35 |     }
  36 | }
  37 | 
```