const fs = require('fs');
const path = require('path');

const tracks = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "NLP",
  "Computer Vision",
  "Robotics & Automation",
  "Data Science & Analytics",
  "AI in Healthcare",
  "AI in Business",
  "AI & Cybersecurity",
  "Autonomous Systems",
  "Explainable AI",
  "AI Ethics & Governance",
  "AI Applications & Innovation"
];

const jsxPath = path.join(__dirname, 'src', 'components', 'AbstractSubmission.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const optionsStr = '<option value="" disabled>Select a Track</option>\n                ' + 
                   tracks.map(t => `<option value="${t}">${t}</option>`).join('\n                ');

content = content.replace(/<option value="" disabled>Select a Track<\/option>[\s\S]*?(?=<\/select>)/, optionsStr + '\n              ');
fs.writeFileSync(jsxPath, content);
console.log("AbstractSubmission dropdown updated.");
