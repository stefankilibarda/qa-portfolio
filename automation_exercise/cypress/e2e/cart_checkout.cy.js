describe('Cart and checkout', () => {
  function uniqueMail(prefix = 'pickle_rick') {
    return `${prefix}_${Date.now()}@example.com`;
  }

  beforeEach(() => {
    cy.visit('/', { timeout: 30000 });
    cy.get('a[href="/login"]', { timeout: 10000 }).should('be.visible');

    cy.get('body').then($b => {
      if ($b.text().includes('Logged in as')) {
        cy.contains('Logout').click();
        cy.get('a[href="/login"]', { timeout: 10000 }).should('be.visible');
      }
    });
  });

  it('adds two products to cart and verifies', () => {
    cy.contains('Products').click();
    cy.get('.features_items .product-image-wrapper').eq(0).within(() => {
      cy.contains('Add to cart').click({ force: true });
    });
    cy.contains('Continue Shopping').click();
    cy.get('.features_items .product-image-wrapper').eq(1).within(() => {
      cy.contains('Add to cart').click({ force: true });
    });
    cy.contains('View Cart').click();

    cy.get('#cart_info_table tbody tr').should('have.length.at.least', 2);
    cy.get('#cart_info_table tbody tr').first().within(() => {
      cy.get('.cart_quantity').should('contain.text', '1');
      cy.get('.cart_total').should('contain.text', 'Rs.');
    });
  });

  it('removes a product from cart', () => {
    cy.contains('Products').click();
    cy.get('.features_items .product-image-wrapper').first().within(() => {
      cy.contains('Add to cart').click({ force: true });
    });
    cy.contains('View Cart').click();

    cy.get('#cart_info_table tbody tr').should('have.length.at.least', 1);
    cy.get('#cart_info_table tbody tr').first().find('.cart_quantity_delete').click();
    cy.get('#cart_info_table tbody tr').should('have.length.lessThan', 1);
  });

  it('creates account first, verifies user name, then places an order', () => {
    const email = uniqueMail();
    const password = 'Password123!';

    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');
    cy.get('[data-qa="signup-name"]').type('Rick');
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    cy.get('[data-qa="password"]', { timeout: 10000 }).should('be.visible').type(password);
    cy.get('[data-qa="days"]').select('25');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1977');
    cy.get('[data-qa="first_name"]').type('Rick');
    cy.get('[data-qa="last_name"]').type('Sanchez');
    cy.get('[data-qa="address"]').type('That Street');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('[data-qa="state"]').type('ON');
    cy.get('[data-qa="city"]').type('Toronto');
    cy.get('[data-qa="zipcode"]').type('12345');
    cy.get('[data-qa="mobile_number"]').type('060123456');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();

    cy.contains('Logged in as').should('contain.text', 'Rick');

    cy.contains('Products').click();
    cy.contains('.product-image-wrapper', 'Blue Top').then($el => {
      if ($el.length) {
        cy.wrap($el).within(() => cy.contains('Add to cart').click({ force: true }));
      } else {
        cy.get('.features_items .product-image-wrapper').first().within(() => {
          cy.contains('Add to cart').click({ force: true });
        });
      }
    });
    cy.contains('View Cart').click();
    cy.contains('Proceed To Checkout').click();

    cy.contains('Review Your Order', { timeout: 10000 }).should('be.visible');
    cy.get('textarea[name="message"]').type('Please deliver ASAP.');
    cy.contains('Place Order').click();

    cy.get('input[name="name_on_card"]', { timeout: 10000 }).type('Rick Sanchez');
    cy.get('input[name="card_number"]').type('4242424242424242');
    cy.get('input[name="cvc"]').type('123');
    cy.get('input[name="expiry_month"]').type('12');
    cy.get('input[name="expiry_year"]').type('2030');
    cy.contains('Pay and Confirm Order').click();

    cy.contains('Congratulations! Your order has been confirmed!', { timeout: 10000 }).should('be.visible');
  });
});
