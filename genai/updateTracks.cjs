const fs = require('fs');
const path = require('path');
const https = require('https');

const tracks = [
  { title: "Artificial Intelligence", query: "Artificial intelligence" },
  { title: "Machine Learning", query: "Machine learning" },
  { title: "Deep Learning", query: "Deep learning" },
  { title: "Generative AI", query: "Generative artificial intelligence" },
  { title: "NLP", query: "Natural language processing" },
  { title: "Computer Vision", query: "Computer vision" },
  { title: "Robotics & Automation", query: "Robotics" },
  { title: "Data Science & Analytics", query: "Data science" },
  { title: "AI in Healthcare", query: "Artificial intelligence in healthcare" },
  { title: "AI in Business", query: "Business analytics" },
  { title: "AI & Cybersecurity", query: "Cybersecurity" },
  { title: "Autonomous Systems", query: "Self-driving car" },
  { title: "Explainable AI", query: "Explainable artificial intelligence" },
  { title: "AI Ethics & Governance", query: "Ethics of artificial intelligence" },
  { title: "AI Applications & Innovation", query: "Innovation" }
];

async function fetchWikiImage(query) {
  return new Promise((resolve) => {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(query)}&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1`;
    
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
              resolve(pages[pageId].original.source);
              return;
            }
          }
        } catch (e) {}
        resolve(`https://placehold.co/600x400/0f172a/06b6d4?text=${encodeURIComponent(query)}`);
      });
    }).on('error', () => {
      resolve(`https://placehold.co/600x400/0f172a/06b6d4?text=${encodeURIComponent(query)}`);
    });
  });
}

async function updateTracks() {
  const tracksJsxPath = path.join(__dirname, 'src', 'components', 'Tracks.jsx');
  let tracksContent = fs.readFileSync(tracksJsxPath, 'utf8');
  
  let newTracksData = 'const tracksData = [\n';
  
  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    console.log(`Fetching image for: ${track.title}`);
    let imgUrl = await fetchWikiImage(track.query);
    
    newTracksData += `    {
      title: '${track.title}',
      desc: 'Explore the latest advancements and practical applications in ${track.title}.',
      imgSrc: '${imgUrl}'
    }${i < tracks.length - 1 ? ',' : ''}\n`;
  }
  newTracksData += '  ];';
  
  tracksContent = tracksContent.replace(/const tracksData = \[[\s\S]*?\];/, newTracksData);
  fs.writeFileSync(tracksJsxPath, tracksContent);
  console.log("Tracks updated successfully.");
}

updateTracks();
