# Reflective Questions

### 1. Why do we use localStorage to store the JWT token instead of saving it in a React state? What are the advantages and risks?

**Advantages:**
- **Persistence:** localStorage keeps the token even if you refresh the page or close and reopen the browser. This means users stay logged in until the token expires or is removed.
- **Accessibility:** It makes the token available across different components and pages without needing to pass it around manually.

**Risks:**
- **Security:** Storing tokens in localStorage can expose them to XSS attacks. If someone injects malicious scripts, they could steal the token.
- **Tampering:** While the token itself is signed and can't be altered without invalidating it, storing it in localStorage doesn't stop unauthorized access.

### 2. How does the AuthContext improve the way we manage user authentication across different pages?

- **Centralized Management:** AuthContext gives us one place to manage authentication, making it easier to keep track of the user's status.
- **Easy Access:** Any component can get authentication info without needing to pass props through multiple layers.
- **Consistency:** It ensures all parts of the app are on the same page about whether the user is logged in.

### 3. What would happen if the token in localStorage is expired or tampered with? How should our app handle such a case?

- **Expired Token:** If the token is expired, API requests will fail with an authentication error. The app should catch this, log the user out, and ask them to log in again.
- **Tampered Token:** If someone tampers with the token, it won't pass validation on the server. The app should clear the invalid token from localStorage and redirect the user to the login page.

**What to Do:**
- Always validate tokens on the server.
- Use a library like `jwt-decode` to check if the token is expired before making requests.
- If the token is invalid or expired, clear it and redirect the user to log in.

### 4. How does using a ProtectedRoute improve the user experience and security of the application?

- **Better Experience:** ProtectedRoute makes sure only logged-in users can see certain pages. This keeps things relevant for users.
- **Security:** It blocks unauthorized users from accessing sensitive pages.
- **Redirection:** If someone isn't logged in, they get sent to the login page, which feels natural and keeps things secure.

### 5. What are the security implications of showing different UI elements (like "Logout" or "Dashboard") based on the token state? Could this ever leak information?

- **Security Concerns:**
  - If the token state isn't properly checked, someone could trick the app into showing UI elements they shouldn't see.
  - Relying only on client-side checks can lead to unauthorized access if the server doesn't enforce rules.

- **Leaking Info:**
  - Showing different UI elements based on the token state might reveal whether someone is logged in, which could be sensitive in some cases.

**How to Handle It:**
- Always validate tokens on the server before showing sensitive data or actions.
- Don't rely only on client-side checks to decide what to show.
- Write secure code to prevent attacks like XSS that could mess with the token state.
