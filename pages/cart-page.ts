export class CartPage {
  // Cart item list
  get cartItems() {
    return $$('~cart-item');
  }

  // Checkout button
  get checkoutButton() {
    return $('~Checkout');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}