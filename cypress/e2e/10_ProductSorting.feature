Feature: Product Sorting

Scenario: Verify default sorting order is position and ascending
  Given I am on the men tops product listing page for the first time
  Then the products should be displayed sorted by postion by default
  And the "ascending order" arrow should appear

  Scenario: Toggle sorting order from ascending to descending
  Given I am on the men tops product listing page
  When the sorting is changed to price, the product should be displayed by price in ascending order by default
  And I click on the "ascending order" arrow
  Then the products should be sorted by price in descending order
  And the "descending order" arrow should appear
