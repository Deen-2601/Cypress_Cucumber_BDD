Feature: Product Listing

Scenario: View product listing page
  Given I am logged in
  When I navigate to the men product listing page
  Then I should see a list of men products available for purchase

    