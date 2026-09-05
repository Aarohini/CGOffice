import { Page, expect } from '@playwright/test';

export class StudentRegPage {

    constructor(private page: Page) {}

    // Locators
    // private page: Page = page;

    private txtName = '#name';
    private txtEmail = '#email';
    private genderRadio = 'input[type="radio"]';
    private txtMobile = '#mobile';
    private txtDob = '#dob';
    private txtSubject = '#subjects';
    private hobbyCheck = 'input[type="checkbox"]';

    private fileUpload = 'input[type="file"]';
    private txtAddress = 'textarea[name="picture"]';
    private ddlState = '#state';
    private ddlCity = '#city';
    private btnSubmit = 'input[type="submit"]';


    async openPage() {

        await this.page.goto(
            'https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php'
        );

    }

   //method to fill all text-field valid student details
   async enterValidDetails(username: string, email: string,
        mobileNumber: string, dob: string, subject: string, 
        address: string, state: string, city: string)
        
        {

        await this.page.fill(this.txtName, username);


        await this.page.waitForTimeout(1000);

        await this.page.fill(this.txtAddress, address);
        await this.page.fill(this.txtEmail, email);


        await this.page.waitForTimeout(1000);


        await this.page.fill(this.txtMobile, mobileNumber);
        await this.page.waitForTimeout(1000);

        //Datepicker

        await this.page.locator(this.txtDob).fill(dob);
        await this.page.waitForTimeout(1000);

        await this.page.fill(this.txtSubject, subject);

        await this.page.waitForTimeout(1000);
        await this.page.locator(this.fileUpload).nth(0).setInputFiles('test-data/pfp.jpg');
        await this.page.waitForTimeout(1000);

        await this.page.selectOption(this.ddlState, state);
        await this.page.selectOption(this.ddlCity, city);
        await this.page.waitForTimeout(1000);
    }

    async pickGender(gender: string) {

        switch (gender) {
            case 'Male':
                await this.page.locator(this.genderRadio).nth(0).click(); // Male
                break;
            case 'Female':
                await this.page.locator(this.genderRadio).nth(1).click(); // Female
                break;
            case 'Other':
                await this.page.locator(this.genderRadio).nth(2).click();
                break;
            default:
                throw new Error('Invalid gender');
        }

    }

    async enterHobby(hobby: string) {
        switch (hobby) {
            case 'Sports':
                await this.page.locator(this.hobbyCheck).nth(0).click(); // Sports
                break;
            case 'Reading':
                await this.page.locator(this.hobbyCheck).nth(1).click(); // Reading
                break;
            case 'Music':
                await this.page.locator(this.hobbyCheck).nth(2).click(); // Music
                break;
            default:
                throw new Error('Invalid hobby');
        }

    }

    async clickSubmitButton() {

        await this.page.click(this.btnSubmit);

    }

//     async verifyGenderSelected() {

//         await expect(
//             this.page.locator(
//                 'input[value="Male"]'
//             )
//         ).toBeChecked();

//     }

//     async verifyHobbySelected() {

//         await expect(
//             this.page.locator(
//                 'input[value="Sports"]'
//             )
//         ).toBeChecked();

//     }

//     async verifyDateEntered() {

//         await expect(
//             this.page.locator('#dob')
//         ).not.toHaveValue('');

//     }

 }
