const https = require('https');
const fs = require('fs');
const path = require('path');

const query = 'Artificial neural network';
const savePath = path.join(__dirname, 'src', 'assets', 'ai_hero.png');
const heroJsxPath = path.join(__dirname, 'src', 'components', 'Hero.jsx');

async function downloadWikiImage() {
  return new Promise((resolve) => {
    // 1. Get image info from Wiki API
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(query)}`;
    
    https.get(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query?.pages;
          if (pages) {
            const pageId = Object.keys(pages)[0];
            if (pages[pageId].original && pages[pageId].original.source) {
              const imgUrl = pages[pageId].original.source;
              console.log(`Downloading: ${imgUrl}`);
              
              // 2. Download the actual image
              https.get(imgUrl, (imgRes) => {
                const fileStream = fs.createWriteStream(savePath);
                imgRes.pipe(fileStream);
                fileStream.on('finish', () => {
                  fileStream.close();
                  console.log("Image saved.");
                  
                  // 3. Update Hero.jsx
                  let heroContent = fs.readFileSync(heroJsxPath, 'utf8');
                  heroContent = heroContent.replace(/import heroBg from '\.\.\/assets\/business_hero\.png';/, "import heroBg from '../assets/ai_hero.png';");
                  fs.writeFileSync(heroJsxPath, heroContent);
                  console.log("Hero.jsx updated to use ai_hero.png");
                  resolve();
                });
              });
              return;
            }
          }
        } catch (e) {
          console.error(e);
        }
        resolve();
      });
    }).on('error', (err) => {
      console.error(err);
      resolve();
    });
  });
}

downloadWikiImage();
