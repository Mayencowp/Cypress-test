/// <reference types="cypress" />
import{MainPage} from '../PAGE-OBJECTS/main'
import{LoginPage} from '../PAGE-OBJECTS/login'
import{WelcomePage} from '../PAGE-OBJECTS/welcome-page'

describe('TEST DE LOGIN', () => {
const loginPage = new LoginPage()
const mainPage = new MainPage()
const welcomePage = new WelcomePage()
    
    
    beforeEach(()=> {
        mainPage.navigate()
        mainPage.clickLoginOption ()
    })      

it ('A valid user can login', () => { 
    
   loginPage.fillUser('tomsmith')
   loginPage.Fillpass("SuperSecretPassword!")
   loginPage.ClickLogin()
   welcomePage.CheckMessage("You logged into a secure area!")

})

it("A not valid user try login", () =>{

    cy.get('#username').type("tomsmith")
    cy.get('#password').type("123")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your password is invalid!")
})

it("A not valid user try login", () =>{

    cy.get('#username').type("123456")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
})

it("A not valid user try login", () =>{

    cy.get('#username').clear()
    cy.get('#password').clear()
    cy.get('.fa').click()
    cy.get('#flash').contains("Your username is invalid!")
})
})
