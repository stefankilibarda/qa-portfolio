describe('Guest checkout', () => {
  function addStableProduct() {
    cy.visit('/bolo-sport-watch.html');
    cy.contains('button', /add to cart/i).click();
    cy.get('body', { timeout: 15000 }).then($b => {
      if ($b.find('.message-success').length) return;
      if ($b.find('.message-error:contains("requested qty")').length) {
        cy.visit('/fusion-backpack.html');
        cy.contains('button', /add to cart/i).click();
        cy.get('.message-success', { timeout: 15000 }).should('be.visible');
      } else {
        cy.get('.message-success', { timeout: 15000 }).should('be.visible');
      }
    });
  }

  it('places an order as guest', () => {
    const email = `darth.vader+${Date.now()}@example.com`;
    addStableProduct();
    cy.visit('/checkout/cart/');
    cy.get('main').contains('button', 'Proceed to Checkout', { timeout: 20000 }).scrollIntoView().click({ force: true });
    cy.location('pathname', { timeout: 20000 }).should('include', '/checkout');

    cy.get('body', { timeout: 20000 }).then($b => {
      if ($b.find('#customer-email:visible').length) {
        cy.get('#customer-email:visible').type(email);
      } else {
        cy.get('input[name="username"]:visible').type(email);
      }
    });

    cy.get('form#co-shipping-form', { timeout: 20000 }).should('be.visible').within(() => {
      cy.get('input[name="firstname"]:visible').type('Darth');
      cy.get('input[name="lastname"]:visible').type('Vader');
      cy.get('input[name="street[0]"]:visible').type('Death Star');
      cy.get('input[name="city"]:visible').type('Testville');
      cy.get('select[name="country_id"]:visible').select('US');
      cy.get('select[name="region_id"]:visible').then($sel => { if ($sel.find('option').length > 1) cy.wrap($sel).select(1); });
      cy.get('input[name="postcode"]:visible').type('10001');
      cy.get('input[name="telephone"]:visible').type('5551112222');
    });

    cy.get('.table-checkout-shipping-method input[type="radio"]:visible', { timeout: 20000 }).first().check({ force: true });
    cy.contains('button', 'Next', { timeout: 20000 }).should('be.enabled').click();

    cy.contains('button', 'Place Order', { timeout: 20000 }).should('be.enabled').click();
    cy.location('pathname', { timeout: 30000 }).should('include', '/checkout/onepage/success');
    cy.get('.checkout-success', { timeout: 30000 }).should('be.visible');
    cy.get('.checkout-success > :nth-child(1) > span', { timeout: 30000 }).invoke('text').should('match', /\d+/);
  });
});
