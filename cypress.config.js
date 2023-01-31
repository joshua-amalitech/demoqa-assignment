const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // excludeSpecPattern: "**/e2e/text_box_page.cy.js",
    baseUrl: "https://demoqa.com",
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
