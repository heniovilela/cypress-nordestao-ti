// o ponto significa que está pegando pela class
// # é quando for pegar por ID

// describe  ----> Descrever
// it  ----------> isto, vai descrever...
// get()  -------> selecionar elemento
// contains() ---> para encontrar elementos por texto
// find() -------> para encontrar elementos
// as() - alias -> serve para criar apelidos para grandes comendos


/// <reference types="cypress" />


const dados_usuario = require('../fixtures/acesso_intranet.json')  // Criar a variável e colocar o caminho da fixtures

describe('Testes de Login em QA', () => {

    // Usar o beforeEach para não se repetir códigos - parte de Login e Senha iniciado tudo aqui
    it.only('Cadastro de Cronograma de Inventário - Bens Patrimoniais', () => {
        // acessar a tela de login
        cy.visit('http://qaintranet.nordestao.com.br/login')
        // adicionando matricula no campo
        cy.get('#matricula').type(dados_usuario.matricula)
        // digitando a senha
        cy.get('#senha').type(dados_usuario.senha)
        // clicar no botão de entrar
        cy.get('.btn').click()
    })
})