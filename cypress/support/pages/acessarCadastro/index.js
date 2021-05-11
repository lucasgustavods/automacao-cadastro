//acoes de interação com a pagina

class acessarCadastro{
    requestPagina(){
        cy.request('http://demo.automationtesting.in/Register.html')
        .should((response) => {
          expect(response.status).to.eq(200)
        })
    }

    acessarPagina(){
        cy.visit('http://demo.automationtesting.in/Register.html')
    }
}

export default new acessarCadastro();