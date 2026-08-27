const puppeteer = require('puppeteer');
const fs = require('fs');

const tracks = [
  { name: "Pharmaceutics", query: "pharmacy medicine" },
  { name: "Pharmacology", query: "pharmacology laboratory" },
  { name: "Pharmaceutical Chemistry", query: "chemistry lab flask" },
  { name: "Medicinal Chemistry", query: "medicine chemistry" },
  { name: "Pharmacognosy", query: "herbal medicine plants" },
  { name: "Drug Discovery & Development", query: "drug discovery" },
  { name: "Drug Delivery", query: "intravenous therapy" },
  { name: "Pharmaceutical Biotechnology", query: "biotechnology" },
  { name: "Clinical Pharmacy", query: "clinical pharmacy hospital" },
  { name: "Pharmaceutical Analysis", query: "laboratory analysis" },
  { name: "Pharmacovigilance", query: "medical safety" },
  { name: "Nanopharmaceutics", query: "nanotechnology medicine" },
  { name: "Pharmacokinetics", query: "pharmacokinetics" },
  { name: "Toxicology", query: "toxicology" },
  { name: "Regulatory Affairs", query: "medical document law" }
];

async function scrape() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const results = [];
  
  for (let track of tracks) {
    try {
      console.log(`Scraping for ${track.name}...`);
      await page.goto(`https://unsplash.com/s/photos/${encodeURIComponent(track.query)}`, { waitUntil: 'domcontentloaded' });
      
      // Wait for images to load
      await page.waitForSelector('img[src^="https://images.unsplash.com/photo-"]', { timeout: 5000 });
      
      const imageUrl = await page.evaluate(() => {
        const img = document.querySelector('img[src^="https://images.unsplash.com/photo-"]');
        if (img && img.src) {
          return img.src.split('?')[0] + '?w=800&q=80';
        }
        return null;
      });
      
      console.log(`Found: ${imageUrl}`);
      results.push({ title: track.name, url: imageUrl || 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80' });
    } catch (err) {
      console.error(`Failed to find image for ${track.name}:`, err.message);
      results.push({ title: track.name, url: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80' }); // Fallback pharmacy image
    }
  }
  
  await browser.close();
  fs.writeFileSync('scraped_images.json', JSON.stringify(results, null, 2));
  console.log('Done!');
}

scrape();
