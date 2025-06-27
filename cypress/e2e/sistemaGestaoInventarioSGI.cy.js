/// <reference types="cypress" />


const dados_usuario = require('../fixtures/acesso_intranet.json')  // Criar a variável e colocar o caminho da fixtures

describe('Sistema de Inventário - SGI', () => {

    // Usar o beforeEach para não se repetir códigos - parte de Login e Senha iniciado tudo aqui
    it.only('Cadastro de Cronograma de Inventário - Bens Patrimoniais', () => {
        // acessar a tela de login
        cy.visit('http://homogintranet.nordestao.com.br/login')
        // adicionando matricula no campo
        cy.get('#matricula').type(dados_usuario.matricula)
        // digitando a senha
        cy.get('#senha').type(dados_usuario.senha)
        // clicar no botão de entrar
        cy.get('.btn').click()

        //Entrar no menu inicial
        cy.get('.button-collapse > .fa').click()
        //Acessando o Modulo de Gestão de Inventário
        cy.get(':nth-child(17) > .menu-principal > .fa-angle-down').click()
        //Gestão de Inventário/Cadastro
        cy.get('[style="display: block;"] > .collapsible > :nth-child(1) > .collapsible-header > .fa').click()
        //Clicando na Página Cronograma
        cy.get(':nth-child(2) > .collapsible > li.active > .collapsible-body > ul > :nth-child(1) > .waves-light > .fas').click()

        //Clicando na Contagem Físicas
        cy.get('#select2-contagemFisicas-container > .select2-selection__placeholder').click()
        //Campo Select ----> Bens Patrimonias
        cy.get('.select2-results__option--highlighted').click()

        //Campo Select -----> Tipo de Centro
        cy.get(':nth-child(2) > .select2 > .selection > .select2-selection > .select2-selection__arrow').click()
        //Campo Tipo de Centro -----> Atacado
        cy.get('.select2-results__option--highlighted').click()

        //Campo Data de Contagem
        cy.get('#dataContagem')
            .click()
        //Campo Data Fim da Coleta
        cy.get('#dataFimColeta')
            .click()
        //Campo Data de Confronto
        cy.get('#dataConfronto')
            .click()
        //Campo Periodo
        cy.get('#periodoColeta')
            .select('Manhã')
        //Campo Empresa
        cy.get('#empresa')
            .select('NORDESTAO')
        //Campo Sub Segmento
        cy.get('#select2-unidades-container > .select2-selection__placeholder')
            .click()
        //Clicando na opção CD Frios
        cy.get('.select2-results__option--highlighted')
            .click()
        // Categoria dos Materiais
        cy.get('.col-sm-10 > .select2 > .selection > .select2-selection > .select2-selection__arrow > b')
            .click()
        //Salvando os dados 
        cy.get('#btnSalvar').click()
    })
})