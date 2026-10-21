# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom_demo2.spec.ts >> Table, Checkbox and Form Tests >> Add a web table record
- Location: tests/pom_demo2.spec.ts:8:9

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Web Table' }) resolved to 2 elements:
    1) <a class="nav-link " href="web-table.php">…</a> aka getByRole('link', { name: ' Web Table', exact: true })
    2) <a title="Web Table" href="web-table.php" data-testid="tool-card-web-table" class="tool-link card h-100 rounded">…</a> aka getByTestId('tool-card-web-table')

Call log:
  - waiting for getByRole('link', { name: 'Web Table' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - text: 
        - link [ref=e5]:
          - /url: https://qaautomationlabs.com/
          - img "QA Automation Labs" [ref=e6]
        - button "Toggle navigation" [ref=e7] [cursor=pointer]: ☰
        - search [ref=e9]:
          - searchbox "Search" [ref=e10]
    - complementary [ref=e11]:
      - link " Testing Tools" [ref=e12]:
        - /url: index.php
        - generic [ref=e13]: 
        - text: Testing Tools
      - navigation [ref=e15]:
        - menu [ref=e16]:
          - listitem [ref=e17]:
            - link " Dashboard" [ref=e18]:
              - /url: index.php
              - generic [ref=e19]: 
              - paragraph [ref=e20]: Dashboard
          - listitem [ref=e21]:
            - link " Checkbox" [ref=e22]:
              - /url: checkbox.php
              - generic [ref=e23]: 
              - paragraph [ref=e24]: Checkbox
          - listitem [ref=e25]:
            - link " Radio Button" [ref=e26]:
              - /url: radio-button.php
              - generic [ref=e27]: 
              - paragraph [ref=e28]: Radio Button
          - listitem [ref=e29]:
            - link " Dropdown" [ref=e30]:
              - /url: dropdown.php
              - generic [ref=e31]: 
              - paragraph [ref=e32]: Dropdown
          - listitem [ref=e33]:
            - link " Form" [ref=e34]:
              - /url: form.php
              - generic [ref=e35]: 
              - paragraph [ref=e36]: Form
          - listitem [ref=e37]:
            - link " Web Table" [ref=e38]:
              - /url: web-table.php
              - generic [ref=e39]: 
              - paragraph [ref=e40]: Web Table
          - listitem [ref=e41]:
            - link " iFrame" [ref=e42]:
              - /url: iframe.php
              - generic [ref=e43]: 
              - paragraph [ref=e44]: iFrame
          - listitem [ref=e45]:
            - link " Shadow DOM" [ref=e46]:
              - /url: shadow-dom.php
              - generic [ref=e47]: 
              - paragraph [ref=e48]: Shadow DOM
          - listitem [ref=e49]:
            - link " Drag & Drop" [ref=e50]:
              - /url: drag-and-drop.php
              - generic [ref=e51]: 
              - paragraph [ref=e52]: Drag & Drop
          - listitem [ref=e53]:
            - link " Notifications" [ref=e54]:
              - /url: notifications.php
              - generic [ref=e55]: 
              - paragraph [ref=e56]: Notifications
          - listitem [ref=e57]:
            - link " JavaScript Alert" [ref=e58]:
              - /url: javaScript-alert.php
              - generic [ref=e59]: 
              - paragraph [ref=e60]: JavaScript Alert
          - listitem [ref=e61]:
            - link " File Upload" [ref=e62]:
              - /url: file-upload.php
              - generic [ref=e63]: 
              - paragraph [ref=e64]: File Upload
          - listitem [ref=e65]:
            - link " File Download" [ref=e66]:
              - /url: file-download.php
              - generic [ref=e67]: 
              - paragraph [ref=e68]: File Download
          - listitem [ref=e69]:
            - link " Window Popup Modal" [ref=e70]:
              - /url: window-popup-modal.php
              - generic [ref=e71]: 
              - paragraph [ref=e72]: Window Popup Modal
          - listitem [ref=e73]:
            - link " List Box" [ref=e74]:
              - /url: list-box.php
              - generic [ref=e75]: 
              - paragraph [ref=e76]: List Box
          - listitem [ref=e77]:
            - link " Slider" [ref=e78]:
              - /url: slider.php
              - generic [ref=e79]: 
              - paragraph [ref=e80]: Slider
    - generic [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e85]:
          - generic [ref=e86]:
            - heading "UI Automation Playground" [level=1] [ref=e87]
            - paragraph [ref=e88]: A free, no-login practice ground for UI test automation. Pick any widget to sharpen your locators, waits and interactions — built for Playwright, Selenium & Cypress.
            - generic [ref=e89]:
              - generic [ref=e90]:
                - generic [ref=e91]: 
                - text: 15 hands-on tools
              - generic [ref=e92]:
                - generic [ref=e93]: 
                - text: 3 frameworks
              - generic [ref=e94]:
                - generic [ref=e95]: 
                - text: Copy-ready locators
              - generic [ref=e96]:
                - generic [ref=e97]: 
                - text: No login required
          - generic [ref=e98]:
            - generic [ref=e99]:
              - generic [ref=e100]: 📚
              - text: Grab my books on Playwright
            - generic [ref=e101]:
              - link [ref=e102]:
                - /url: https://www.amazon.in/Automation-Testing-Using-Playwright-End/dp/9365898005/
                - img "Web Automation Testing Using Playwright with JavaScript — book cover" [ref=e103]
              - generic [ref=e104]:
                - heading "Web Automation Testing Using Playwright with JavaScript" [level=4] [ref=e105]
                - generic [ref=e106]:
                  - link "Amazon" [ref=e107]:
                    - /url: https://www.amazon.in/Automation-Testing-Using-Playwright-End/dp/9365898005/
                  - generic [ref=e108]:
                    - link "BPB" [ref=e109]:
                      - /url: https://in.bpbonline.com/products/web-automation-testing-using-playwright?_pos=2&_sid=f9aa039f6&_ss=r
                    - generic [aria-hidden]: 15% OFF
                  - generic [ref=e110]:
                    - text: "Code:"
                    - button "PLAYWRIGHT15" [ref=e111] [cursor=pointer]
            - generic [ref=e112]:
              - link [ref=e113]:
                - /url: https://www.amazon.in/Automation-Playwright-Python-using-end/dp/9378543170/
                - img "Web Automation with Playwright and Python using AI and MCP — book cover" [ref=e114]
              - generic [ref=e115]:
                - heading "Web Automation with Playwright and Python using AI and MCP" [level=4] [ref=e116]
                - generic [ref=e117]:
                  - link "Amazon" [ref=e118]:
                    - /url: https://www.amazon.in/Automation-Playwright-Python-using-end/dp/9378543170/
                  - generic [ref=e119]:
                    - link "BPB" [ref=e120]:
                      - /url: https://in.bpbonline.com/products/web-automation-with-playwright-and-python-using-ai-and-mcp?_pos=1&_sid=f9aa039f6&_ss=r
                    - generic [aria-hidden]: 15% OFF
                  - generic [ref=e121]:
                    - text: "Code:"
                    - button "PLAYWRIGHTPY15" [ref=e122] [cursor=pointer]
        - paragraph [ref=e123]: Pick any widget below to practice locators, waits and interactions.
        - generic [ref=e125]:
          - generic [ref=e126]: Your progress
          - generic [ref=e127]: 0 / 15 tools automated
      - generic [ref=e129]:
        - generic [ref=e130]: 
        - textbox "Search tools" [ref=e133]:
          - /placeholder: Search tools… (e.g. drag, alert, table)
      - text: 
      - generic [ref=e134]:
        - heading " Form Controls" [level=4] [ref=e135]:
          - generic [ref=e136]: 
          - text: Form Controls
        - generic [ref=e137]:
          - generic [ref=e138]:
            - link " Checkbox Single and grouped checkbox states Open " [ref=e139]:
              - /url: checkbox.php
              - generic [ref=e140]:
                - generic [ref=e141]: 
                - heading "Checkbox" [level=5] [ref=e143]
                - paragraph [ref=e144]: Single and grouped checkbox states
                - generic [ref=e145]:
                  - text: Open
                  - generic [ref=e146]: 
            - button "Mark checkbox as automated" [ref=e147] [cursor=pointer]:
              - generic [ref=e148]: 
          - generic [ref=e149]:
            - link " Radio Button Mutually exclusive option groups Open " [ref=e150]:
              - /url: radio-button.php
              - generic [ref=e151]:
                - generic [ref=e152]: 
                - heading "Radio Button" [level=5] [ref=e154]
                - paragraph [ref=e155]: Mutually exclusive option groups
                - generic [ref=e156]:
                  - text: Open
                  - generic [ref=e157]: 
            - button "Mark radio-button as automated" [ref=e158] [cursor=pointer]:
              - generic [ref=e159]: 
          - generic [ref=e160]:
            - link " Dropdown Native and multi-select menus Open " [ref=e161]:
              - /url: dropdown.php
              - generic [ref=e162]:
                - generic [ref=e163]: 
                - heading "Dropdown" [level=5] [ref=e165]
                - paragraph [ref=e166]: Native and multi-select menus
                - generic [ref=e167]:
                  - text: Open
                  - generic [ref=e168]: 
            - button "Mark dropdown as automated" [ref=e169] [cursor=pointer]:
              - generic [ref=e170]: 
          - generic [ref=e171]:
            - link " List Box Two-pane multi-select transfer Open " [ref=e172]:
              - /url: list-box.php
              - generic [ref=e173]:
                - generic [ref=e174]: 
                - heading "List Box" [level=5] [ref=e176]
                - paragraph [ref=e177]: Two-pane multi-select transfer
                - generic [ref=e178]:
                  - text: Open
                  - generic [ref=e179]: 
            - button "Mark list-box as automated" [ref=e180] [cursor=pointer]:
              - generic [ref=e181]: 
          - generic [ref=e182]:
            - link " Slider Range slider drag interactions Open " [ref=e183]:
              - /url: slider.php
              - generic [ref=e184]:
                - generic [ref=e185]: 
                - heading "Slider" [level=5] [ref=e187]
                - paragraph [ref=e188]: Range slider drag interactions
                - generic [ref=e189]:
                  - text: Open
                  - generic [ref=e190]: 
            - button "Mark slider as automated" [ref=e191] [cursor=pointer]:
              - generic [ref=e192]: 
      - generic [ref=e193]:
        - heading " Forms & Data" [level=4] [ref=e194]:
          - generic [ref=e195]: 
          - text: Forms & Data
        - generic [ref=e196]:
          - generic [ref=e197]:
            - link " Form Full form with field validation Open " [ref=e198]:
              - /url: form.php
              - generic [ref=e199]:
                - generic [ref=e200]: 
                - heading "Form" [level=5] [ref=e202]
                - paragraph [ref=e203]: Full form with field validation
                - generic [ref=e204]:
                  - text: Open
                  - generic [ref=e205]: 
            - button "Mark form as automated" [ref=e206] [cursor=pointer]:
              - generic [ref=e207]: 
          - generic [ref=e208]:
            - link " Web Table Sortable, paginated data table Open " [ref=e209]:
              - /url: web-table.php
              - generic [ref=e210]:
                - generic [ref=e211]: 
                - heading "Web Table" [level=5] [ref=e213]
                - paragraph [ref=e214]: Sortable, paginated data table
                - generic [ref=e215]:
                  - text: Open
                  - generic [ref=e216]: 
            - button "Mark web-table as automated" [ref=e217] [cursor=pointer]:
              - generic [ref=e218]: 
      - generic [ref=e219]:
        - heading " Windows, Frames & DOM" [level=4] [ref=e220]:
          - generic [ref=e221]: 
          - text: Windows, Frames & DOM
        - generic [ref=e222]:
          - generic [ref=e223]:
            - link " iFrame Content nested inside iframes Open " [ref=e224]:
              - /url: iframe.php
              - generic [ref=e225]:
                - generic [ref=e226]: 
                - heading "iFrame" [level=5] [ref=e228]
                - paragraph [ref=e229]: Content nested inside iframes
                - generic [ref=e230]:
                  - text: Open
                  - generic [ref=e231]: 
            - button "Mark iframe as automated" [ref=e232] [cursor=pointer]:
              - generic [ref=e233]: 
          - generic [ref=e234]:
            - link " Shadow DOM Elements inside shadow roots Open " [ref=e235]:
              - /url: shadow-dom.php
              - generic [ref=e236]:
                - generic [ref=e237]: 
                - heading "Shadow DOM" [level=5] [ref=e239]
                - paragraph [ref=e240]: Elements inside shadow roots
                - generic [ref=e241]:
                  - text: Open
                  - generic [ref=e242]: 
            - button "Mark shadow-dom as automated" [ref=e243] [cursor=pointer]:
              - generic [ref=e244]: 
          - generic [ref=e245]:
            - link " Window Popup Modal Bootstrap modals & window popups Open " [ref=e246]:
              - /url: window-popup-modal.php
              - generic [ref=e247]:
                - generic [ref=e248]: 
                - heading "Window Popup Modal" [level=5] [ref=e250]
                - paragraph [ref=e251]: Bootstrap modals & window popups
                - generic [ref=e252]:
                  - text: Open
                  - generic [ref=e253]: 
            - button "Mark window-popup-modal as automated" [ref=e254] [cursor=pointer]:
              - generic [ref=e255]: 
      - generic [ref=e256]:
        - heading " Interactions & Alerts" [level=4] [ref=e257]:
          - generic [ref=e258]: 
          - text: Interactions & Alerts
        - generic [ref=e259]:
          - generic [ref=e260]:
            - link " Drag & Drop HTML5 drag-and-drop targets Open " [ref=e261]:
              - /url: drag-and-drop.php
              - generic [ref=e262]:
                - generic [ref=e263]: 
                - heading "Drag & Drop" [level=5] [ref=e265]
                - paragraph [ref=e266]: HTML5 drag-and-drop targets
                - generic [ref=e267]:
                  - text: Open
                  - generic [ref=e268]: 
            - button "Mark drag-and-drop as automated" [ref=e269] [cursor=pointer]:
              - generic [ref=e270]: 
          - generic [ref=e271]:
            - link " JavaScript Alert alert / confirm / prompt dialogs Open " [ref=e272]:
              - /url: javaScript-alert.php
              - generic [ref=e273]:
                - generic [ref=e274]: 
                - heading "JavaScript Alert" [level=5] [ref=e276]
                - paragraph [ref=e277]: alert / confirm / prompt dialogs
                - generic [ref=e278]:
                  - text: Open
                  - generic [ref=e279]: 
            - button "Mark javaScript-alert as automated" [ref=e280] [cursor=pointer]:
              - generic [ref=e281]: 
          - generic [ref=e282]:
            - link " Notifications Toast-style notifications Open " [ref=e283]:
              - /url: notifications.php
              - generic [ref=e284]:
                - generic [ref=e285]: 
                - heading "Notifications" [level=5] [ref=e287]
                - paragraph [ref=e288]: Toast-style notifications
                - generic [ref=e289]:
                  - text: Open
                  - generic [ref=e290]: 
            - button "Mark notifications as automated" [ref=e291] [cursor=pointer]:
              - generic [ref=e292]: 
      - generic [ref=e293]:
        - heading " Files" [level=4] [ref=e294]:
          - generic [ref=e295]: 
          - text: Files
        - generic [ref=e296]:
          - generic [ref=e297]:
            - link " File Upload Single & multiple file uploads Open " [ref=e298]:
              - /url: file-upload.php
              - generic [ref=e299]:
                - generic [ref=e300]: 
                - heading "File Upload" [level=5] [ref=e302]
                - paragraph [ref=e303]: Single & multiple file uploads
                - generic [ref=e304]:
                  - text: Open
                  - generic [ref=e305]: 
            - button "Mark file-upload as automated" [ref=e306] [cursor=pointer]:
              - generic [ref=e307]: 
          - generic [ref=e308]:
            - link " File Download Trigger and verify downloads Open " [ref=e309]:
              - /url: file-download.php
              - generic [ref=e310]:
                - generic [ref=e311]: 
                - heading "File Download" [level=5] [ref=e313]
                - paragraph [ref=e314]: Trigger and verify downloads
                - generic [ref=e315]:
                  - text: Open
                  - generic [ref=e316]: 
            - button "Mark file-download as automated" [ref=e317] [cursor=pointer]:
              - generic [ref=e318]: 
  - contentinfo [ref=e319]:
    - paragraph [ref=e322]:
      - text: © 2026
      - link "QA Automation Labs" [ref=e323]:
        - /url: https://qaautomationlabs.com
      - text: . All Rights Reserved.
  - generic [ref=e324]:
    - button "Inspect locators" [ref=e325] [cursor=pointer]:
      - generic [ref=e326]: 
    - button "Toggle dark mode" [ref=e327] [cursor=pointer]:
      - generic [ref=e328]: 
    - button "Toggle challenge mode" [ref=e329] [cursor=pointer]:
      - generic [ref=e330]: 
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
  8  |     readonly locators: FormTableLocators;
  9  |     readonly navigation: NavigationPage;
  10 | 
  11 |     constructor(private page: Page) {
  12 |         this.locators = new FormTableLocators(page);
  13 |         this.navigation = new NavigationPage(page);
  14 |     }
  15 | 
  16 |     async addTableRecord(data: WebTableData) {
  17 |         await this.navigation.openWebsite();
  18 | 
> 19 |         await this.locators.webTableLink.click();
     |                                          ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Web Table' }) resolved to 2 elements:
  20 | 
  21 |         await this.locators.nameInput.fill(data.name);
  22 |         await this.locators.countryInput.fill(data.country);
  23 | 
  24 |         await this.locators.addRecordButton.click();
  25 | 
  26 |         await expect(
  27 |             this.locators.textCell(data.name)
  28 |         ).toBeVisible();
  29 | 
  30 |         await expect(
  31 |             this.locators.textCell(data.country)
  32 |         ).toBeVisible();
  33 |     }
  34 | 
  35 |     async submitForm(data: UserFormData) {
  36 |         await this.navigation.openFormCard();
  37 | 
  38 |         await this.locators.firstName.fill(data.firstName);
  39 |         await this.locators.middleName.fill(data.middleName);
  40 |         await this.locators.lastName.fill(data.lastName);
  41 |         await this.locators.email.fill(data.email);
  42 |         await this.locators.password.fill(data.password);
  43 |         await this.locators.address.fill(data.address);
  44 |         await this.locators.city.fill(data.city);
  45 |         await this.locators.state.fill(data.state);
  46 |         await this.locators.pinCode.fill(data.pinCode);
  47 | 
  48 |         await this.locators.submitButton.scrollIntoViewIfNeeded();
  49 |         await this.locators.submitButton.click();
  50 |     }
  51 | }
  52 | 
```