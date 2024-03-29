// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

cypress.commands.add('login', (username, password) => {
    cy.clearcookies()
    cy.clearlocalstorage()
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)

    cy.get('input[name="user_password"]').clear()
    cy.get('input[name="user_password"]').type(password)

    cy.get('input[name="submit"]').click()

    describe("custom commands", () => {
        it("should login using the custom commands", () => {
          cy.visit("http://zero.webappsecurity.com/bank/pay-bills.html");
          cy.login("username", "password");
        });

        it("click on pay", () => {
          cy.get("input[type="submit"]").click()
        });

})