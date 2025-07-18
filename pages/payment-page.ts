export class PaymentPage {
  get cardNumberInput() {
    return $('~Card Number* input field');
  }

  get expiryDateInput() {
    return $('~Expiration Date* input field');
  }

  get cvvInput() {
    return $('~Security Code* input field');
  }

  get payButton() {
    return $('~Pay Now');
  }

  async fillPaymentDetails() {
    await this.cardNumberInput.setValue('4111111111111111');
    await this.expiryDateInput.setValue('12/25');
    await this.cvvInput.setValue('123');
    await this.payButton.click();
  }
}