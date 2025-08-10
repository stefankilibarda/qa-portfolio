**Bug reports**

**ID \- 001**  
**Summary:**  
Long user names overflow and break the layout in the user list view.  
**Description:**  
When a user enters an excessively long name or last name (e.g., repeating characters), the name field in the user list does not truncate or wrap properly. This causes the row content to overflow, pushing layout elements out of alignment and impacting the visual appearance of the interface.  
**Environment:**  
Desktop, Linux Mint 22, Chrome Version 136  
Laptop, 1920x1080 resolution  
**Preconditions:**  
User with a long name (e.g., over 100 characters total) exist in the system. (e.g. Teeeeeeeeeeeeeeessssssssssssstttttttttttt Useeeeeeer Useeeeeeer Useeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr )  
**Steps to reproduce**  
	1\. 	Click on employees button in the sidebar  
	2\.	Click on add employee button  
3\.	Populate name and surname input fields with input from preconditions, and other required fields and save  
4\.	Go to the user list view and scroll down to the newly created user  
**Expected result:**  
The name should be truncated and the row should maintain its structure without overlapping or layout breakage.  
**Actual result:**  
The long name (50+ characters) breaks the layout, pushing other elements and making the row unreadable.  
**Severity:** Medium  
**Priority:** High  
**Attachment:**  
bug\_advantages.mkv  
**Repro rate:**  
100%

**ID \- 002**  
**Summary:**  
404 Not Found briefly appears during login redirection with valid credentials  
**Description:**  
When logging in with valid credentials, after clicking the login button, the application briefly shows a "404 Not Found" page before successfully redirecting to the dashboard. This happens consistently and may cause confusion for the user or indicate an underlying routing issue.  
**Environment:**  
Desktop, Linux Mint 22, Chrome Version 136  
Laptop, 1920x1080 resolution  
**Preconditions:**  
User has valid credentials and is not currently logged in.  
**Steps to reproduce**

1. Open the login page.  
2. Enter valid credentials.  
3. Click the "Login" button.

**Expected result:**  
The user should be smoothly redirected to the dashboard without any intermediate error pages.  
**Actual result:**  
A "404 Not Found" page briefly appears before the dashboard loads.  
**Severity:** Low (if it does not block access) / Medium (if it causes confusion or appears as an error to the user)  
**Priority:** Medium  
**Attachment:**  
ID-002 \- 404\_flicker\_on\_redirect.gif  
**Repro rate:**  
100%

**ID \- 003**  
**Summary:**  
Product list doesn't always retain scroll/load state when navigating back from a product page  
**Description:**  
On https://www.genericclotheswebsite.com, while browsing dresses, clicking "Show more" loads 200 additional items per click. After loading several batches (e.g. 600 or 800 products) and opening a product, using the browser's back button doesn't always return the user to the same scroll/load state. In some cases, it resets to the first 200 products, while in others it correctly returns to the previous view. This behavior is inconsistent and affects user experience.  
**Environment:**  
Desktop, Linux Mint 22, Chrome Version 136  
Laptop, 1920x1080 resolution  
**Preconditions:**  
At least 600–800 products have been loaded by clicking “Show more” multiple times.  
**Steps to reproduce:**

1. Go to the “Dresses” section on reserved.com  
2. Click “Show more” until 600–800 products are visible  
3. Open any product  
4. Click the browser's back button

**Expected result:**  
Users should be returned to the exact position and number of products previously loaded.  
**Actual result:**  
Sometimes the list resets to the first 200 products; other times, it restores correctly.  
**Severity:** Medium  
**Priority:** Medium  
**Attachment:**  
generic\_clothes\_website\_bug.mkv  
**Repro rate:**  
Intermittent (approx. 50–70%)

**ID \- 004**  
**Summary:**  
No character count feedback when typing in summary textarea in "Edit Company Advantage Group" modal  
**Description:**  
In the **"Edit Company Advantage Group"** modal, the summary textarea field has a maximum character limit. However, as the user types, there is no indication of the total character limit or how many characters have been used or remain. When the limit is exceeded, a generic validation message appears saying "too long," but it doesn't help the user gauge input length in real time.  
**Environment:**  
Desktop, Windows 10, Chrome Version 124  
Desktop monitor, 1920x1080  
**Preconditions:**  
A company advantage group already exists and is being edited.  
**Steps to reproduce:**

1. Open the "Edit Company Advantage Group" modal.  
2. Locate the summary textarea input.  
3. Start typing a long string until you exceed the character limit.

**Expected result:**  
A character counter (e.g. “123/500”) is displayed below or beside the textarea, updating as the user types.  
**Actual result:**  
No counter is displayed. Only a generic validation message ("too long") appears once the limit is exceeded.  
**Severity:** Low  
**Priority:** Medium  
**Attachment:**  
advantage\_bug.jpeg  
**Repro rate:**  
100%