const puppeteer = require('puppeteer');
const express = require('express');
var bodyParser = require('body-parser')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/screenshot', async (req, res) => {
  //opens the browser
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  //loads the url
  await page.goto('https://auth.revvsales.com/signin');

  //authentication
  await page.type('#signin-email-field', req.body.email);
  await page.click('#signin-email-continue-btn');
  await page.waitForTimeout(2000)
  await page.type('#signin-password-field', req.body.password);

  //navigating to landing page
  await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.click('#signin-button-field'), // Clicking the link will indirectly cause a navigation
  ]);

  //navigating to the document editing page
  await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    page.goto('https://ft9olktt.revvsales.com/documents/' + req.body.document_no), // Clicking the link will indirectly cause a navigation
  ]);
  await page.waitForTimeout(2000);   
  
  
  //entering values in the form fields 
  await page.focus('.revv-inp')
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.keyboard.press('Backspace');
  

  await page.keyboard.type(req.body.date, {delay: 100})
  await page.keyboard.press('Tab')

  await page.keyboard.type(req.body.toWhom, {delay: 100})
  await page.keyboard.press('Tab')

  await page.keyboard.type(req.body.announcement, {delay: 100})


  await page.click('.btn-export-wrapper')
  await page.click('.send-list-item')
  // await Promise.all([
  //   page.waitForNavigation(), // The promise resolves after navigation has finished
  //   // Clicking the link will indirectly cause a navigation
  // ]);
  await page.waitForTimeout(6000); 
  //entering values in the form fields 
  await page.focus('.doc-recipients-input-box')
  await page.keyboard.down('Control');
  await page.keyboard.press('A');
  await page.keyboard.up('Control');
  await page.keyboard.press('Backspace');

  await page.keyboard.type(req.body.toEmail, {delay: 100})
  await page.keyboard.press('Tab')

  await page.keyboard.type(req.body.first_name, {delay: 100})
  await page.keyboard.press('Tab')

  await page.keyboard.type(req.body.last_name, {delay: 100})
  await page.waitForTimeout(2000);
  await page.click('#addrecipientspopup-share-btn')
  
  //taking screenshot of the page
  await page.screenshot({path: 'login.png'});
  await page.waitForTimeout(4000);

  //close the browser. now with the help of doc_no, doc_id and object_id, you can create a magic link of the document using revvsales api's
  await browser.close();
  res.json({"name":"babu"})
})

app.listen(process.env.PORT)