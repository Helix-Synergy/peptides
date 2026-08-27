const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1583324113626-70df0f4deaab',
  'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b',
  'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
  'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url} -> ${res.statusCode}`);
  });
});
