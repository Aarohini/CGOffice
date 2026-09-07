import { Page } from "@playwright/test";
export class transferAMT{
    constructor(private page: Page) { }
 
    funds_transfer = ':text-is("Funds Transfer")'
    transfer_type='#transfer-type'
    from_account='#from-acc';
    to_account='#to-acc';
    transfer_amount='#transfer-amount'
    execute=':text("Execute Transfer")'
    // async open() {
 
    //     await this.page.goto('https://www.playwrightpad.in/sandbox/banking');
    // }
    async transferFunds() {
        await this.page.click(this.funds_transfer);
    }
    async transfer(funds: number){
         await this.page.fill(this.transfer_amount, funds.toString());
         await this.page.click(this.execute);
    }
 
}
