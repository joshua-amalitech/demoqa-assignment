
describe("Check Box Page Test", () => {
    before(() => {
        cy.visit("/checkbox");
    })

    it("Checkbox check feature functionality", () => {
        cy.get("#tree-node > ol > li > span > button")
            .click()

        cy.get("#tree-node > ol > li > ol > li:nth-child(1) > span > button")
            .should("be.visible")
            .click()

        cy.get("#tree-node > ol > li > ol > li:nth-child(1) > ol > li:nth-child(2) > span > label")
            .click()
            .children("#tree-node-commands")
            .should("be.checked")

        cy.get("#result")
            .children("span:first-child")
            .should("contain.text", "You have selected :")

            .siblings("span:last-child")
            .should("contain.text", "commands")
    })
})