const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: "**/e2e/browser_window.cy.js",
    baseUrl: "https://demoqa.com",
    failOnStatusCode: false,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
