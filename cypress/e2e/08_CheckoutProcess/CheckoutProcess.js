import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I have products in my cart', ()=>{
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

    cy.get('[title="Viktor LumaTech&trade; Pant"]').click()
    cy.get('#option-label-size-143-item-176').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#product-addtocart-button').click()
    cy.wait(4000)
})

When('I proceed to the checkout page', ()=>{
    cy.get('[class="action showcart"]').click()
    cy.get('#top-cart-btn-checkout').click({force: true})
    cy.wait(1000)
})

And('I enter shipping information with "John" as firstname, "Doe" as lastname, "123 Elm St" as street address, "Anytown" as city, "Texas" as state, "12345" as zip, "United States" as country, and "1234567890" as phone number', ()=>{
    cy.get('[name="street[0]"]').type('123 Elm Str')
    cy.get('[name="city"]').type('Anytown')
    cy.get('[name="region_id"]').select('Texas')
    cy.get('[name="country_id"]').select('United States')
    cy.get('[name="postcode"]').type('12345')
    cy.get('[name="telephone"]').type('1234567890')
})

And('I select "Table Rate Best Way" as the shipping method', ()=>{
    cy.get('[value="tablerate_bestway"]').check().should('be.checked')
    cy.get('[value="flatrate_flatrate"]').should('not.be.checked')
})

And('I complete the payment process with the "My billing and shipping address are the same" checkbox checked', ()=>{
    cy.get('[class="button action continue primary"]').click()
    cy.wait(4000)
    cy.get('#billing-address-same-as-shipping-checkmo').check().should('be.checked')
})

And('I click "Place order"', ()=>{
    cy.get('[class="action primary checkout"]').click()
})

Then('I should be redirected to the "Thank you for your purchase!" page', ()=>{
    cy.contains('Thank you for your purchase!').should('be.visible')
})