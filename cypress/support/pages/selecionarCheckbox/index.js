//acoes de interação com a pagina

const elements = require('./elements').ELEMENTS

class selecionarCheckbox{
    selecionarGenero(){
        cy.get(elements.genero)
        .click()
        .should('be.checked')
    }

    selecionarHobbies(){
        cy.get(elements.hobbie1)
        .click()
        .should('be.checked')
            
        cy.get(elements.hobbie2)
        .click()
        .should('be.checked')
            
        cy.get(elements.hobbie3)
        .click()
        .should('be.checked')
    }

    deselecionarHobbbies(){
        cy.get(elements.hobbie2)
        .click()
        .should('not.be.checked')
    }
}

export default new selecionarCheckbox();