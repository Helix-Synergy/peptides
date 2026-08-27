const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1611078759530-9b37ee76d375', // Vaccine
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118', // Lab
  'https://images.unsplash.com/photo-1582719478250-c89dd1432024'  // Medical
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${url} -> ${res.statusCode}`);
  });
});
