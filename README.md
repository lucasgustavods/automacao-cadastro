# automacao-cadastro
## Automação de um cadastro simples
`versão nodejs v10.19.0`
`versão npm 6.14.4`
`versão cypress 7.2.0`

Para fazer a aplicação rodar no **Ubuntu** basta clonar o repositório e rodar os comandos:

Caso não tenha nodejs e npm instalados:
> sudo apt install nodejs and npm

> sudo apt install build-essential

Dependencias:
> apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
 
Caso tenha nodejs, npm e dependencias (versões diferentes das informadas podem apresentar falha) instaladas, dentro da pasta raiz do projeto(./automacao-cadastro) executar o comando:
> npx cypress open

Para rodar com o **Windows** é simples, basta baixar o zip do repositório [aqui](https://github.com/lucasgustavods/automacao-cadastro/archive/refs/heads/main.zip) e extrair arrastando o arquivo(importante não clicar em descompactar pois pode criar pastas adicionais que dificultam o funcionamento correto da aplicação), logo após, baixar o zip do Cypress [aqui](https://download.cypress.io/desktop), extrair arrastando o arquivo e rodar o executavel `Cypress.exe`, e arrastar a pasta do projeto para dentro da janela do executavel.

Com a janela do Cypress aberta, tanto para o Ubuntu quanto para o windows, clicar em `cadastro.spec.js`

--------------------------------------------------------------------------------------------------------
Passos utilizados no **Ubuntu 20.04.2 LTS**, instalação do Cypress via npm (criação de um projeto novo):
	
Instalar nodejs e npm:
> sudo apt install nodejs and npm

> sudo apt install build-essential

Dependencias:
> apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

Selecione o caminho onde a aplicação deve ser instalada, exemplo:
> cd /caminho/do/seu/projeto

Dentro dessa pasta realizar o comando:
> npm install cypress --save-dev

Dentro da pasta onde o projeto estiver digitar o seguinte comando no terminal:
> npx cypress open
--------------------------------------------------------------------------------------------------------

### Demais duvidas de instalação e funcionamento da ferramente, acesse a [documentação do Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).

--------------------------------------------------------------------------------------------------------

## Caminho das implementações:

main
> ./automacao-cadastro/cypress/integration/cadastro.spec.js

pastas com as funções(index.js) e elementos(elements.js)
> ./automacao-cadastro/cypress/support/pages/* 

--------------------------------------------------------------------------------------------------------

## Cenários de Testes:

| Passo | Ação | Validação | Status |
| --- | --- | --- | --- |
| 01 | Deve acessar a pagina inicial de cadastro|Request deve apresentar status 200|Aprovado com ressalvas|
| 02 | Preencher campos simples de nome sobrenome e endereço|O campo deve ficar registrado|Aprovado|
| 03 | Preencher email e telefone | O campo deve ficar registrado|Aprovado|
| 04 | Preencher genero e hobbies|O campo deve ficar registrado e a checkbox deve ser deselecionada|Aprovado|
| 05 | Selecionar idiomas e skills |Combobox de idioma deve ser adicionado e excluido e skill validado|Aprovado|
| 06 | Selecionar pais, pais pre-definido e data de nascimento|campos devem registrar e pais pre-definido pesquisar digitando|Aprovado|
| 07 | Inserir senha |O campo deve ficar registrado e verificar se são iguais|Aprovado|
| 08 | Finalizar cadastro |Resposta do servidor deve apresentar status 200|Reprovado|

**Observações.:**

**Passo 01(aprovado com ressalvas): Por se tratar de uma aplicação web com multiplos acessos, pode apresentar instabilidade no sistema, algumas das requisições podem não ter a resposta esperada, o que pode ocasionar na quebra de algumas das outras funcionalidades, um refresh pode resolver.**

**Passo 08(reprovado): Ao clicar em submit, a validação não apresenta resposta do servidor a requisição.**
