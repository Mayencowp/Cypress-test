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

it("Password incorrect", () =>{

loginPage.fillUser('tomsmith')
loginPage.Fillpass("123")
loginPage.ClickLogin()
welcomePage.CheckMessage("Your password is invalid!")
   
})

it("Username is not valid", () =>{
loginPage.fillUser("123456")
loginPage.Fillpass("SuperSecretPassword!")
loginPage.ClickLogin()
welcomePage.CheckMessage("Your username is invalid!")

})

it("Username and password empty", () =>{
    loginPage.fillUser(" ")
    loginPage.Fillpass(" ")
    loginPage.ClickLogin()
    welcomePage.CheckMessage("Your username is invalid!")
    
    
})
})
