# Cypress_Cucumber_BDD
Cypress with Cucumber Automation Tests for Magento Website
## Software Requirements:
. Node.js (version 14 or later): https://nodejs.org/en

. npm (Node Package Manager): Installed with Node.js

. Chrome or Chromium web browser

## Setup Instructions:

### 1. Clone this repository:

Use Git to clone this repository to your local machine.

### 2. Install dependencies:

Open a terminal in the project directory and run:

    npm install

This installs all the required dependencies for Cypress and Cucumber.

### 3. Run tests (initial run):

After intallation, run the tests with:

    npx cypress run

This opens the Cypress test runner in your browser. It will execute all the tests and generate reports.

### 4. Run tests with Cucumber report:

To generate a seperate Cucumber HTML report after test execution, run:

    npx cypress run generate-multi-cucumber-html-report

This command uses the cucumber reporter and specifies the output path for the HTML report (reports/multiple-cucumber-htmlreport.html).

### 5. View Cucumber Report:

After running tests with the Cucumber reporter, navigate to the reports folder and open index.html in your browser. This will display a detailed report of the Cucumber test execution.

## Test Execution Steps (without Reporter):

### 1. Open Cypress Test Runner:

Run npx cypress run in your terminal. This opens the Cypress test runner in your browser.

### 2. Run Tests:

° The test runner displays your test features and scenarios.

° Click on a feature or scenario to see its details.

° Click the "Run" button (play icon) next to a scenario to execute it individually.

° Alternatively, click the "Run all" button to run all tests.

### 3. View Results:

° The test runner displays the execution status (pass/fail) for each scenario.

° Click on a scenario to view detailed logs, screenshots (if captured), and error messages (if any).

## Additional Resources:

° Cypress Documentation: https://docs.cypress.io/guides/overview/why-cypress

° Cucumber Documentation: https://cucumber.io/docs/cucumber/

# Features
## Feature: User Registration
### Scenario: Register a new user with valid details

° Given I am on the registration page

° When I enter "John" as the firstname, "Doe" as the lastname, "john.doe1235@example.com" as the email, "Password1235" as the password, and "Password1235" as the confirmation password

° And I submit the registration form

° Then I should be redirected to the login page

° And I should see a message "Thank you for registering with Main Website Store"

## Feature: User Login

### Scenario: Login with valid credentials

° Given I am on the login page

° When I enter "john.doe113@example.com" as the email and "Password113" as the password

° And I submit the login form

° Then I should be logged in successfully

° And I should be redirected to the homepage

## Feature: Product Listing

### Scenario: View product listing page

° Given I am logged in

° When I navigate to the men product listing page

° Then I should see a list of men products available for purchase

## Feature: Product Details

### Scenario: View product details from listing page

° Given I am on the men product listing page

° When I click on a product named "Hero Hoodie"
 
° Then I should be taken to the product details page for "Hero Hoodie"

° And I should see details including size and color options

## Feature: Add to Cart from Men Listing Page

### Scenario: Add a product to the cart from the men listing page

° Given I am on the men product listing page

° When I select "S" as size and "Gray" as color for product "Argus All-Weather Tank"

° And I add it to the cart

° Then the "Argus All-Weather Tank" should appear in the cart with size "Small" and color "Gray"

## Feature: Add to Cart from Product Details Page

## Scenario: Add a product to the cart from the product details page

° Given I am on the product details page

° When I select "Large" as size and "Green" as color

° And I add it to the cart
°
Then the "Hero Hoodie" should appear in the cart with size "Large" and color "Green"

## Feature: Cart Management

### Scenario: Remove an item from the cart

° Given I have added "Hero Hoodie" to the cart

° When I remove "Hero Hoodie" from the cart

° Then "Hero Hoodie" should no longer appear in the cart

### Scenario: Update quantity of a cart item

° Given I have added "Hero Hoodie" to the cart

° When I update the quantity of "Hero Hoodie" in the cart to 3

° Then the cart should reflect 3 as the quantity for "Hero Hoodie"

## Feature: Checkout Process
### Scenario: Complete a checkout with new shipping address

° Given I have products in my cart

° When I proceed to the checkout page

° And I enter shipping information with "John" as firstname, "Doe" as lastname, "123 Elm St" as street address, "Anytown" as city, "Texas" as state, "12345" as zip, "United States" as country, and "1234567890" as phone number

° And I select "Table Rate Best Way" as the shipping method

° And I complete the payment process with the "My billing and shipping address are the same" checkbox checked

° And I click "Place order"

° Then I should be redirected to the "Thank you for your purchase!" page

## Feature: Wishlist Functionality

### Scenario: Add a product to the wishlist before login

° Given I am logged out

° And I am viewing the product "Hero Hoodie"

° When I try to add "Hero Hoodie" to my wishlist

° Then I should be redirected to the login page

° When I login

° Then I should be redirected to the wishlist page

° And "Hero Hoodie" should be added to my wishlist

### Scenario: Add a product to the wishlist while logged in

° Given I am logged in

° And I am on the product details page for "Fusion Backpack"

° When I click on the "Add to Wishlist" button for "Fusion Backpack"

° Then I should be redirected to my wishlist page

° And I should see a confirmation message "Fusion Backpack has been added to your Wish List" and the product detail should be displayed

## Feature: Product Sorting

### Scenario: Verify default sorting order is position and ascending

° Given I am on the men tops product listing page for the first time

° Then the products should be displayed sorted by position by default

° And the "ascending order" arrow should appear

### Scenario: Toggle sorting order from ascending to descending

° Given I am on the men tops product listing page

° When the sorting is changed to price, the product should be displayed by price in ascending order by default

° And I click on the "ascending order" arrow

° Then the products should be sorted by price in descending order

° And the "descending order" arrow should appear

