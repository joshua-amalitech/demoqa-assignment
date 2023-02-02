

describe("Link Page Test - Valid links", () => {
    beforeEach(() => {
        cy.visit("/links")
    })

    it("Opening links in new tab", () => {
        cy.get('#simpleLink').should('have.attr', 'target', '_blank');
        cy.get('#dynamicLink').should('have.attr', 'target', '_blank');
    })

    it("Checking appropriate responses", () => {
        let links = {
            "created": 201,
            "no-content": 204,
            "moved": 301,
            "bad-request": 400,
            "unauthorized": 401,
            "forbidden": 403,
            "invalid-url": 404,
        }

        for (const id in links) {
            if (Object.hasOwnProperty.call(links, id)) {
                const statusCode = links[id];

                cy.intercept(`/${id}`).as(id);
                cy.get(`#${id}`).click();
                cy.wait(`@${id}`).its('response.statusCode').should('eq', statusCode)
            }
        }
    })
})

describe("Link Page Test - Broken links", () => {
    before(() => {
        cy.visit("/broken")
    })

    it("Opening broken", () => {
        cy.xpath("//*[@id=\"app\"]/div/div/div[2]/div[2]/div[2]/a[1]").each((element) => {
            cy.request(element.prop("href")).its('status').should('eq', 200)
        })

        cy.xpath("//*[@id=\"app\"]/div/div/div[2]/div[2]/div[2]/a[2]").each((element) => {
            cy.request({
                url: element.prop('href'),
                failOnStatusCode: false
            }).its("status").should("eq", 500)
        })
    })
})