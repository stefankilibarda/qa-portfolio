describe('Search, filter, sort, add to cart', () => {
  it('searches, sorts, and adds a product to the cart', () => {
    cy.visit('/');
    cy.get('#search').type('jacket{enter}');
    cy.get('.page-title', { timeout: 10000 }).should('contain', 'Search results for');
    cy.get('body').then(($body) => {
      if ($body.find('div.filter-options-title:contains("Size")').length) {
        cy.contains('div.filter-options-title', 'Size').click();
        cy.get('input[type="checkbox"][value="168"]').check({ force: true });
      }
    });
    cy.get('select#sorter:visible').select('price');
    cy.get('.products-grid .product-item').first().find('a.product-item-link').click();
    cy.get('body').then(($body) => {
      if ($body.find('.swatch-attribute:contains("Size")').length) {
        cy.get('.swatch-attribute:contains("Size") .swatch-option').first().click();
      }
      if ($body.find('.swatch-attribute:contains("Color")').length) {
        cy.get('.swatch-attribute:contains("Color") .swatch-option').first().click();
      }
    });
    cy.contains('button', /add to cart/i).click();
    cy.get('.counter-number', { timeout: 10000 }).should('contain', '1');
  });
});
