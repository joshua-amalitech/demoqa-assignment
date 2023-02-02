
describe("Checking iframe Page", () => {
    beforeEach(() => {
        cy.visit("/frames")
    })

    it("Large iframe displays properly - 500 x 350", () => {
        cy.get("#frame1").then($frame => {
            const body = $frame.contents().find("#sampleHeading")
            cy.wrap(body).should("have.text", "This is a sample page")
        })
    })

    it("Small iframe displays properly - 100 x 100", () => {
        cy.get("#frame2").then($frame => {
            const body = $frame.contents().find("#sampleHeading")
            cy.wrap(body).should("have.text", "This is a sample page")
        })
    })

})