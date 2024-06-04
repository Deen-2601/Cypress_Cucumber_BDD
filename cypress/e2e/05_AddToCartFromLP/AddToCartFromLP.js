import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I am on the men product listing page', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('john.doe113@example.com')
    cy.get('#pass').type('Password113')
    cy.get('#send2').click()
    cy.get('#ui-id-5 > :nth-child(2)').click()
})

When('I select "S" as size and "Gray" as color for product "Argus All-Weather Tank"', ()=>{
    cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').invoke('show')
    cy.get('.swatch-opt-694 > .size > .swatch-attribute-options > #option-label-size-143-item-167').click()
    cy.get('.swatch-opt-694 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-52').click()
})

And('I add it to the cart', ()=>{
    cy.get(':nth-child(1) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').invoke('show')
    cy.contains('Add to Cart').click({force: true})
    cy.wait(4000)
})

Then('the "Argus All-Weather Tank" should appear in the cart with size "Small" and color "Gray"', ()=>{
    cy.get('.showcart').click()
    cy.get('.toggle > span').click()
    cy.get('[class="product options list"]').should('contain','S')
    .and('contain','Gray')
})