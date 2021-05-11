# automacao-cadastro
## Automação de um cadastro simples

Para fazer a aplicação rodar no **Ubuntu** basta clonar o repositório, e dentro da pasta raiz do projeto rodar o comando:
> npx cypress open


--------------------------------------------------------------------------------------------------------
Passos utilizados no **Ubuntu 20.04.2 LTS**, instalação do Cypress via npm (criação de um projeto novo):
	
Dependencias:
> apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

Selecione o caminho onde a aplicação deve ser instalada, exemplo:
> cd /caminho/do/seu/projeto

Dentro dessa pasta realizar o comando:
> npm install cypress --save-dev

Dentro da pasta onde o projeto estiver digitar o seguinte comando no terminal:
> npx cypress open
--------------------------------------------------------------------------------------------------------



Demais duvidas de instalação e funcionamento da ferramente, acesse a [documentação do Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).


Cenários de Testes:

| Comando | Descrição |
| --- | --- |
| `git status` | Lista de todos os arquivos *modificados ou novos* |
| `git diff` | Mostra as diferenças do arquivo que **não foram** preparadas |
