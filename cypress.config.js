const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yf5cqm',
  projectId: "yd1f7k",
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true, //graficos para relatórios
      reportTitle: 'Relatório de Testes Nordestão', //Titulo da página
      reportPageTitle: 'Relatório de Testes Nordestão',  //Titulo da página no link
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
