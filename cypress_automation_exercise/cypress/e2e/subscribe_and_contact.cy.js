describe('Contact and subscription', () => {
  function uniqueMail(prefix = 'pickle_rick') {
    return `${prefix}_${Date.now()}@example.com`;
  }

  beforeEach(() => {
    cy.visit('/', { timeout: 30000 });
    cy.get('a[href="/login"]', { timeout: 10000 }).should('be.visible');
  });

  it('subscribes from Home footer', () => {
    cy.get('#susbscribe_email', { timeout: 10000 }).scrollIntoView().should('be.visible');
    cy.get('#susbscribe_email').clear().type(uniqueMail());
    cy.get('#subscribe').click();
    cy.contains('You have been successfully subscribed!', { timeout: 10000 }).should('be.visible');
  });

  it('subscribes from Cart footer', () => {
    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');
    cy.get('#susbscribe_email', { timeout: 10000 }).scrollIntoView().should('be.visible');
    cy.get('#susbscribe_email').clear().type(uniqueMail());
    cy.get('#subscribe').click();
    cy.contains('You have been successfully subscribed!', { timeout: 10000 }).should('be.visible');
  });

  it('sends a Contact Us message with file upload', () => {
    cy.contains(/Contact us/i).click();
    cy.contains('Get In Touch', { matchCase: false, timeout: 10000 }).should('be.visible');

    cy.get('[data-qa="name"]').type('Rick');
    cy.get('[data-qa="email"]').type(uniqueMail());
    cy.get('[data-qa="subject"]').type('Feedback');
    cy.get('#message').type('I am pickle Rick!');

    cy.writeFile('cypress/fixtures/note.txt', 'Pickle');
    cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/note.txt', { force: true });

    cy.get('[data-qa="submit-button"]').click();
    cy.on('window:alert', () => true);
    cy.contains('Success! Your details have been submitted successfully.', { timeout: 10000 }).should('be.visible');

    cy.contains('Home').click();
    cy.get('a[href="/login"]', { timeout: 10000 }).should('be.visible');
  });
});
