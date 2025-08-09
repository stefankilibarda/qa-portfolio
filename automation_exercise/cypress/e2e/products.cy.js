describe('Products and search', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('opens All Products and a product details page', () => {
    cy.contains('Products').click();
    cy.url().should('include', '/products');
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
    
    cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
    cy.contains('View Product').first().click({ force: true });
    cy.contains('Category:').should('be.visible');
    cy.contains('Availability:').should('be.visible');
    cy.contains('Condition:').should('be.visible');
    cy.contains('Brand:').should('be.visible');
  });

  it('searches for a product and shows results', () => {
    cy.contains('Products').click();
    cy.get('#search_product').type('Dress');
    cy.get('#submit_search').click();

    cy.contains('Searched Products').should('be.visible');
    cy.get('.features_items .product-image-wrapper').its('length').should('be.greaterThan', 0);
  });
});
