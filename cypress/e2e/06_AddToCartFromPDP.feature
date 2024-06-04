Feature: Add to cart from Product Details Page

Scenario: Add a product to the cart from the product details page
  Given I am on the product details page
  When I select "Large" as size and "Green" as color
  And I add it to the cart
  Then the "Hero Hoodie" should appear in the cart with size "Large" and color "Green"