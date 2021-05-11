//acoes de interação com a pagina

const elements = require('./elements').ELEMENTS

class selecionarHabilidades{
    selecionarIdioma(){
        cy.get(elements.campoIdioma).click()
        .get(elements.portugues)
        .click()
        .contains('Portuguese')
        .get(elements.japones)
        .click()
        .contains('Japanese')
        .get(elements.ingles)
        .click()
        .contains('English')
        cy.get(elements.fecharIdiomaJapones)
        .click()
        
        cy.get(elements.sairCampoIdioma)
        .click()
    }

    selecionarSkills(){
        cy.get(elements.Skill)
        .select('Android')
        .should('have.value', 'Android')
    }
}

export default new selecionarHabilidades();