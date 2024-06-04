import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am on the registration page', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
})

When('I enter "John" as the firstname, "Doe" as the lastname, "john.doe1235@example.com" as the email, "Password1235" as the password, and "Password1235" as the confirmation password', ()=>{
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get('#email_address').type('john.doe1235@example.com')
    cy.get('#password').type('Password1235')
    cy.get('#password-confirmation').type('Password1235')
})

And('I submit the registration form', ()=>{
    cy.get("[title='Create an Account']").click()
})

Then('I should be redirected to the login page', ()=>{
    cy.get(".base").contains('My Account')
})

And('I should see a message "Thank you for registering with Main Website Store"', ()=>{
    cy.contains('Thank you for registering with Main Website Store').should('be.visible')
})