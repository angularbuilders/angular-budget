/// <reference types="Cypress" />

// 17 exploring data
// navegando ANGULAR 404
// usando configuración
// usando mock server

describe(`GIVEN: the url of a project`, () => {
  // Arrange
  const projectsApiMatcher = RegExp(`^${Cypress.env('apiUrl')}projects$`);
  const fixtureProjectsResponse = { fixture: 'projects.json' };
  const firstProjectApiMatcher = RegExp(`^${Cypress.env('apiUrl')}projects/mi-primer-proyecto$`);
  const fixtureFirstProjectResponse = { fixture: 'first-project.json' };
  context(`WHEN: i visit it`, () => {
    before(() => {
      cy.intercept(projectsApiMatcher, fixtureProjectsResponse);
      cy.intercept(firstProjectApiMatcher, fixtureFirstProjectResponse);
      // Act
      cy.visit(Cypress.env('baseUrl'));
      cy.get('a').contains('Proyectos').click();
      cy.contains('Mi primer proyecto').click();
    });
    it(`THEN: I can see project details`, () => {
      // Assert
      const expected = 'Mi primer proyecto';
      cy.get('h2').should('contain', expected);
    });
  });
});
