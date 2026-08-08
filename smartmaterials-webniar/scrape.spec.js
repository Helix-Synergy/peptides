import { test, expect } from '@playwright/test';
import * as fs from 'fs';

test('scrape tracks', async ({ page }) => {
  await page.goto('https://smartmaterials.helixconferences.com/smartmaterials-conference-tracks/', { waitUntil: 'networkidle' });
  
  // Wait for the tracks to load
  await page.waitForSelector('.MuiGrid-item');
  
  const tracks = await page.evaluate(() => {
    const trackElements = document.querySelectorAll('.MuiGrid-item');
    const results = [];
    
    trackElements.forEach(el => {
      const titleEl = el.querySelector('h2, h3, .MuiTypography-h5, .MuiTypography-h6');
      const descEl = el.querySelector('p, .MuiTypography-body1, .MuiTypography-body2');
      
      if (titleEl && descEl) {
        results.push({
          title: titleEl.innerText.trim(),
          desc: descEl.innerText.trim()
        });
      }
    });
    
    return results;
  });
  
  fs.writeFileSync('scraped_tracks.json', JSON.stringify(tracks, null, 2));
  console.log(`Scraped ${tracks.length} tracks.`);
});
