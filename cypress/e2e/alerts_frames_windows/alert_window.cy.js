
describe("Checking Browser window Page", () => {
    beforeEach(() => {
        cy.visit("/alerts");

        cy.window().then((win) => {
            cy.spy(win, "alert").as("alert");
            cy.spy(win, "confirm").as("confirm");
            cy.stub(win, "prompt").returns("Test Prompt Input");
        });
    });

    it("Show alert after button clicked", () => {
        cy.get("#alertButton")
            .click()
            .then(() => {
                cy.get("@alert").should("be.calledWith", "You clicked a button");
            });
    });

    it("Show alert 5 seconds after button clicked", () => {
        cy.get("#timerAlertButton")
            .click()
            .then(() => {
                cy.get("@alert")
                    .wait(5000)
                    .should("be.calledWith", "This alert appeared after 5 seconds");
            });
    });

    it("Show confirmation popup after button clicked with cancel", () => {
        cy.on("window:confirm", (str) => {
            return false;
        });
        cy.get("#confirmButton")
            .click()
            .then(() => {
                cy.get("@confirm")
                    .should("be.calledWith", "Do you confirm action?")
                    .then(() => {
                        cy.get("#confirmResult").should("have.text", "You selected Cancel");
                    });
            });
    });

    it("Show confirmation popup after button clicked with ok", () => {
        cy.on("window:confirm", (str) => {
            return true;
        });

        cy.get("#confirmButton")
            .click()
            .then(() => {
                cy.get("@confirm")
                    .should("be.calledWith", "Do you confirm action?")
                    .then(() => {
                        cy.get("#confirmResult").should("have.text", "You selected Ok");
                    });
            });
    });

    it("Show prompt popup after button clicked", () => {
        cy.get("#promtButton")
            .click()
            .then(() => {
                cy.window().its('prompt')
                    .should('be.calledWith', "Please enter your name")
                    .then(() => {
                        cy.get("#promptResult").should("have.text", "You entered Test Prompt Input");
                    });
            });
    });
});
