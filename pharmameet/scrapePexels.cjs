const https = require('https');

async function testPexels() {
  return new Promise((resolve) => {
    https.get('https://www.pexels.com/search/pharmacy/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = data.match(/https:\/\/images\.pexels\.com\/photos\/\d+\/pexels-photo-\d+\.jpeg/g);
        console.log(matches ? [...new Set(matches)].slice(0, 5) : "No matches found");
        resolve();
      });
    });
  });
}

testPexels();
