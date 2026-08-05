const puppeteer = require('puppeteer');
const { spawn } = require('child_process');

(async () => {
  const server = spawn('node', ['dist/server.cjs'], { stdio: 'inherit' });
  await new Promise(r => setTimeout(r, 2000));

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('response', response => {
    if (!response.ok()) console.log('FAILED URL:', response.url());
  });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
  server.kill();
})();
