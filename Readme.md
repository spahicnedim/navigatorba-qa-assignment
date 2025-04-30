# Test Plan - Navigator.ba

## 1. Introduction
This Test Plan outlines the strategy and scope for testing the web application [https://www.navigator.ba](https://www.navigator.ba). The goal is to ensure functional correctness, visual clarity, and reliability across devices and use cases.

## 2. Objectives
- Verify core functionalities like address search, place viewing, and place creation.
- Detect functional and UI-related bugs.
- Evaluate user experience and identify usability concerns.
- Ensure basic responsiveness across browsers.

## 3. Scope of Testing
- Functional Testing (search, details view, place creation)
- UI/UX Testing
- Smoke Testing
- Positive and Negative Case Validation
- Bug Reporting and Documentation

## 4. Out of Scope
- Load testing or backend performance testing
- Detailed security testing (XSS, SQLi, etc.)

## 5. Test Types
- Smoke Tests
- Functional Tests (Positive & Negative)
- Exploratory Testing
- UI/UX Consistency Checks

## 6. Tools & Environments
- **Browsers**: Arc V1.50.1
- **OS**: macOS 15.4.1
- **Automation**: Playwright with TypeScript
- **Version Control**: Git + GitHub

## 7. Test Data
- Valid and invalid addresses (e.g. “Maršala Tita”, “!@#$%”)
- Partially completed form data
- Typical place data (name, phone, location)

## 8. Entry Criteria
- Web application is accessible at [navigator.ba](https://www.navigator.ba)
- Basic UI and functionality are visible and interactive

## 9. Exit Criteria
- All smoke tests pass
- No critical bugs remain unresolved
- All identified bugs are documented with reproduction steps

## 10. Risks and Mitigation
| Risk                         | Mitigation                      |
|------------------------------|---------------------------------|
| Limited test automation time | Focus on smoke test coverage    |
| Unexpected app downtime      | Perform multiple test sessions  |
| Incomplete form validations  | Include negative tests manually |

## 11. Deliverables
- Test Plan (this document)
- 8–10 Test Cases (including smoke, positive, and negative)
- Automated Smoke Test Suite
- Bug Report Documentation
- GitHub repository with README and scripts




# 🧪 Test Cases – Navigator.ba

## Test Case 1: Application Load
- **Title:** Application Loads Successfully
- **Objective:** Verify that the application loads without critical errors.
- **Preconditions:** User has internet access and open browser.
- **Test Steps:**
  1. Navigate to [https://www.navigator.ba](https://www.navigator.ba)
- **Expected Result:** Homepage loads with the map visible, left menu visible, and search bar visible.
- **Actual Result:** Homepage loads with the map visible, left menu visible, and search bar visible.
- **Status:** Pass
- **Type:** Smoke, Positive

---

## Test Case 2: Valid Address Search

- **Title:** Search Functionality - Valid Address
- **Objective:** Verify search results for a valid address.
- **Preconditions:** User is on the homepage.
- **Test Steps:**
    1. Enter "Maršala Tita" into the search bar.
    2. Click on the Search button or press Enter.
- **Expected Result:** List of relevant address and locations is displayed.
- **Actual Result:** List of relevant address and locations is displayed.
- **Status:** Pass
- **Type:** Smoke, Positive

---

## Test Case 3: Invalid Address Search

- **Title:** Search Functionality - Invalid Address
- **Objective:** Validate how the system handles nonsensical input.
- **Preconditions:** User is on the homepage.
- **Test Steps:**
    1. Enter "asdfgh1234!!!" into the search bar.
    2. Click Search.
- **Expected Result:** Results for 'asdfgh1234!!!'. No results found message appears.
- **Actual Result:** Results for 'asdfgh1234!!!'. No results found message appears and button to add that place and it is a good UX behavior.
- **Status:** Pass
- **Type:** Positive UX fallback

---

## Test Case 4: View Place Details

- **Title:** View Place Details after Search
- **Objective:** Verify that place details are displayed properly after selecting a result.
- **Preconditions:** Search results are displayed.
- **Test Steps:**
    1. Click on any listed place (e.g., "UniCredit Bank - Bankomat - M. Tita 13").
- **Expected Result:** Place detail page opens with full information (description, contacts, working hours, rating, comments). And to show it on map.
- **Actual Result:** Place detail page opens with full information (image, description, contacts, working hours, rating, comments). Also, a button for suggested changes, to claim that place. And it is shown on map as well.
- **Status:** Pass
- **Type:** Smoke, Positive

---

## Test Case 5: Create New Place - Valid Data

- **Title:** Create New Place with All Valid Inputs
- **Objective:** Verify that a user can successfully create a new place when all required fields are correctly filled.
- **Preconditions:** User is on "Create Place" form.
- **Test Steps:**
    1. Fill in all mandatory fields with valid data.
    2. Submit the form.
- **Expected Result:** Place is successfully created and confirmation message appears.
- **Actual Result:** Some unexpected error occurred. Please try again. An unexpected error message appears and the place cannot be created. 
- **Status:** Fail
- **Type:** Negative

---

## Test Case 6: Create New Place - Missing Required Fields

- **Title:** Form Validation on Place Creation
- **Objective:** Ensure error handling when required fields are missing.
- **Preconditions:** User is on "Create Place" form.
- **Test Steps:**
    1. Leave one or more required fields empty.
    2. Submit the form.
- **Expected Result:** Form highlights missing fields and displays specific error messages.
- **Actual Result:** Form contains invalid data. Please correct and try again. But it doesn't say which exact fields are missing. Bad UX.
- **Status:** Fail
- **Type:** Negative

---

## Test Case 7: Hover Over Place Description

- **Title:** Verify Hover Behavior for Place Descriptions
- **Objective:** Confirm that users can access full descriptions easily.
- **Preconditions:** Place details page is open.
- **Test Steps:**
    1. Hover the mouse over the visible part of the place description.
- **Expected Result:** User clearly sees if more description exists, ideally through visual indicators.
- **Actual Result:** Doesn't have any visual indicator. But when you click on that text, it shows the full description. But it is not clear that you can click on that text.
- **Status:** Fail
- **Type:** Negative (UX flaw)

---

## Test Case 8: Hover on Working Hours Tooltip

- **Title:** Verify Tooltip on Working Hours Icon
- **Objective:** Check if the tooltip showing detailed working hours stays open while hovering.
- **Preconditions:** Place details page is open.
- **Test Steps:**
  1. Hover over the clock icon (🕒), which represents working hours.
  2. Move the cursor slightly around the icon and the “Detaljno” text.
- **Expected Result:** Tooltip with detailed working hours should remain visible as long as the user is hovering over the icon or the tooltip area.
- **Actual Result:** Tooltip briefly appears and disappears within a second, making it nearly impossible to interact with or read.
- **Status:** Fail
- **Type:** Negative (UX usability issue)

---

## Test Case 9: Rating a Place

- **Title:** Rate an Existing Place
- **Objective:** Verify that user can submit a rating for a place.
- **Preconditions:** Place details page is open.
- **Test Steps:**
    1. Scroll to the rating section.
    2. Select a rating (e.g., 4 stars).
    3. Submit rating.
- **Expected Result:** Rating is accepted and updated successfully.
- **Actual Result:** Rating is accepted and updated successfully.
- **Status:** Pass
- **Type:** Positive

---

## Test Case 10: Report a Problem via "Report a Problem" Form

- **Title:** Reporting an Issue
- **Objective:** Ensure that the Report a Problem form submits successfully.
- **Preconditions:** User is logged in or anonymous.
- **Test Steps:**
    1. Fill out the Report a Problem form with details.
    2. Submit the form.
- **Expected Result:** Success message confirming the report submission.
- **Actual Result:** Unable to send your feedback. Some unexpected error occurred. Please try again. That error appears and i couldn't send a report.
- **Status:** Fail
- **Type:** Negative

---

## 📎 Known Issues

- [Tooltip disappears on hover](bug-reports/tooltip-hover.md)
- [No visual cue for long description](bug-reports/place-description-visibility.md)
- [Split service cannot be reverted](bug-reports/split-service-unreversible.md)
- [Form fields not highlighted on error](bug-reports/create-place-validation.md)
- [Unexpected error during place creation](bug-reports/create-place-error.md)
- [Report Issue form fails to submit](bug-reports/report-issue-failure.md)
- [Social bar overlaps sidebar on hover](bug-reports/navbar-hover-overlap.md)

---

# 📋 Smoke Test Set

The following Test Cases are selected as Smoke Tests:
- Test Case 1: Application Load
- Test Case 2: Valid Address Search
- Test Case 4: View Place Details
- Test Case 9: Rating a Place
> 🔸 Note: Test Case 5 (Create Place) was excluded from the Smoke Test Set
> even though it is a critical functionality. It currently fails due to an application-side error
> (see bug report), and therefore cannot be included in the passing smoke suite.


# 🚀 How to Run the Tests (Playwright + TypeScript)
## Prerequisites
- Node.js installed

1. Install dependencies:
````
npm install
````

---

2. Install Playwright:
````
npx playwright install
````

---

3. Run all smoke tests:
```
npx playwright test
````

---

4. Run single test file (e.g. application load):
````
npx playwright test tests/smoke/app-load.spec.ts
````






