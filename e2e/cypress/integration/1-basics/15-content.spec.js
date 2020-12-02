/// <reference types="Cypress" />

// 15. validate visible content
// usos creativos de actual y expected

// FEATURE:     General status of my projects
// As a:        user with various projects
// I want to:   view a list of projects and a summary of tasks
// In order to: plan my work

// SUT: https://angularbuilders.github.io/angular-budget/

// Scenario: View a the dashboard
//  GIVEN: A web app where i have 2 projects
//  WHEN: I visit the home page
//  THEN: should have a section called Mis Proyectos
//  THEN: should show 2 items on the projects list

describe(`GIVEN: A web app where i have 2 projects`, () => {
  // Arrange
  const sutUrl = 'https://angularbuilders.github.io/angular-budget/';
  context(`WHEN: I visit the home page`, () => {
    // Act
    before(() => cy.visit(sutUrl));
    it(`THEN: should have a section called Mis Proyectos`, () => {
      const expected = 'Mis Proyectos';
      // Assert
      const actual = cy.contains(expected);
      actual.should('exist');
    });
    it(`THEN: should show 2 items on the projects list`, () => {
      // Assert
      const expected = 2;
      cy.get('aside:nth-child(1) dt').should('have.length', expected);
    });
  });
});
