const https = require('https');
const fs = require('fs');
const path = require('path');

const trackIds = [
  '1620712943543-bcc4688e7485', // 1. AI
  '1485827404703-89b55fcc595e', // 2. ML (Robot)
  '1507146426996-ef05306b995a', // 3. Deep Learning
  '1611162617474-5b21e879e113', // 4. GenAI (Data center)
  '1526374965328-7f61d4dc18c5', // 5. NLP (Code)
  '1519389950473-47ba0277781c', // 6. Computer Vision
  '1485827404703-89b55fcc595e', // 7. Robotics
  '1581091226825-a6a2a5aee158', // 8. Data Science
  '1573164713988-8665fc963095', // 9. Healthcare
  '1460925895917-afdab827c52f', // 10. Business
  '1550751827-4bd374c3f58b', // 11. Cyber
  '1518770660439-4636190af475', // 12. Autonomous
  '1526374965328-7f61d4dc18c5', // 13. Explainable AI
  '1531297122-e1500d37a281', // 14. Ethics
  '1451187580459-43490279c0fa'  // 15. Innovation
];

const dir = path.join(__dirname, 'src', 'assets', 'tracks');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode > 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(download(res.headers.location, dest));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function downloadAll() {
  for (let i = 0; i < trackIds.length; i++) {
    const url = `https://images.unsplash.com/photo-${trackIds[i]}?q=80&w=800&auto=format&fit=crop`;
    const dest = path.join(dir, `track${i + 1}.jpg`);
    console.log(`Downloading image for track ${i + 1}...`);
    await download(url, dest);
  }
  console.log("All images downloaded!");
}

downloadAll();
