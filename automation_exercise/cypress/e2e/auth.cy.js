describe('Authentication flows', () => {
  function uniqueMail(prefix = 'pickle_rick') {
    return `${prefix}_${Date.now()}@example.com`;
  }

  beforeEach(() => {
    cy.visit('/', { timeout: 30000 });
    cy.get('a[href="/login"]', { timeout: 10000 }).should('be.visible');
  });

  it('registers a new user and deletes the account', () => {
    const email = uniqueMail();

    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');

    cy.get('[data-qa="signup-name"]').type('Rick');
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    cy.contains('Enter Account Information').should('be.visible');
    cy.get('#id_gender1').check({ force: true });
    cy.get('[data-qa="password"]').type('Password123!');
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
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();

    cy.contains('Logged in as').should('be.visible');
    cy.contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');
  });

  it('shows error on invalid login', () => {
    cy.contains('Signup / Login').click();
    cy.contains('Login to your account').should('be.visible');

    cy.get('[data-qa="login-email"]').type('pickle_rick_invalid@example.com');
    cy.get('[data-qa="login-password"]').type('wrongpass');
    cy.get('[data-qa="login-button"]').click();

    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
