Feature: Wishlist Functionality

Scenario: Add a product to the wishlist before login
  Given I am logged out
  And I am viewing the product "Hero Hoodie"
  When I try to add "Hero Hoodie" to my wishlist
  Then I should be redirected to the login page
  When I login
  Then I should be redirected to the wishlist page
  And "Hero Hoodie" should be added to my wishlist

Scenario: Add a product to the wishlist while logged in
  Given I am logged in
  And I am on the product details page for Fusion Backpack
  When I click on the the "Add to Wishlist" button for "Fusion Backpack"
  Then I should be redirected to my wishlist page
  And I should see a confirmation message "Fusion Backpack has been added to your Wish List" and the product detail should be displayed