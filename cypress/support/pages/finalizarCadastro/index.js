//acoes de interação com a pagina

const elements = require('./elements').ELEMENTS

class finalizarCadastro{
    clicarSubmit(){
        cy.get(elements.submit)
        .click().request('https://api.mlab.com/api/1/databases/userdetails/collections/**')
        .should((response) => {
            expect(response.status).to.eq(200)
        //forcei para procurar uma resposta nessa requisição, mas o servidor não responde
        })
    }
}

export default new finalizarCadastro();