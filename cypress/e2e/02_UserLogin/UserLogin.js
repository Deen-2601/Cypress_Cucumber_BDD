import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am on the login page', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
})

When('I enter "john.doe113@example.com" as the email and "Password113" as the password', ()=>{
    cy.get('#email').type('john.doe113@example.com')
    cy.get('#pass').type('Password113')
})

And('I submit the login form', ()=>{
    cy.get('#send2').click()
})

Then('I should be logged in successfully', ()=>{
    cy.get('[class="panel header"]').contains('Welcome, John Doe!')
})

And('I should be redirected to the homepage', ()=>{
    cy.url().should('eq','https://magento.softwaretestingboard.com/')
})
