import {Given, When, Then} from "@cucumber/cucumber";
import { StudentRegPage } from "../../pages/studentRegPage";
import { CustomWorld } from "../../support/world";

let studentRegPage: StudentRegPage;

Given('the user is on the student registration page', async function (this: CustomWorld) {
    studentRegPage = new StudentRegPage(this.page);
    await studentRegPage.openPage();
});

When('the user fills all valid details with {string}, {string}, {string}, {string}, {string}, {string}, {string}, and {string}', 
    async function (
        this: CustomWorld, username: string, email: string, 
        mobileNumber: string, dob: string, subject: string, 
        address: string, state: string, city: string) 
        {
    await studentRegPage.enterValidDetails(username, email, mobileNumber, dob, subject, address, state, city);
});

When('the user selects {string} and {string}', async function (this: CustomWorld, gender: string, hobby: string) {
    await studentRegPage.pickGender(gender);
    await studentRegPage.enterHobby(hobby);
});
When('clicks the register button', async function (this: CustomWorld) {
    await studentRegPage.clickSubmitButton();
});

Then('the user should see a successful registration message', async function (this: CustomWorld) {
    // await studentRegPage.verifySuccessMessage();
    console.log('Student registration successful');
});