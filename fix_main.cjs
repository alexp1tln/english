const fs = require('fs');
let content = fs.readFileSync('src/main.tsx', 'utf8');
content = content.replace("import { ErrorBoundary } from './ErrorBoundary';\nimport {StrictMode} from 'react';", "import {StrictMode} from 'react';");
fs.writeFileSync('src/main.tsx', content);
