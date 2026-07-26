const fs = require('fs');

let content = fs.readFileSync('src/components/CityMapProgress.tsx', 'utf8');

// Update interface
content = content.replace(
    /interface CityMapProgressProps \{[\s\S]*?\}/,
    `interface CityMapProgressProps {\n  setView: (v: ViewState) => void;\n  lessons: Lesson[];\n  completedLessons: string[];\n  onSelect: (lesson: Lesson) => void;\n  onSelectTest?: (moduleId: number) => void;\n}`
);

// Update component signature
content = content.replace(
    /export default function CityMapProgress\(\{ setView, lessons, completedLessons, onSelect \}: CityMapProgressProps\) \{/,
    `export default function CityMapProgress({ setView, lessons, completedLessons, onSelect, onSelectTest }: CityMapProgressProps) {`
);

// Change how points are generated
content = content.replace(
    /const points = lessons\.map\(\(lesson, i\) => \{[\s\S]*?\}\);/,
    `const items: any[] = [];
  lessons.forEach((l, i) => {
    items.push({ type: 'lesson', data: l });
    if ((i + 1) % 10 === 0) {
      items.push({ type: 'test', moduleId: l.moduleId });
    }
  });

  const points = items.map((item, i) => {
    const isSpecial = item.type === 'test';
    const amplitude = isSpecial ? 0 : 25; 
    const x = 50 + Math.sin(i * 0.5) * amplitude;
    const ySpacing = 110;
    const yOffset = i * ySpacing + 120;
    
    return {
      x: isSpecial ? 50 : x,
      y: yOffset,
      item,
      isSpecial,
      placeName: isSpecial ? specialPlaces[item.moduleId % specialPlaces.length] : null
    };
  });`
);

// Fix firstLockedIdx logic (since items now mix lessons and tests)
content = content.replace(
    /const firstLockedIdx = lessons\.findIndex\(\(l, i\) => i > 0 && !completedLessons\.includes\(lessons\[i - 1\]\.id\)\);/,
    `const firstLockedIdx = items.findIndex((item, i) => {
        if (i === 0) return false;
        const prev = items[i - 1];
        const prevId = prev.type === 'lesson' ? prev.data.id : \`test_\${prev.moduleId}\`;
        return !completedLessons.includes(prevId);
      });`
);

content = content.replace(
    /const targetIdx = firstLockedIdx === -1 \? lessons\.length - 1 : firstLockedIdx;/,
    `const targetIdx = firstLockedIdx === -1 ? items.length - 1 : firstLockedIdx;`
);

content = content.replace(
    /const completedPoints = points\.filter\(\(_, i\) => i === 0 \|\| completedLessons\.includes\(lessons\[i-1\]\.id\)\);/,
    `const completedPoints = points.filter((_, i) => {
    if (i === 0) return true;
    const prev = items[i - 1];
    const prevId = prev.type === 'lesson' ? prev.data.id : \`test_\${prev.moduleId}\`;
    return completedLessons.includes(prevId);
  });`
);

content = content.replace(
    /const isCompleted = completedLessons\.includes\(p\.lesson\.id\);/g,
    `const id = p.item.type === 'lesson' ? p.item.data.id : \`test_\${p.item.moduleId}\`;\n            const isCompleted = completedLessons.includes(id);`
);

content = content.replace(
    /const isLocked = i > 0 && !completedLessons\.includes\(lessons\[i - 1\]\.id\);/g,
    `const prevId = i > 0 ? (items[i - 1].type === 'lesson' ? items[i - 1].data.id : \`test_\${items[i - 1].moduleId}\`) : null;\n            const isLocked = i > 0 && !completedLessons.includes(prevId as string);`
);

content = content.replace(
    /key={p\.lesson\.id}/,
    `key={id}`
);

content = content.replace(
    /onClick=\{\(\) => !isLocked && onSelect\(p\.lesson\)\}/,
    `onClick={() => { if (!isLocked) { if (p.item.type === 'lesson') onSelect(p.item.data); else if (onSelectTest) onSelectTest(p.item.moduleId); } }}`
);

content = content.replace(
    /p\.lesson\.title\.split\('\('\)\[0\]/g,
    `p.item.data.title.split('(')[0]`
);

content = content.replace(
    /\{p\.placeName\}/,
    `{p.item.type === 'test' ? \`Контрольная Модуль \${p.item.moduleId}\` : p.placeName}`
);


fs.writeFileSync('src/components/CityMapProgress.tsx', content);
