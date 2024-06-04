Feature: User Registration

Scenario: Register a new user with valid details
    Given I am on the registration page
      When I enter "John" as the firstname, "Doe" as the lastname, "john.doe1235@example.com" as the email, "Password1235" as the password, and "Password1235" as the confirmation password
      And I submit the registration form
      Then I should be redirected to the login page
      And I should see a message "Thank you for registering with Main Website Store"


    