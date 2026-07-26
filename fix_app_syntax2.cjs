const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

c = c.replace(
    /\}\) \{\n  return \(\n    <motion\.div \n      initial=\{\{ opacity: 0, scale: 0\.95 \}\}/,
    `)}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function MainMenu({ setView, completedCount, totalCount }: { key?: string, setView: (v: ViewState) => void, completedCount: number, totalCount: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}`
);

fs.writeFileSync('src/App.tsx', c);
