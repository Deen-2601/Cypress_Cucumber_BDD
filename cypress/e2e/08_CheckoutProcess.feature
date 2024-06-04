Feature: Checkout Process

Scenario: Complete a checkout with new shipping address
    Given I have products in my cart
    When I proceed to the checkout page
    And I enter shipping information with "John" as firstname, "Doe" as lastname, "123 Elm St" as street address, "Anytown" as city, "Texas" as state, "12345" as zip, "United States" as country, and "1234567890" as phone number
    And I select "Table Rate Best Way" as the shipping method
    And I complete the payment process with the "My billing and shipping address are the same" checkbox checked
    And I click "Place order"
    Then I should be redirected to the "Thank you for your purchase!" page
