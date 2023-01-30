
describe('Text Box Page Test', () => {
  let user = {}

  beforeEach(() => {
    cy.fixture('example').then((_user) => {
      user = _user;
    })
    cy.visit("/text-box");
  })

  it("Fill in input fields", () => {
    cy.get("#userName")
      .should("be.visible")
      .type(user.name)
      .should('contain.value', user.name);

    cy.get("#userEmail")
      .should("be.visible")
      .type(user.email)
      .should('contain.value', user.email);

    cy.get("#currentAddress")
      .should("be.visible")
      .type(user.current_address)
      .should('contain.value', user.current_address);

    cy.get("#permanentAddress")
      .should("be.visible")
      .type(user.permanent_address)
      .should('contain.value', user.permanent_address);

    cy.get('#submit')
      .should("be.visible")
      .click();

    cy.get("#output #name").should('contain.text', user.name);
    cy.get("#output #email").should('contain.text', user.email)
    cy.get("#output #currentAddress").should('contain.text', user.current_address)
    cy.get("#output #permanentAddress").should('contain.text', user.permanent_address)
  })

  // it("Fill in input fields", () => {
  //   cy.get("#userName")
  //     .should("be.visible")
  //     .type(user.name)
  //     .should('contain.value', user.name);

  //   cy.get("#userEmail")
  //     .should("be.visible")
  //     .type(user.email)
  //     .should('contain.value', user.email);

  //   cy.get("#currentAddress")
  //     .should("be.visible")
  //     .type(user.current_address)
  //     .should('contain.value', user.current_address);

  //   cy.get("#permanentAddress")
  //     .should("be.visible")
  //     .type(user.permanent_address)
  //     .should('contain.value', user.permanent_address);

  //   cy.get('#submit')
  //     .should("be.visible")
  //     .click();

  //   cy.get("#output #name").should('contain.text', user.name);
  //   cy.get("#output #email").should('contain.text', user.email)
  //   cy.get("#output #currentAddress").should('contain.text', user.current_address)
  //   cy.get("#output #permanentAddress").should('contain.text', user.permanent_address)
  // })

})