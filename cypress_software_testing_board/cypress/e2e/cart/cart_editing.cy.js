describe('Cart editing', () => {
  beforeEach(() => {
    cy.visit('/bolo-sport-watch.html');
    cy.contains('button', /add to cart/i).click();
    cy.get('.counter-number', { timeout: 20000 }).should('contain', '1');
    cy.visit('/checkout/cart/');
  });

  it('updates quantity to 2', () => {
    cy.get('input[name$="[qty]"]', { timeout: 10000 }).first().clear().type('2');
    cy.contains('button', /update shopping cart/i).click();
    cy.get('input[name$="[qty]"]').first().should('have.value', '2');
  });

  it('removes the item', () => {
    cy.get('a[title="Remove item"]', { timeout: 10000 }).first().click();
    cy.contains(/you have no items in your shopping cart/i, { timeout: 10000 }).should('be.visible');
  });
});
