# Magento Cypress Test Suite

This project contains end-to-end (E2E) automated tests for the **Magento Demo Store** ([https://magento.softwaretestingboard.com](https://magento.softwaretestingboard.com)).  
It is a self-contained Cypress project located in the `cypress_software_testing_board` directory, separate from other automation projects in this repository.

## Purpose

The goal of this test suite is to practice and demonstrate automation skills by covering key user flows of a typical e-commerce store, including:

- **Account creation**
- **Product browsing and search**
- **Cart operations (add, edit, remove)**
- **Guest checkout**
- **Product detail pages with required options**

The Magento demo site is designed for testing and learning, so these tests are safe to run repeatedly without affecting a live store.

---

## File Structure
```
cypress_software_testing_board/
├── cypress/
│ ├── e2e/
│ │ ├── account/
│ │ │ └── register.cy.js
│ │ ├── cart/
│ │ │ └── cart_editing.cy.js
│ │ ├── catalog/
│ │ │ ├── pdp_required_options.cy.js
│ │ │ └── search_filter_add_to_cart.cy.js
│ │ └── checkout/
│ │ └── guest_checkout.cy.js
│ ├── fixtures/
│ ├── support/
│ │ ├── commands.js
│ │ └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```


### Directory Overview
- **`cypress/e2e/`** – All test specifications grouped by feature area (`account`, `cart`, `catalog`, `checkout`).
- **`cypress/support/commands.js`** – Custom Cypress commands for reusability.
- **`cypress.config.js`** – Cypress configuration (base URL, timeouts, etc.).
- **`package.json`** – Project dependencies and scripts.

---

## Test Descriptions

### `account/register.cy.js`
Covers **account creation** flow with dynamically generated email addresses.

### `cart/cart_editing.cy.js`
Verifies that a user can:
- Add a product to the cart
- Edit the quantity
- Remove items

### `catalog/pdp_required_options.cy.js`
Checks product detail pages where **required options** (e.g., size, color) must be selected before adding to cart.

### `catalog/search_filter_add_to_cart.cy.js`
Simulates:
- Searching for a product
- Applying filters
- Adding the filtered product to the cart

### `checkout/guest_checkout.cy.js`
Covers **guest checkout** from adding a product to cart through to placing an order and verifying the order number.

---

## Why This Project Is Separate

This `cypress_software_testing_board` project is intentionally kept **separate from other automation projects** in the repository to:
- Maintain independent configurations (`cypress.config.js`)
- Avoid conflicts in dependencies
- Keep tests isolated and focused on the Magento demo site
- Allow running tests independently without affecting other projects

---

## Installation & Running Tests

### 1. Install dependencies

- cd cypress_software_testing_board
- npm install

### 2. Open Cypress Test Runner

- npx cypress open
- Select E2E Testing → choose your browser → click on a spec file.

### 3. Run Tests in Headless Mode

- npx cypress run

### 🔑 Test Data

- First Name: Darth
- Last Name: Vader
- Email: darth.vader+<timestamp>@example.com (generated dynamically per test)
- Address: Death Star
- Password: Test1234!

### 📌 Notes

- This project uses dynamic product selection where possible to avoid “requested qty not available” errors on the demo site.
- Cypress artifacts (videos/, screenshots/) should be gitignored to keep the repo clean.
- Tests are written at a junior QA engineer level – straightforward selectors and minimal abstraction for clarity.

