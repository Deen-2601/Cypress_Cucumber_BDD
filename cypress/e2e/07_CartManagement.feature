Feature: Cart Management

Scenario: Remove an item from the cart
  Given I have added "Hero Hoodie" to the cart
  When I remove "Hero Hoodie" from the cart
  Then "Hero Hoodie" should no longer appear in the cart

Scenario: Update quantity of a cart item
    Given I have added "Hero Hoodie" to the cart
    When I update the quantity of "Hero Hoodie" in the cart to 3
    Then the cart should reflect 3 as the quantity for "Hero Hoodie"