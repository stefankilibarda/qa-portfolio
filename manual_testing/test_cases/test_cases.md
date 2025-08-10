# Test Cases – Examples

---

## Test Case 1 – Add new employee with required fields
**Module:** Employees  
**Description:** Verify that a new employee can be successfully added by filling only required fields.  
**Precondition:** Admin user is logged in.

| Step | Action | Test data | Expected result |
|---:|---|---|---|
| 1 | Navigate to Employees page | https://demo.app.test/#/employees | Employee list is displayed |
| 2 | Click **Add Employee** | – | Add Employee form is displayed |
| 3 | Fill **Name** | Daenerys | Field accepts input |
| 4 | Fill **Surname** | Targaryen | Field accepts input |
| 5 | Fill **Email** | daenery.targaryen@test.com | Valid email accepted |
| 6 | Fill **Birthday** | 10/10/1990 | Valid date accepted |
| 7 | Select **Location** | Dragonstone | Value selected |
| 8 | Select **Tier** | 200-tokens | Value selected |
| 9 | Click **Save** | – | Redirect to list; “Employee successfully added” message; record appears in list |

---

## Test Case 2 – Attempt to add an employee below allowed age
**Module:** Employees  
**Description:** Verify the system behavior when creating an employee below minimum allowed age.  
**Precondition:** Admin user is logged in and on Employees page.

| Step | Action | Test data | Expected result |
|---:|---|---|---|
| 1 | Click **Add Employee** | – | Add Employee form is displayed |
| 2 | Fill **Name** | Michael | Field accepts input |
| 3 | Fill **Surname** | Scott | Field accepts input |
| 4 | Fill **Email** | michael.scott@test.com | Valid email accepted |
| 5 | Fill **Birthday** | 15/03/1965 | Valid date accepted |
| 6 | Select **Location** | Scranton | Value selected |
| 7 | Select **Tier** | 50-tokens | Value selected |
| 8 | Click **Save** | – | Appropriate validation/result shown per business rule (e.g., success or age validation) |

---

## Test Case 3 – Add a new tier with required fields
**Module:** Settings  
**Description:** Verify that a tier can be added successfully by filling only required fields.  
**Precondition:** Admin user is logged in and on Settings page.

| Step | Action | Test data | Expected result |
|---:|---|---|---|
| 1 | Click **Add Tier** | – | “Add Tier” modal opens |
| 2 | Fill **Name** | Bronze | Field accepts input |
| 3 | Fill **# of tokens** | 100 | Field accepts input |
| 4 | Click **Add** | – | Modal closes; “Tier successfully created” message; tier appears in list |

---

## Test Case 4 – Edit an existing tier
**Module:** Settings  
**Description:** Verify that an existing tier can be edited and saved.  
**Precondition:** Admin user is logged in; at least one tier exists on Settings page.

| Step | Action | Test data | Expected result |
|---:|---|---|---|
| 1 | Select an existing tier | e.g., tier named “test” | “Edit Tier” modal opens with current info |
| 2 | Modify **Name** | Test updated | Field accepts input |
| 3 | Modify **# of tokens** | 250 | Field accepts input |
| 4 | Add **Description** | This is a test description | Field accepts input |
| 5 | Click **Edit** | – | “Tier successfully updated” (or equivalent) message; changes persist in list |
