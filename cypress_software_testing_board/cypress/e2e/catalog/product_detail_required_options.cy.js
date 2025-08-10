describe('PDP required options', () => {
  it('blocks add to cart without selecting options', () => {
    cy.visit('/women/tops-women/jackets-women.html');
    cy.get('.product-item').first().find('a.product-item-link').click();
    cy.findByRole('button', { name: /add to cart/i }).click();
    cy.contains(/this is a required field/i).should('exist');
  });
});
