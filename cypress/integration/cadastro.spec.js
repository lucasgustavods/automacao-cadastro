/// <reference types="cypress" />

import acessarCadastro from '../support/pages/acessarCadastro';
import preencherCampoSimples from '../support/pages/preencherCampoSimples';
import preencherContatos from '../support/pages/preencherContatos';
import selecionarCheckbox from '../support/pages/selecionarCheckbox';
import selecionarHabilidades from '../support/pages/selecionarHabilidades';
import selecionarComboBox from '../support/pages/selecionarComboBox';
import inserirSenha from '../support/pages/inserirSenha';
import finalizarCadastro from '../support/pages/finalizarCadastro';

describe('testar registro com todos os campos preenchidos', () =>{
    
    it('Acessar endereço', () => {
        acessarCadastro.requestPagina()
        acessarCadastro.acessarPagina()
    })

    it('preencher nome, sobrenome e endereco', () => {
        preencherCampoSimples.preencherNome()
        preencherCampoSimples.preencherSobrenome()
        preencherCampoSimples.preencherEndereco()
    })

    it('preencher email e telefone', () => {
        preencherContatos.preencherEmail()
        preencherContatos.preencherTelefone()
    })

    it('preencher genero e hobbies', () => {
        selecionarCheckbox.selecionarGenero()
        selecionarCheckbox.selecionarHobbies()
        selecionarCheckbox.deselecionarHobbbies()
    })

    it('selecionar idiomas e skills', () => {
        selecionarHabilidades.selecionarIdioma()
        selecionarHabilidades.selecionarSkills()
    })

    it('selecionar pais, pais pre-definido e data de nascimento', () => {
        selecionarComboBox.selecionarPais()
        selecionarComboBox.selecionarPaisPreDefinido()
        selecionarComboBox.selecionarDataNascimento()

    })

    it('inserir senha', () => {
        inserirSenha.fornecerSenha()
        inserirSenha.validarSenha()

    })

    it('finalizar cadastro', () => {      
        finalizarCadastro.clicarSubmit()
    })
})