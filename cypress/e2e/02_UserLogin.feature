Feature: User Login
   
Scenario: Login with valid credentials
  Given I am on the login page
  When I enter "john.doe113@example.com" as the email and "Password113" as the password
  And I submit the login form
  Then I should be logged in successfully
  And I should be redirected to the homepage

    