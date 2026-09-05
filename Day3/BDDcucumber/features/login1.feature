Feature: Login Feature

    Scenario: Successful login with valid credentials
        Given the user is on the login page
        When the user enters valid credentials
        And clicks the login button
        Then the user should be logged in successfully
    
    Scenario: Unsuccessful login with invalid credentials
        Given the user is on the login page
        When the user enters invalid credentials
        And clicks the login button
        Then the user should view the invalid credentials error
    
    
    
    @smoke
    Scenario Outline: Login with multiple users

        Given the user is on the login page
        When the user enters "<username>" and "<password>"
        Then the user should view the invalid credentials error

        Examples:
            | username                | password       |
            | standard_user           | secret_sauce1  |
            | locked_out_user         | secret_sauce1  |
            | problem_user            | secret_sauce1  |
            | performance_glitch_user | secret_sauce1  |
            | error_user              | secret_sauce1  |
            | visual_user             | secret_sauce1  |
