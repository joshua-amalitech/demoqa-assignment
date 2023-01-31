
describe("Web Table Page Functionality", () => {
    let user = {}

    beforeEach(() => {
        cy.fixture('example').then((_user) => {
            user = _user
            cy.visit("/webtables");
        });
    })

    it("Adding user to table", () => {
        cy.get("#addNewRecordButton").click();

        cy.get("body > div.fade.modal.show > div > div").should("be.visible");

        cy.inputMassFill({
            "#firstName": user.first_name,
            "#lastName": user.last_name,
            "#userEmail": user.email,
            "#age": user.age,
            "#salary": user.salary,
            "#department": user.department,
        }, true)

        cy.get("#submit").click()

        cy.get(".rt-tbody .rt-tr-group[role='rowgroup']:nth-child(4) .rt-tr[role='row']").as("table-body")

        let data = [user.first_name, user.last_name, user.age, user.email, user.salary, user.department];
        for (let index = 1; index <= 6; index++) {
            let selector = `.rt-td[role='gridcell']:nth-child(${index})`;

            cy.get("@table-body")
                .find(selector)
                .should("contain.text", data[index - 1]);
        }
    })

    it("Updating user in table", () => {
        cy.get(".rt-tbody .rt-tr-group[role='rowgroup']:nth-child(3) .rt-tr[role='row']").as("table-body")
        cy.get("@table-body").find("#edit-record-3").click()

        cy.inputMassFill({
            "#firstName": `${user.first_name}2`,
            "#lastName": `${user.last_name}2`,
            "#userEmail": `${user.email}m`,
            "#age": 26,
            "#salary": `${user.salary}2`,
            "#department": `${user.department}2`,
        }, true)

        cy.get("#submit").click();

        let data_edited = [`${user.first_name}2`, `${user.last_name}2`, 26, `${user.email}m`, `${user.salary}2`, `${user.department}2`];
        for (let index = 1; index <= 6; index++) {
            let selector = `.rt-td[role='gridcell']:nth-child(${index})`;

            cy.get("@table-body")
                .find(selector)
                .should("contain.text", data_edited[index - 1]);
        }
    })

    it("Deleting user in table", () => {
        cy.get(".rt-tbody .rt-tr-group[role='rowgroup']:nth-child(3) .rt-tr[role='row']").as("table-body");
        cy.get("@table-body").find("#delete-record-3").click()

        for (let index = 1; index <= 6; index++) {
            let selector = `.rt-td[role='gridcell']:nth-child(${index})`;

            cy.get("@table-body")
                .find(selector)
                .contains(/[\w]+/)
                .should("not.exist");
        }
    })
})