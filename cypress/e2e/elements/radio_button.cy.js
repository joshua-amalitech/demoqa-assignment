
describe("Radio Button Page", () => {
    before(() => {
        cy.visit("/radio-button");
    })

    it("Radio button toggle functionality", () => {
        cy.get("#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > div:nth-child(3)")
            .click()
            .children("#impressiveRadio")
            .should("be.checked");

        cy.get("#yesRadio").should("not.be.checked");
        cy.get("#noRadio").should("be.disabled");

        // cy.get("#result")
        // .children("span:first-child")
        // .should("contain.text", "You have selected :")

        // .siblings("span:last-child")
        // .should("contain.text", "Impressive")
    })
})