# Automation Exercise – Cypress E2E Tests

This project contains automated end-to-end (E2E) tests for the [Automation Exercise](https://automationexercise.com/) demo e-commerce site.  
It was created to demonstrate test automation skills using **Cypress** in JavaScript.

---

## 📂 Project Structure
```
cypress_automation_exercise/
cypress/
├── e2e/
│ ├── auth.cy.js
│ ├── products.cy.js
│ ├── cart_checkout.cy.js
│ └── misc.cy.js
├── fixtures/
├── support/
cypress.config.js
package.json
README.md
```

---

## 🛠 Tech Stack

- **Language:** JavaScript (ES6+)
- **Framework:** [Cypress](https://www.cypress.io/) v13+
- **Test Types:** E2E UI testing
- **Browser:** Chrome (default) – can run headless or headed

---

## 📋 Test Scenarios Covered

1. **Auth Flows**
   - Register new user (`Rick Sanchez` with unique `pickle_rick` email)
   - Delete account
   - Invalid login attempt

2. **Products & Search**
   - Browse all products
   - View product details page
   - Search for products

3. **Cart & Checkout**
   - Add and remove products from cart
   - Persist cart after login
   - Place an order (with registration during checkout)
   - Enter payment details and verify success

4. **Miscellaneous**
   - Subscribe to newsletter from Home and Cart page
   - Send a Contact Us form with file upload

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

- npm install

### 2️⃣ Run Tests in Cypress Test Runner

- npx cypress open
- Select E2E Testing → choose your browser → click on a spec file.

### 3️⃣ Run Tests in Headless Mode

- npx cypress run

### 🔑 Test Data

All tests use:
- First name: Rick
- Last name: Sanchez
- Address: That Street
- Password: Password123!
- Email: Dynamic, prefixed with pickle_rick (e.g., pickle_rick_1691600000000@example.com)

### 📌 Notes
- The node_modules folder is excluded via .gitignore and should be installed fresh after cloning.
- Emails are dynamically generated to avoid conflicts when registering multiple times.
- All selectors target stable data-qa attributes or other consistent DOM elements to reduce flakiness.

### 📄 License
- This project is for educational and portfolio purposes only. The target website is a public practice site intended for automation testing.
