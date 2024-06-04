import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I am logged in', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('john.doe113@example.com')
    cy.get('#pass').type('Password113')
    cy.get('#send2').click()
})

When('I navigate to the men product listing page', ()=>{
    cy.get('#ui-id-5').click()
})

Then('I should see a list of men products available for purchase', ()=>{
    cy.contains('Hero Hoodie').should('be.visible')
})