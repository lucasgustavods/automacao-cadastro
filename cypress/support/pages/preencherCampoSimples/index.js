//acoes de interação com a pagina

const elements = require('./elements').ELEMENTS

class preencherCampoSimples{
    preencherNome(){
        cy.get(elements.nome)
        .click()
        .clear()
        .type('NOME')
        .should('have.value', 'NOME')
    }

    preencherSobrenome(){
        cy.get(elements.sobreNome)
        .click()
        .clear()
        .type('SOBRENOME')
        .should('have.value', 'SOBRENOME')
    }

    preencherEndereco(){
        cy.get(elements.endereco)
        .click()
        .clear()
        .type('ENDERECO - 12345')
        .should('have.value', 'ENDERECO - 12345')
    }
}

export default new preencherCampoSimples();