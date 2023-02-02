
function getPath(filename) {
    const path = require("path")

    const downloadsFolder = Cypress.config('downloadsFolder')
    return path.join(downloadsFolder, filename);
}

describe("File Upload and Download Page", () => {
    beforeEach(() => {
        cy.visit("/upload-download")
    })

    it("Downloading File", () => {
        cy.get("#downloadButton").click()
        const filename  = Cypress.$("#downloadButton").prop("download")
        
        cy.readFile(getPath(filename), 'binary', { timeout: 15000 })
            .should('exist')
            .should(buffer => expect(buffer.length).to.be.gt(100));
    })

    it("Uploading File", () => {
        cy.get('#uploadFile').selectFile(getPath('sampleFile.jpeg')).then(($input) => {
            const files = $input[0].files
        
            expect(files[0].name).to.eq('sampleFile.jpeg')
            expect(files[0].type).to.eq('image/jpeg')
          })
    })
})