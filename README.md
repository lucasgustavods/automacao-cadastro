# automacao-cadastro
automacao-cadastro

Para fazer a aplicação rodar no Ubuntu basta clonar o repositório, e dentro da pasta raiz do projeto rodar o comando 'npx cypress open'

Passos utilizados no Ubuntu 20.04.2 LTS
Instalação do Cypress via npm (criação de um projeto novo):
	
	Dependencias:
		apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

	Selecione o caminho onde a aplicação deve ser instalada, exemplo:
		cd /caminho/do/seu/projeto
			e então dentro dessa pasta realizar o comando
				npm install cypress --save-dev

	Dentro da pasta onde o projeto estiver digitar o seguinte comando no terminal
		npx cypress open

Demais duvidas de instalação e funcionamento da ferramente, acesse a documentação:
https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

*processo de implementação do docker em andamento* 

Cenários de Testes:

