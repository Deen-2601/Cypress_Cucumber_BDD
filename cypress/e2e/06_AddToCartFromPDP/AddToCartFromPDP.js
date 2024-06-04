import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am on the product details page', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('john.doe113@example.com')
    cy.get('#pass').type('Password113')
    cy.get('#send2').click()
    cy.get('#ui-id-5').click()
    cy.get('[title="Hero Hoodie"]').click()
})

When('I select "Large" as size and "Green" as color', ()=>{
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-53').click()
})

And('I add it to the cart', ()=>{
    cy.get('#product-addtocart-button').click()
    cy.wait(4000)
})

Then('the "Hero Hoodie" should appear in the cart with size "Large" and color "Green"', ()=>{
    cy.get('[class="action showcart"]').click()
    cy.get('[class="toggle"]').click()
    cy.get('[class="product options list"]').should('contain','Green')
    .and('contain','M')
})