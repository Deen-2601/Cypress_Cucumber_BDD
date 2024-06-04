import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I have added "Hero Hoodie" to the cart', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('john.doe113@example.com')
    cy.get('#pass').type('Password113')
    cy.get('#send2').click()
    cy.get('#ui-id-5').click()
    cy.get('[title="Hero Hoodie"]').click()
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-53').click()
    cy.get('#product-addtocart-button').click()
    cy.wait(4000)
})

When('I remove "Hero Hoodie" from the cart', ()=>{
    cy.get('[class="action showcart"]').click()
    cy.get('[class="action delete"]').click({force: true})
    cy.get('[class="action-primary action-accept"]').click({force: true})

    cy.on('window:confirm', (text) =>{
        expect(text).to.equal('Are you sure you would like to remove this item from the shopping cart?')
        return true
    })
})

Then('"Hero Hoodie" should no longer appear in the cart', ()=>{
    cy.wait(1000)
    cy.get('[class="subtitle empty"]').should('not.contain', 'Hero Hoodie')
})

When('I update the quantity of "Hero Hoodie" in the cart to 3', ()=>{
    cy.get('[class="action showcart"]').click()
    cy.get('[class="item-qty cart-item-qty"]')
    .clear({force: true})
    .wait(1000)
    .type(3)
    cy.get('[class="update-cart-item"]').click({force: true})
    cy.wait(4000)
})

Then('the cart should reflect 3 as the quantity for "Hero Hoodie"', ()=>{
    cy.get('[class="item-qty cart-item-qty"]')
    .should('be.visible')
    .should('have.value', '3')
})