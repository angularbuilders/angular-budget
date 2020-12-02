/// <reference types="Cypress" />

// 14. Prueba organizada
// AAA
// GWT
// describe, context, it, NO expect
// Features, scenarios, user stories...

// FEATURE:     have web site with a title
// As a:        visitor
// I want to:   view the title of a site
// In order to: be more confident

// Scenario:
//  Given: the url https://angularbuilders.github.io/angular-budget/
//  When: I visit it
//  Then: should have Cuadro de mando | Angular.Budget on its title

describe('Visiting the url https://angularbuilders.github.io/angular-budget/', () => {
  it('should have _Cuadro de mando | Angular.Budget_ on its title', () => {
    cy.visit('https://angularbuilders.github.io/angular-budget/');
    cy.title().should('include', 'Cuadro de mando | Angular.Budget');
  });
});

// DRY : "Don´t Repeat Yourself"

// Arrange
let sutUrl = 'https://angularbuilders.github.io/angular-budget/';
describe(`GIVEN: the url ${sutUrl}`, () => {
  context(`WHEN: I visit it`, () => {
    // Act
    before(() => cy.visit(sutUrl));
    // Assert
    const expected = 'Cuadro de mando | Angular.Budget';
    it(`THEN: should have _${expected}_ on its title`, () => {
      cy.title().should('include', expected);
    });
  });
});

// DAMP : “Descriptive And Meaningful Phrases”

describe(`GIVEN: the url https://angularbuilders.github.io/angular-budget/`, () => {
  // Arrange
  const sutUrl = 'https://angularbuilders.github.io/angular-budget/';
  context(`WHEN: I visit it`, () => {
    // Act
    before(() => cy.visit(sutUrl));
    it(`THEN: should have _Cuadro de mando | Angular.Budget_ on its title`, () => {
      // Assert
      const expected = 'Cuadro de mando | Angular.Budget';
      cy.title().should('include', expected);
    });
  });
});
