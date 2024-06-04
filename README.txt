# Cypress_Cucumber

This document provides instructions for running automated tests on the Magento website (https://magento.softwaretestingboard.com/) using Cypress and Cucumber.

Required Software/Tools
Node.js (version 14 or later): https://nodejs.org/en
npm (Node Package Manager): Installed with Node.js
VS Code (https://code.visualstudio.com/)
Cypress: End-to-end testing framework (https://www.cypress.io/)
Cucumber.js: Behavior-driven development framework (https://cucumber.io/docs/installation/javascript/)
Web browser compatible with Cypress (Chrome, Firefox, Edge)
Setup Instructions
Install Node.js: Download and install Node.js from the official website. This will also install npm.

Clone or Download Project: Unzip the provided compressed folder, and open via VS Code (or any other editor).

Install Dependencies: Open a terminal in the project directory and run:

  npm install

This command installs all the required dependencies for the project.

Running Tests
Open Terminal: Navigate to the project directory in your terminal.

Start Cypress Test Runner: Run the following command to launch the Cypress test runner in your browser:

  npx cypress open

This opens the Cypress test runner interface.

Run All Tests: Click the "Run all specs" button in the Cypress test runner interface. This executes all the test scenarios defined in your Cucumber feature files.

Run Specific Tests (Optional): You can also run individual feature files or scenarios by clicking on their names in the Cypress test runner tree view.

View Reports: After test execution, Cypress displays results in the test runner interface. Additionally, a multi-cucumber HTML report is generated in the reports folder. You can access this report by opening the index.html file within the reports folder in your browser. This report provides detailed information about each test scenario, including steps, status, and screenshots for failed tests (if enabled).

Test Features
This project includes automated tests for various functionalities on the Magento website:

User Registration
User Login
Product Listing
Product Details
Add to Cart
Cart Management
Checkout Process
Wishlist Functionality
Product Sorting




