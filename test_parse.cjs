const fs = require('fs');
const data = JSON.parse(fs.readFileSync('test_api.json'));
const data2 = JSON.parse(fs.readFileSync('test_api2.json'));

function extractTranslations(apiData) {
    let direct = apiData[0][0][0];
    let alternatives = [];
    if (apiData[1] && Array.isArray(apiData[1])) {
        // Collect top 2-3 from each part of speech, up to maybe 5 total
        apiData[1].forEach(pos => {
            if (pos[1] && Array.isArray(pos[1])) {
                alternatives.push(...pos[1].slice(0, 3));
            }
        });
    }
    // Dedup and remove the direct translation if it's there
    let uniqueAlts = [...new Set(alternatives)].filter(w => w.toLowerCase() !== direct.toLowerCase());
    
    let result = [direct, ...uniqueAlts].slice(0, 4);
    return result.join(', ');
}
console.log('Apple:', extractTranslations(data));
console.log('Go:', extractTranslations(data2));
