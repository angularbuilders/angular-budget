/// <reference types="Cypress" />

// 18 form interact
// commands
// alias
// esperas

describe(`GIVEN: th page for creating a project`, () => {
  context(`WHEN: the project name form is empty `, () => {
    before(() => {
      // Arrange
      cy.goToNewProject();
      // Act
    });
    it(`THEN: I can´t click on Crear button`, () => {
      // Assert
      cy.get('button').contains('Crear').should('be.disabled');
    });
  });
  context(`WHEN: fill the project name form `, () => {
    before(() => {
      // Arrange
      cy.goToNewProject();
      // Act
      cy.get('#name').type('Testing Project');
    });
    it(`THEN: I can click on Crear button`, () => {
      // Assert
      cy.get('button').contains('Crear').should('be.enabled');
    });
  });
  context(`WHEN: fill the project name form and click Crear `, () => {
    before(() => {
      // Arrange
      const projectsApiMatcher = `${Cypress.env('apiUrl')}projects/`;
      cy.intercept('POST', projectsApiMatcher).as('post');
      cy.goToNewProject();
      // Act
      cy.get('#name').type('Testing Project');
      cy.get('button').contains('Crear').click();
    });
    it(`THEN: the project is sent to the server`, () => {
      // Assert
      cy.wait('@post').its('request.body.title').should('equal', 'Testing Project');
    });
  });
});
