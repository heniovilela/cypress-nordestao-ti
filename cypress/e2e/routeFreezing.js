Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora erro específico "routeFreezing is not defined"
    if (err.message.includes('routeFreezing')) {
        return false; // impede falha do teste
    }
});
