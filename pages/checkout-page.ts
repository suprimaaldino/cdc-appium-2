export class CheckoutPage {
  get fullNameInput() {
    return $('~Full Name* input field');
  }

  get addressInput() {
    return $('~Address Line 1* input field');
  }

  get cityInput() {
    return $('~City* input field');
  }

  get zipCodeInput() {
    return $('~Zip Code* input field');
  }

  get countryInput() {
    return $('~Country* input field');
  }

  get toPaymentButton() {
    return $('~To Payment');
  }

  async fillShippingDetails() {
    await this.fullNameInput.setValue('Aldino QA');
    await this.addressInput.setValue('Jl. Automation No.1');
    await this.cityInput.setValue('Yogyakarta');
    await this.zipCodeInput.setValue('55198');
    await this.countryInput.setValue('Indonesia');
    await this.toPaymentButton.click();
  }
}