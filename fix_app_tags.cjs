const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

c = c.replace(
    /<\/AnimatePresence>\n        <\/div>\n      <\/main>\n    <\/div>\n  \);\n\}/,
    `</AnimatePresence>\n        </div>\n      </div>\n    </div>\n  );\n}`
);

fs.writeFileSync('src/App.tsx', c);
