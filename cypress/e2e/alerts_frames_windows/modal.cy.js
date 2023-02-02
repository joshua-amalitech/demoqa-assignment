
describe("Modal Page", () => {
    beforeEach(() => {
        cy.visit("/modal-dialogs")
    })

    it("Large Modal", () => {
        cy.xpath("/html/body/div[4]/div")
            .should("not.exist")

        cy.get("#showLargeModal").click()

        cy.xpath("/html/body/div[4]/div")
            .should("have.class", "modal-lg")
            .and("be.visible")
    })

    it("Small Modal", () => {
        cy.xpath("/html/body/div[4]/div")
            .should("not.exist")

        cy.get("#showSmallModal").click()

        cy.xpath("/html/body/div[4]/div")
            .should("have.class", "modal-sm")
            .and("be.visible")
    })
})