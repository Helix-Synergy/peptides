const fs = require('fs');
const https = require('https');

https.get('https://smartmaterials.helixconferences.com/static/js/main.a3816a4e.js', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // We saw it was something like Kn=[{name:"AI/Machine Learning",icon:...},{name:"Advanced Nanomaterials"...}]
    const match = data.match(/name:"([^"]+)"/g);
    if (match) {
        console.log(`Found ${match.length} names total in the bundle.`);
        // Let's filter unique names that look like tracks (e.g. no short UI strings)
        // Actually, just dump them all so I can see them.
        fs.writeFileSync('all_names.txt', match.join('\n'));
    }
  });
});
