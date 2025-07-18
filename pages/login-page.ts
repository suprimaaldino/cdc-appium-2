
export class LoginPage {
  // Username input field
  get usernameInput() {
    return $('~Username');
  }

  // Password input field
  get passwordInput() {
    return $('~Password');
  }

  // Login button
  get loginButton() {
    return $('~Login');
  }

  // Error message (if login fails)
  get errorMessage() {
    return $('~Login failed. Please try again.');
  }

  // Tap login
  async login(username: string, password: string) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}