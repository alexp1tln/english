import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

// Check if we have an API key, since we need it for this script
if (!process.env.GEMINI_API_KEY) {
  console.error('No GEMINI_API_KEY found');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function fixFile(filename, description) {
  console.log(`Fixing ${filename}...`);
  const content = fs.readFileSync(filename, 'utf8');
  
  const prompt = `
Ты опытный преподаватель английского языка. Твоя задача - исправить русские транскрипции (в квадратных скобках на кириллице с ударениями, если нужно) в предоставленном TypeScript файле.
Файл содержит данные для приложения. Тебе нужно ТОЛЬКО обновить значения полей, связанных с транскрипцией (например, transcription, transcriptionBase, transcriptionPast, transcriptionParticiple). 
НЕ меняй структуру, идентификаторы, слова, переводы и остальной код.
Используй общепринятую русскую практическую транскрипцию английских звуков (например, bought -> [бот], caught -> [кот], new -> [нью] или [ню], always -> [о́лвэйз], people -> [пипл] (не пипал) и т.д.).
Также исправь "to be" -> "[ту би]" или просто "[би]", "to have" -> "[ту хэв]", "to do" -> "[ту ду]", "to say" -> "[ту сэй]" (там сейчас "[тo бэ]", "[тo хaвэ]" и т.д.).
Убедись, что ударения стоят корректно (символ ударения ́ ).

Оригинальный файл ${filename}:
\`\`\`typescript
${content}
\`\`\`

Верни ТОЛЬКО полный исправленный код TypeScript файла, внутри блоков \`\`\`typescript ... \`\`\`. Не пиши никаких пояснений.
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
      config: {
        temperature: 0.1,
      }
    });

    const text = response.text;
    const match = text.match(/```(?:typescript|ts)?\n([\s\S]*?)\n```/);
    if (match) {
      fs.writeFileSync(filename, match[1]);
      console.log(`Successfully updated ${filename}`);
    } else {
      console.error(`Failed to parse response for ${filename}`);
      fs.writeFileSync(`${filename}.error.txt`, text);
    }
  } catch (error) {
    console.error(`Error fixing ${filename}:`, error);
  }
}

async function main() {
  await fixFile('src/irregularVerbsData.ts', 'irregular verbs');
  // courseData.ts is quite large, it might exceed output limits or take too long, so let's chunk it or use replace in JS.
}

main();
