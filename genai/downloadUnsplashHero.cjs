const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop';
const savePath = path.join(__dirname, 'src', 'assets', 'ai_hero.jpg');
const heroJsxPath = path.join(__dirname, 'src', 'components', 'Hero.jsx');

https.get(url, (res) => {
  // Handle redirects
  if (res.statusCode > 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, (redirectRes) => {
      const fileStream = fs.createWriteStream(savePath);
      redirectRes.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        updateHeroJsx();
      });
    });
  } else {
    const fileStream = fs.createWriteStream(savePath);
    res.pipe(fileStream);
    fileStream.on('finish', () => {
      fileStream.close();
      updateHeroJsx();
    });
  }
});

function updateHeroJsx() {
  let heroContent = fs.readFileSync(heroJsxPath, 'utf8');
  heroContent = heroContent.replace(/import heroBg from '\.\.\/assets\/business_hero\.png';/, "import heroBg from '../assets/ai_hero.jpg';");
  fs.writeFileSync(heroJsxPath, heroContent);
  console.log("Hero image downloaded and updated.");
}
