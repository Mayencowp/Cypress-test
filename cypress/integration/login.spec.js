/// <reference types="cypress" />

it ('A valid user can login', () => {     

    cy.visit("https://the-internet.herokuapp.com/")
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains(' You logged into a secure area!')


}) 

it("A not valid user try login", () =>{
    cy.visit("https://the-internet.herokuapp.com")
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("123")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
})

it("A not valid user try login", () =>{
    cy.visit("https://the-internet.herokuapp.com")
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("123456")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
})

it("A not valid user try login", () =>{
    cy.visit("https://the-internet.herokuapp.com")
    cy.get(':nth-child(21) > a').click()
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
})

