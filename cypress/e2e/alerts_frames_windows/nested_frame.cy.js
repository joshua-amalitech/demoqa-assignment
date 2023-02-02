
describe("Checking the nested iframes", () => {
    beforeEach(() => {
        cy.visit("/nestedframes")
    })

    it("Parent frame", () => {
        cy.get("#frame1")
            .should("exist")
            .then($frame => {
                const body = $frame.contents().find("body")

                cy.wrap(body)
                    .should("contain.text", "Parent frame")
            })
    })

    it("Child Frame", () => {
        cy.get("#frame1")
            .should("exist")
            .then($frame => {
                const body = $frame.contents().find("body")

                cy.wrap(body)
                    .find("iframe")
                    .then($childFrame => {
                        const body = $childFrame.contents().find("body")

                        cy.wrap(body).find("p")
                            .should("exist")
                            .and("have.text", "Child Iframe")
                    })
            })
    })
})