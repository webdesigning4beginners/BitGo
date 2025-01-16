// @ts-check
const { test, expect } = require('@playwright/test');
const dataset = JSON.parse(JSON.stringify(require("../datatables/constants.json")));
// @ts-ignore
const {BitGoObjects} = require('../pages/BitGoObjects');
let page, context, bitgopage;

test.beforeEach(async({browser})=>{
  context = await browser.newContext();
  page = await context.newPage();
  bitgopage = new BitGoObjects(page);
})

test('Validate details in 25 Transaction Header Section', async () => {
  await bitgopage.launchURL(dataset.url);
  await bitgopage.validateTransactionHeader(dataset.transactionHeader);
  await bitgopage.validateTransactionHash(dataset.transactionHash);
});

test('Parsing 25 Transactions', async () => {
  await bitgopage.launchURL(dataset.url);
  await bitgopage.validateTransactionHeader(dataset.transactionHeader);
  await bitgopage.getTransactionlist();
});
