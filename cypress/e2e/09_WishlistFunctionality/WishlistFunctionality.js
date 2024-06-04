import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am logged out', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('john.doe113@example.com')
    cy.get('#pass').type('Password113')
    cy.get('#send2').click()
    cy.wait(1000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click({force: true})
    cy.wait(1000)
})

Given('I am logged in', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('john.doe113@example.com')
    cy.get('#pass').type('Password113')
    cy.get('#send2').click()
    cy.wait(4000)
})

And('I am viewing the product "Hero Hoodie"', ()=>{
    //cy.get('[title="Hero Hoodie"]').click()
    cy.get('.logo > img').click()
    cy.get(':nth-child(4) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
})

When('I try to add "Hero Hoodie" to my wishlist', ()=>{
    cy.get('.product-addto-links > .towishlist > span').click()
    cy.wait(4000)
})

Then('I should be redirected to the login page', ()=>{
    cy.url().should('include','login')
})

When('When I login', ()=>{
    cy.get('#email').type('john.doe113@example.com')
    cy.get('#pass').type('Password113')
    cy.get('#send2').click()
})

Then('I should be redirected to the wishlist page', ()=>{
    cy.url().should('include','wishlist')
})

And('"Hero Hoodie" should be added to my wishlist', ()=>{
    cy.contains('[title="Hero Hoodie"]').should('be.visible')
})

And('I am on the product details page for Fusion Backpack', ()=>{
    cy.get('#ui-id-6').click()
    cy.get('[title="Fusion Backpack"]').click()
    cy.wait(1000)
})

When('I click on the the "Add to Wishlist" button for "Fusion Backpack"', ()=>{
    cy.get('[class="action towishlist"]').click()
    cy.wait(4000)
})

Then('I should be redirected to my wishlist page', ()=>{
    cy.url().should('include','wishlist')
})

And('I should see a confirmation message "Fusion Backpack has been added to your Wish List" and the product detail should be displayed', ()=>{
    cy.contains('Fusion Backpack has been added to your Wish List').should('be.visible')
    cy.get('[title="Fusion Backpack"]').should('be.visible')
})