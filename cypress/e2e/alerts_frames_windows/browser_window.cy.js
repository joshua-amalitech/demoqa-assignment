
describe("Checking Browser window Page", () => {

    beforeEach(() => {
        cy.visit("/browser-windows")

        cy.window().then((win) => {
            cy.spy(win, 'open').as('redirect');
        });
    })
    
    it("Button opens new tab", () => {
        cy.get("#tabButton").click()
        cy.get("@redirect").should('be.calledWith', '/sample');
    })

    it("Button opens new window", () => {
        cy.get("#windowButton").click()
        cy.get("@redirect").should('be.calledWith', '/sample', "_blank");
    })

    it("Button opens new message window", () => {
        cy.get("#messageWindowButton").click()
        cy.get("@redirect").should('be.calledWith', '', "MsgWindow");
    })

})