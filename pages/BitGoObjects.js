const { expect } = require("@playwright/test");

class BitGoObjects {
  constructor(page) {
    this.page = page;
    this.Transactionheader = this.page.locator(".font-h3");
    this.allTransactions = this.page.locator("//div[@id='transaction-box']/div/div/a[contains(@href,'tx')]");

  }

  async launchURL(value) {
    await this.page.goto(value);
  }
  async validateTransactionHeader(value) {
    await this.Transactionheader.scrollIntoViewIfNeeded();
    await expect(this.Transactionheader).toBeVisible();
    await expect(this.Transactionheader).toHaveText(value);
  }
 async validateTransactionHash(value)
  {
    this.transactionhash = await this.page.locator(`//a[text()='${value}']`);
    await expect(this.transactionhash).toBeVisible();
    await expect(this.transactionhash).toHaveText(value);

  }

  async getTransactionlist()
  {
      const transactionlist = await this.allTransactions;
    const  translist= await transactionlist.allTextContents();
    const count = await transactionlist.count();
    console.log(count); 
    console.log(translist); 
  }

}

module.exports ={BitGoObjects}
