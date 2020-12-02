/// <reference types="Cypress" />

// 13. Prueba básica
// comandos de acción
// Comandos de consulta
// Comandos de comprobación
// Todo pseudo Síncrono

describe('Visiting the url https://angularbuilders.github.io/angular-budget/', () => {
  it('should have _Cuadro de mando | Angular.Budget_ on its title', () => {
    cy.visit('https://angularbuilders.github.io/angular-budget/');
    cy.title().should('include', 'Cuadro de mando | Angular.Budget');
  });
});
