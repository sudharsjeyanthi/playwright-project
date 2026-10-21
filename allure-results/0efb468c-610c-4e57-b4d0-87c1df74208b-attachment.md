# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login_demo.spec.ts >> Login page
- Location: tests/login_demo.spec.ts:3:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Login page', async ({ page }) => {
  4  |     await page.goto('https://demo.applitools.com/');
  5  | 
  6  |     await expect(page).toHaveURL(
  7  |         'https://demo.applitools.com/'
  8  |     );
  9  |     await page.pause();
> 10 |     await page.getByPlaceholder('Enter your username').fill("sudhars");
     |                                                        ^ Error: locator.fill: Target page, context or browser has been closed
  11 |     await page.getByPlaceholder('Enter your password').fill("123");
  12 |     await page.getByText('Sign in').click();
  13 | 
  14 | });
```