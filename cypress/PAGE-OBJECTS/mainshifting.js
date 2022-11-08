export class MainShifting {

    navigate(){
        cy.visit("https://the-internet.herokuapp.com")
    }
    
    clickShiftingContent (){
        cy.get(':nth-child(39) > a').click()
    
    }
    
    }