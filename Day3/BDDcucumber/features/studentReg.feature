Feature: Student Registration
# Scenario: Successful student registration with valid details
Scenario Outline: Successful student registration with valid details
    Given the user is on the student registration page
    When the user fills all valid details with "<username>", "<email>", "<mobileNumber>", "<dob>", "<subject>", "<address>", "<state>", and "<city>"
    And the user selects "<gender>" and "<hobby>"
    And clicks the register button

    Then the user should see a successful registration message


    Examples:
      | username  | email            | gender | mobileNumber | dob        | subject | hobby   | address        | state         | city    |
      | Rahul     | user1@gmail.com  | Male   | 9876543210   | 2000-01-15 | Maths   | Sports  | Demo Address-1 | NCR           | Meerut  |
      | Anjali    | user2@gmail.com  | Female | 9123456789   | 2001-05-20 | English | Reading | Demo Address-2 | Haryana       | Lucknow |
      | Satya     | user3@gmail.com  | Other  | 9988776655   | 1999-09-10 | Physics | Music   | Demo Address-3 | Rajasthan     | Agra    |
 
 
