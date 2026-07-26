const fs = require('fs');
let c = fs.readFileSync('src/App.tsx', 'utf8');

c = c.replace(
    /\{view === 'irregular_verbs' && \(\n              <IrregularVerbs key="irregular_verbs" setView=\{setView\} \/>\n            \)\} \{\n    return \(/,
    `{view === 'irregular_verbs' && (
              <IrregularVerbs key="irregular_verbs" setView={setView} />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function MainMenu({ setView, completedCount, totalCount }: { key?: string, setView: (v: ViewState) => void, completedCount: number, totalCount: number }) {
  return (`
);

fs.writeFileSync('src/App.tsx', c);
