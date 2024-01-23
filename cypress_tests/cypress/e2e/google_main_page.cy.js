describe('Visit google main page tests', () => {
    describe("Test suite for presence of elements on the main google page in Russian", () => {
        let currentUrl
        it('Check google URL', () => {
            cy.visit('https://google.com/')

        })
        it("Check google main page refresh", () => {
            cy.visit('https://google.com/')
            cy.reload()
            currentUrl = cy.url()
            currentUrl.should('eq', 'https://www.google.com/')
        })
        it("Check the presence of I am lucky button", () => {
            cy.visit('https://google.com/')
            cy.get('input[type="submit"]').contains("Мне повезёт!")
            cy.should('exist')
        })
        it("Check the presence of Search in google button", () => {
            cy.visit('https://google.com/')
            cy.get('input[type="submit"]').contains("Мне повезёт!")
            cy.should('exist')
        })
        it("Check the presence of Search button in top right corner", () => {
            cy.visit('https://google.com/')
            cy.get('input[type="submit"]').contains("Поиск")
            cy.should('exist')
        })
        it("Check the presence of Images button in top right corner", () => {
            cy.visit('https://google.com/')
            cy.get('a').contains("Картинки")
            cy.should('exist')
        })
        it("Check the presence of Panel button in top right corner", () => {
            cy.visit('https://google.com/')
            cy.get('a[role="button"]').eq(0)
            cy.should('exist')
        })
        it.only("Check the presence of Profile button in top right corner", () => {
            cy.visit('https://google.com/')
            cy.get('a[role="button"]').last()
            cy.should('exist')
        })
        it("Check the presence of the Google image", () => {
            cy.visit('https://google.com/')
            cy.get('img[alt="Google"]')
            cy.should('exist')
        })
        it("Check the absence of lexical errors of I am lucky", () => {
            cy.visit('https://google.com/')
            cy.get('input').contains("Мне повезет!")
            cy.should('not.exist')
        })
    })
})