import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

function checkProductOrder(selector, ascending = true) {
    cy.get(selector).then($prices => {
      const prices = $prices.map((index, html) => parseFloat(html.innerText.replace('$', ''))).get();
      const sortedPrices = ascending ? [...prices].sort((a, b) => a - b) : [...prices].sort((a, b) => b - a);
      expect(prices).to.deep.equal(sortedPrices);
    });
  }

Given('I am on the men tops product listing page for the first time', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/men/tops-men.html')
})

Given('I am on the men tops product listing page', ()=>{
    cy.visit('https://magento.softwaretestingboard.com/men/tops-men.html')
})

Then('the products should be displayed sorted by postion by default', ()=>{
    cy.get(':nth-child(3) > .toolbar-sorter > #sorter')
    .find('option:selected')
    .should('have.value','position')
})

And('the "ascending order" arrow should appear', ()=>{
    cy.get('[class="action sorter-action sort-asc"]').should('be.visible')
})


When('the sorting is changed to price, the product should be displayed by price in ascending order by default', ()=>{
    cy.get(':nth-child(3) > .toolbar-sorter > #sorter').select('Price')
    checkProductOrder('[class="price-box price-final_price"]', true)
})

And('I click on the "ascending order" arrow', ()=>{
    cy.get(':nth-child(3) > .toolbar-sorter > .action').click()
})

Then('the products should be sorted by price in descending order', ()=>{
    checkProductOrder('[class="price-box price-final_price"]', false)
})

And('the "descending order" arrow should appear', ()=>{
    cy.get(':nth-child(3) > .toolbar-sorter > .action').should('be.visible')
})