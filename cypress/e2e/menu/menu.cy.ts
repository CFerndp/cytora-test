/// <reference types="cypress" />
import 'cypress-wait-until';

describe('Given a demo app', () => {
  beforeEach(() => {
    const stub = cy.stub();
    Cypress.on('uncaught:exception', err => {
      if (err.message.includes('ResizeObserver')) {
        stub();
        return false;
      }
    });

    cy.visit('/');

    cy.waitUntil(() =>
      cy.get('[data-testid="editor"]').should('include.text', 'code')
    );
  });

  describe('When we visit the app and open a file', () => {
    it('Then it should render the file', () => {
      cy.get('[data-testid="folder-app"]').click();
      cy.get('[data-testid="file-style.css"]').click();

      cy.get('[data-testid="editor"]').contains('body');
    });
  });
});
