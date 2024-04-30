const fs = require('fs');
const { execSync } = require('child_process');

const commitInfo = execSync(`git log -n1 --pretty=format:"%h,%ad"`).toString();
const [commit, date] = commitInfo.split(',');
const commitJson = JSON.stringify({ commit, date });

try {
  fs.writeFileSync('version.json', commitJson);
  console.log('Version file written successfully\n');
} catch (error) {
  console.error('Error writing to version file:', error);
}
