describe('Test App', () => {

  it('launches', () => {
    cy.visit('/');
  });
  it('shows banner', () => {
    cy.visit('/');
    cy.get('[data-cy=banner]').should('be.visible');
  });

  it('shows Google-sign in after clicking navbar', () => {
    cy.visit('/');
    cy.get('.navbar-burger').click();
    cy.get('[data-cy=sign-in]').should('be.visible');
  });
});