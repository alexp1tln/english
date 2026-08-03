const fs = require('fs');
let content = fs.readFileSync('src/main.tsx', 'utf8');
content = content.replace("<ErrorBoundary>\n      <ErrorBoundary><App /></ErrorBoundary>\n    </ErrorBoundary>", "<ErrorBoundary><App /></ErrorBoundary>");
fs.writeFileSync('src/main.tsx', content);
