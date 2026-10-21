# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom_demo1.spec.ts >> Iframe and Radio Button Tests >> Verify iframe buttons
- Location: tests/pom_demo1.spec.ts:6:9

# Error details

```
TypeError: _InteractionPage.InteractionPage is not a constructor
```

# Test source

```ts
  1  | 
  2  | import { test } from '@playwright/test';
  3  | import { InteractionPage } from '../Pages/InteractionPage';
  4  | 
  5  | test.describe('Iframe and Radio Button Tests', () => {
  6  |     test('Verify iframe buttons', async ({ page }) => {
> 7  |         const interactionPage = new InteractionPage(page);
     |                                 ^ TypeError: _InteractionPage.InteractionPage is not a constructor
  8  | 
  9  |         await interactionPage.testIframe();
  10 |     });
  11 | 
  12 |     test('Verify radio button functionality', async ({ page }) => {
  13 |         const interactionPage = new InteractionPage(page);
  14 | 
  15 |         await interactionPage.testRadioButtons();
  16 |     });
  17 | });
  18 | 
```