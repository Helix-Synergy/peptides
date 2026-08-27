const https = require('https');

async function test() {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/s/photos/pharmacy`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = data.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+-[a-zA-Z0-9]+/g);
        console.log(matches ? [...new Set(matches)].slice(0, 5) : "No matches found");
        resolve();
      });
    });
  });
}

test();
