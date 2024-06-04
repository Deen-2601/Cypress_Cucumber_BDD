Feature: Add to Cart from Men Listing Page

Scenario: Add a product to the cart from the men listing page
    Given I am on the men product listing page
    When I select "S" as size and "Gray" as color for product "Argus All-Weather Tank"
    And I add it to the cart
    Then the "Argus All-Weather Tank" should appear in the cart with size "Small" and color "Gray"