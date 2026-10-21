# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom_demo1.spec.ts >> Iframe and Radio Button Tests >> Verify iframe buttons
- Location: tests/pom_demo1.spec.ts:5:9

# Error details

```
TypeError: _InteractionPage.InteractionPage is not a constructor
```

# Test source

```ts
  1  | 
  2  | import { test } from '@playwright/test';
  3  | import { InteractionPage } from '../Pages/InteractionPage';
  4  | test.describe('Iframe and Radio Button Tests', () => {
  5  |     test('Verify iframe buttons', async ({ page }) => {
> 6  |         const interactionPage = new InteractionPage(page);
     |                                 ^ TypeError: _InteractionPage.InteractionPage is not a constructor
  7  | 
  8  |         await interactionPage.testIframe();
  9  |     });
  10 | 
  11 |     test('Verify radio button functionality', async ({ page }) => {
  12 |         const interactionPage = new InteractionPage(page);
  13 | 
  14 |         await interactionPage.testRadioButtons();
  15 |     });
  16 | });
  17 | 
```