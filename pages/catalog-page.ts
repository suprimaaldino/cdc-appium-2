export class CatalogPage {
  // Product list container
  get productList() {
    return $('~product-list');
  }

  // First product item
  get firstProduct() {
    return $('(//android.widget.TextView[@content-desc="product-title"])[1]');
  }

  // Add to cart button for first product
  get addToCartButton() {
    return $('(//android.widget.Button[@content-desc="Add To Cart"])[1]');
  }

  async addFirstProductToCart() {
    await this.firstProduct.click();
    await this.addToCartButton.click();
  }
}