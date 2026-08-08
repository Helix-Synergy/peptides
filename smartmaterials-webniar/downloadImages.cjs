const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const urls = {
  'executive_panel_banner.webp': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
  'event_partners_banner.webp': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop',
  'about_banner.webp': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1600&auto=format&fit=crop'
};

const outputDir = path.join(__dirname, 'src', 'assets', 'banners');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const downloadAndConvert = (filename, url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      const chunks = [];
      response.on('data', chunk => chunks.push(chunk));
      response.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const outputPath = path.join(outputDir, filename);
        sharp(buffer)
          .webp({ quality: 80 })
          .toFile(outputPath)
          .then(() => {
            console.log(`Converted and saved: ${filename}`);
            resolve();
          })
          .catch(err => {
            console.error(`Failed to convert ${filename}:`, err);
            reject(err);
          });
      });
    }).on('error', err => {
      console.error(`Error downloading ${url}:`, err);
      reject(err);
    });
  });
};

const run = async () => {
  for (const [filename, url] of Object.entries(urls)) {
    try {
      await downloadAndConvert(filename, url);
    } catch (e) {
      console.error(e);
    }
  }
  console.log('All done!');
};

run();
