//acoes de interação com a pagina

const elements = require('./elements').ELEMENTS

class inserirSenha{
    fornecerSenha(){
        cy.get(elements.fpass)
        .click()
        .clear()
        .type('Abc123')
        .should('have.value', 'Abc123')
    }

    validarSenha(){
        cy.get(elements.spass)
        .click()
        .type('Abc123')
        .should('have.value', 'Abc123')
    }
}

export default new inserirSenha();