import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am on the men product listing page', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('john.doe113@example.com')
    cy.get('#pass').type('Password113')
    cy.get('#send2').click()
    cy.get('#ui-id-5').click()
})

When('I click on a product named "Hero Hoodie"', ()=>{
    cy.get('[title="Hero Hoodie"]').click()
})

Then('I should be taken to the product details page for "Hero Hoodie"', ()=>{
    cy.url().should('contain','hero-hoodie')
    cy.title().should('eq','Hero Hoodie')
})

And('I should see details including size and color options', ()=>{
    cy.get('#option-label-size-143-item-166').should('be.visible')
    cy.get('#option-label-size-143-item-167').should('be.visible')
    cy.get('#option-label-size-143-item-168').should('be.visible')
    cy.get('#option-label-size-143-item-169').should('be.visible')
    cy.get('#option-label-size-143-item-170').should('be.visible')
    cy.get('#option-label-color-93-item-49').should('be.visible')
    cy.get('#option-label-color-93-item-52').should('be.visible')
    cy.get('#option-label-color-93-item-53').should('be.visible')
})