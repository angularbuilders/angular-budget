/// <reference types="Cypress" />

describe('Visiting the url https://angularbuilders.github.io/angular-budget/', () => {
  it('should have _Cuadro de mando | Angular.Budget_ on its title', () => {
    cy.visit('https://angularbuilders.github.io/angular-budget/');
    cy.title().should('include', 'Cuadro de mando | Angular.Budget');
  });
});
