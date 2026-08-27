const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src');

const replacements = [
  // Fix Title
  { regex: /Annual Global Summit on Business Artificial Intelligence & Foreign Trade/gi, replacement: "Global Conclave on Artificial Intelligence & Machine Learning" },
  { regex: /Annual Global Summit on Business Artificial Intelligence/gi, replacement: "Global Conclave on Artificial Intelligence & Machine Learning" },
  { regex: /Global Conclave on Artificial Intelligence & Foreign Trade/gi, replacement: "Global Conclave on Artificial Intelligence & Machine Learning" },
  
  // Fix Hero Date (Dec 11 | 2026)
  { regex: /Sep<\/div>/g, replacement: "Dec</div>" },
  { regex: /18 \| 2026/g, replacement: "11 | 2026" },
  
  // Fix Countdown Timer
  { regex: /2026-09-18T09:00:00/g, replacement: "2026-12-11T09:00:00" },
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
      });
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(targetDir);
