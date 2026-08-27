const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src');

const replacements = [
  // Titles
  { regex: /International conference on Economics and Business Management/g, replacement: "Global Conclave on Artificial Intelligence & Machine Learning" },
  { regex: /Economics and Business Management/g, replacement: "Artificial Intelligence & Machine Learning" },
  { regex: /Economics & Business/gi, replacement: "AI & ML" },
  { regex: /Business Management/g, replacement: "Machine Learning" },
  { regex: /Business and Economics/g, replacement: "Artificial Intelligence" },
  { regex: /Economics/g, replacement: "Artificial Intelligence" },
  
  // Dates
  { regex: /10\/01\/2026/g, replacement: "12/11/2026" },
  { regex: /01-10-2026/g, replacement: "11-12-2026" },
  { regex: /October 1st, 2026/g, replacement: "December 11th, 2026" },
  { regex: /October 1, 2026/g, replacement: "December 11, 2026" },
  { regex: /Oct 1, 2026/g, replacement: "Dec 11, 2026" },
  
  // Theme/Source tags
  { regex: /'BuzzWebinar'/g, replacement: "'GenAIConclave'" },
  { regex: /buzz-visitors/g, replacement: "genai-visitors" },
  
  // Specific words
  { regex: /BUZZ WEBINAR/g, replacement: "GENAI CONCLAVE" },
  { regex: /BuzzWebinar/g, replacement: "GenAIConclave" },
  { regex: /BUZZ/g, replacement: "GENAI" },
  { regex: /buzz/g, replacement: "genai" },
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

// Also update index.html in root
const indexHtml = path.join(__dirname, 'index.html');
if (fs.existsSync(indexHtml)) {
    let content = fs.readFileSync(indexHtml, 'utf8');
    replacements.forEach(({ regex, replacement }) => {
      content = content.replace(regex, replacement);
    });
    fs.writeFileSync(indexHtml, content);
    console.log(`Updated: ${indexHtml}`);
}

console.log("Global text replacement complete.");
