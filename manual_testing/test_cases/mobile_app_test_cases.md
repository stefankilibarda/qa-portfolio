# Mobile App – Example Test Cases

> **Note:**  
> This example is based on a *generic social media mobile application* for portfolio purposes only.  
> Any resemblance to an existing app is purely coincidental.  
> All details (app name, environments, user data) have been anonymized.

---

## 📋 Test Cases

### Test Case 1 – Add New Photo Post with Required Fields Only

**Module:** Posts  
**Description:** Verify that a user can successfully create and publish a new photo post by providing only the required information.  
**Precondition:** User is logged into the mobile app, is on the Home feed, has at least one image in the device gallery, and has granted gallery permissions.

| Step | Action | Test Data | Expected Result |
|------|--------|-----------|-----------------|
| 1 | Tap the **New Post** button from the Home feed | - | Media picker opens, displaying available media |
| 2 | Select a single photo from the gallery | `test_photo.jpg` | Photo is highlighted and "Next" becomes enabled |
| 3 | Tap **Next** to skip editing/filter | - | User is taken to caption/details screen |
| 4 | Tap **Share** | - | User returns to Home feed; confirmation message appears |
| 5 | Refresh feed | - | Newly posted photo appears with correct timestamp |

---

### Test Case 2 – Create New Account with Valid Data

**Module:** Sign Up  
**Description:** Verify that a new user can sign up successfully by providing valid required information.  
**Precondition:** Mobile app is installed and no user is currently logged in.

| Step | Action | Test Data | Expected Result |
|------|--------|-----------|-----------------|
| 1 | Tap **Create New Account** | - | Sign-up form appears |
| 2 | Enter email address | `test.user@example.com` | Field accepts valid email |
| 3 | Enter full name | `Test User` | Field accepts text |
| 4 | Enter password | `Test1234!` | Field masks input and meets password rules |
| 5 | Tap **Next** and select birthdate | `01/01/2000` | Date is accepted |
| 6 | Tap **Next/Continue** | - | Verification code prompt appears |
| 7 | Enter verification code | `123456` | Code is accepted |
| 8 | Complete sign-up | - | User lands on onboarding or feed screen |
| 9 | Check profile | - | Newly created account info is displayed |
