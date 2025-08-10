describe('Create Account', () => {
  it('creates a new account', () => {
    const email = `darth.vader+${Date.now()}@example.com`;
    cy.visit('/');
    cy.contains('a', 'Create an Account').click();
    cy.get('#firstname').type('Darth');
    cy.get('#lastname').type('Vader');
    cy.get('#email_address').type(email);
    cy.get('#password').type('Test1234!');
    cy.get('#password-confirmation').type('Test1234!');
    cy.contains('button', 'Create an Account').click();
    cy.get('.base', { timeout: 15000 }).should('be.visible');
  });
});
