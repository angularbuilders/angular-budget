/// <reference types="Cypress" />

// 16. Navigation

// FEATURE:     View detailed projects info
// As a:        user with various projects
// I want to:   view a table with detailed project records
// In order to: plan my work

// SUT: https://angularbuilders.github.io/angular-budget/

// Scenario: Navigate from the dashboard
//  GIVEN: A web app with a menu
//  WHEN: I click on proyectos menu
//  THEN: should navigate to the proyectos page
//  THEN: should see a table with 2 records

describe(`GIVEN: A web app with a menu`, () => {
  // Arrange
  const sutUrl = 'https://angularbuilders.github.io/angular-budget/';
  context(`WHEN: I click on proyectos menu`, () => {
    // Act
    before(() => {
      cy.visit(sutUrl);
      cy.get('a').contains('Proyectos').click();
    });
    it(`THEN: should navigate to the proyectos page`, () => {
      // Assert
      const expected = 'Proyectos | Angular.Budget';
      cy.title().should('include', expected);
    });
    it(`THEN: should see a table with 2 records`, () => {
      // Assert
      const expected = 1 + 2;
      cy.get('table tr').should('have.length', expected);
    });
  });
});
