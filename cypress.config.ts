// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // or whatever your Vite app runs on
    setupNodeEvents(on, config) {
      // you can add plugins here
    },
    specPattern: 'cypress/e2e/**/*.cy.{ts,js}',
  },
});
