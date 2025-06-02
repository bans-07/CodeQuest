// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

describe('Tech Quiz App', () => {
  it('loads the home page and shows the title', () => {
    cy.visit('/');
    cy.contains('Tech Quiz'); // Replace with actual text on your homepage
  });
});

import './commands'