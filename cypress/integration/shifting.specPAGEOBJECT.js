/// <reference types="cypress" />

import{MainShifting} from '../PAGE-OBJECTS/mainshifting'
import{ShiftingContent} from '../PAGE-OBJECTS/shifting-content'
import{ShiftingContentMenu} from '../PAGE-OBJECTS/shifting-content-menu'


describe('TEST 5 ELEMENT', () => {

    const mainShifting = new MainShifting()
    const shiftingContent = new ShiftingContent()
    const shiftingContentMenu = new ShiftingContentMenu ()


it ('Shifting content menu find 5 elements', () => { 
    
    mainShifting.navigate()
    mainShifting.clickShiftingContent()
    shiftingContent.clickExample1()
    shiftingContentMenu.checkElementLength()
    
 
 })

})

