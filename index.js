const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com');
  
  
  
  
  await page.screenshot({path: 'example.png', executablePath: '//usr/bin/chromium-browser'});
  await browser.close();
})();