Feature: Product Details

Scenario: View product details from listing page
  Given I am on the men product listing page
  When I click on a product named "Hero Hoodie"
  Then I should be taken to the product details page for "Hero Hoodie"
  And I should see details including size and color options

    
    