
describe("Buttons page test", () => {
    before(() => {
        cy.visit("/buttons");
    })

    it("Double clicking button", () => {
        cy.get("#doubleClickBtn").dblclick();
        cy.get("#doubleClickMessage").should("have.text", "You have done a double click");

        cy.get("#rightClickBtn").rightclick();
        cy.get("#rightClickMessage").should("have.text", "You have done a right click");

        cy.get("button").contains(/^Click Me$/).click();
        cy.get("#dynamicClickMessage").should("have.text", "You have done a dynamic click");
    })
})