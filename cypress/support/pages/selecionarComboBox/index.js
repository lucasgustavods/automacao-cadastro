//acoes de interação com a pagina

const elements = require('./elements').ELEMENTS

class selecionarComboBox{
    selecionarPais(){
        cy.get(elements.pais)
        .select('Brazil')
    }

    selecionarPaisPreDefinido(){
        cy.get(elements.caixaPaisPreDefinido)
        .click()
        
        cy.get(elements.seletorPaisPreDefinido)
        .click()
        .type('Jap')
        .type('{enter}')

        cy.get(elements.afericaoPaisPreDefinido)
        .contains('Japan')
    }

    selecionarDataNascimento(){
        cy.get(elements.anoNasc)
        .select('1991')
        .should('have.value', '1991')
        
        cy.get(elements.mesNasc)
        .select('December')
        .should('have.value', 'December')

        cy.get(elements.diaNasc)
        .select('16')
        .should('have.value', '16')
    }
}

export default new selecionarComboBox();