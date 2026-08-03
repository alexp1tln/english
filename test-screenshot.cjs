const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  // Capture console
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  // Evaluate if app is rendered
  const rootHtml = await page.evaluate(() => document.getElementById('root').innerHTML);
  console.log('Root length:', rootHtml.length);
  if (rootHtml.includes('Something went wrong')) {
    console.log('Error Boundary triggered!');
    console.log(rootHtml);
  }
  
  await browser.close();
})();
