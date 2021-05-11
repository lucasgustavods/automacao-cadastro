//acoes de interação com a pagina

const elements = require('./elements').ELEMENTS

class preencherContatos{
    preencherEmail(){
        cy.get(elements.email)
        .click()
        .clear()
        .type('email@email.com')
        .should('have.value', 'email@email.com')
    }

    preencherTelefone(){
        cy.get(elements.telefone)
        .click()
        .clear()
        .type('0000000000')
        .should('have.value', '0000000000')
    }
}

export default new preencherContatos();