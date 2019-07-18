describe('Search Bar', () => {

    beforeEach(() => {
        cy.visit('https://checkout.broadway.com')
    })

    it('Renders on load', () => {

        const text = "Lion king"

        cy.get('#app-container').find('input')
            .type(text)
            .should('have.value', text)
    });

    it('Given invalid input, renders appropriate error message ', () => {

        const text = "#####"
        cy.get('#app-container').find('input')
            .type(text)
            .should('have.value', text)

        cy.get('#app-container').find('div')
            .should('have.class', "Alert__warning__nsftJ Alert__box__2Brhn Alert__box-skin__2BP5A")
    })

    it('Given a valid input, renders appropriate title card ', () => {

        const text = "Aladdin"

        cy.get('#app-container').find('input')
            .type(text)
            .should('have.value', text)

        cy.get('#app-container').find('.ShowsItem__body__1HGdC').find('a')
            .should('have.text', text)
    })

})