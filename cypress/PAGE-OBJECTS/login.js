export class LoginPage {
fillUser(text){
cy.get('#username').type(text)
}

Fillpass(text){
    cy.get('#password').type(text)
}

ClickLogin(){
    cy.get('.fa').click()

}



    
}