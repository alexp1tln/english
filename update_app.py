import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove import LifeSurvival
content = re.sub(r"import LifeSurvival from './components/LifeSurvival';\n", "", content)

# Remove survival rendering block
content = re.sub(r"\s*\{view === 'survival' && \(\s*<LifeSurvival key=\"survival\"[^\}]+\}\s*\)\}\s*", "\n", content)

# Remove the button for Бытовые квесты
content = re.sub(r"\s*<button onClick=\{\(\) => setView\('survival'\)\}[^>]+>\s*<div[^>]+><Compass[^>]+/> <span[^>]+>Бытовые квесты</span></div>\s*<ChevronRight[^>]+/>\s*</button>", "", content)

# Smooth out page transitions (duration: 0.5 -> 0.7)
content = content.replace("duration: 0.5", "duration: 0.7")

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
