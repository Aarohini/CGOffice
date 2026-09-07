import { Page } from "@playwright/test";
 
export class dashboardPage {
 
    constructor(private page: Page) { }
    funds_transfer = ':text-is("Funds Transfer")'
    new_beneficiary = 'button:has-text("Add New")'
    full_name = '#bene-name:visible'
    acc_number = '#bene-account'
    // bank_name = 'option:has-text("Bank of America")'
    save = 'button:has-text("Save Beneficiary")'
    async open() {
        await this.page.goto('https://www.playwrightpad.in/sandbox/banking');
    }
    async transferFunds() {
        await this.page.click(this.funds_transfer);
    }
    async addNewBeneficiary() {
        await this.page.click(this.new_beneficiary);
    }
    async benefit(full_name: string, acc_number: number) {
 
        await this.page.fill(this.full_name, full_name);
        await this.page.fill(this.acc_number, acc_number.toString());
        // await await this.page.selectOption(
        //     '#bank-name',
        //     { label: 'Bank of America' }
        // );
        await this.page.click(this.save);
 
    }
 
}
