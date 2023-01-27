
describe('Text Box Page Test', () => {

  before(() => {
    cy.visit("/text-box");
  })

  it("Fill in input fields", () => {
    cy.get("#userName")
      .should("be.visible")
      .type("Test Name")
      .should('contain.value', 'Test Name');

    cy.get("#userEmail")
      .should("be.visible")
      .type("test@gmail.com")
      .should('contain.value', 'test@gmail.com');

    cy.get("#currentAddress")
      .should("be.visible")
      .type("P.O.BOX Address")
      .should('contain.value', 'P.O.BOX Address');

    cy.get("#permanentAddress")
      .should("be.visible")
      .type("P.O.BOX Address")
      .should('contain.value', 'P.O.BOX Address');
  })

})