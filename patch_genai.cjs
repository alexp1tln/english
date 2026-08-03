const fs = require('fs');

let content = fs.readFileSync('server.ts', 'utf-8');

const genaiImport = `import { GoogleGenAI, Type } from '@google/genai';\n`;
if (!content.includes('@google/genai')) {
  content = genaiImport + content;
}

const genaiCode = `
  app.post('/api/generate-exercises', async (req, res) => {
    const { title, theory } = req.body;
    if (!title) {
        res.status(400).json({ error: "No title provided" });
        return;
    }
    
    try {
      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: { 'User-Agent': 'aistudio-build' }
        }
      });
      
      const prompt = \`
Сгенерируй 5 разнообразных упражнений для закрепления темы по английскому языку.
Тема урока: \${title}
Краткая теория (для контекста): \${(theory || []).join(' ')}

Упражнения должны быть правильными, интересными и строго по теме урока.
Должно быть разнообразие типов упражнений (multiple_choice, drag_and_drop, fill_in_blank).
Для drag_and_drop нужно предложение разбить на слова, options - это перемешанные слова и лишние слова (штук 3-4), а correctSentence - правильный порядок слов.
Для fill_in_blank вопрос должен содержать пропуск ___, а correctAnswer - точное слово для вставки.
Для multiple_choice вопрос с 3-4 вариантами ответа, correctAnswerIndex - индекс правильного ответа (от 0).
\`;
      
      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                type: { type: Type.STRING, description: "Одно из: multiple_choice, drag_and_drop, fill_in_blank" },
                question: { type: Type.STRING },
                options: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Для multiple_choice и drag_and_drop" },
                correctAnswerIndex: { type: Type.INTEGER, description: "Для multiple_choice" },
                correctSentence: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Для drag_and_drop" },
                correctAnswer: { type: Type.STRING, description: "Для fill_in_blank" }
              }
            }
          }
        }
      });
      
      let text = response.text || "[]";
      let exercises = JSON.parse(text);
      res.json({ exercises });
    } catch (err) {
      console.error('GenAI error:', err);
      res.status(500).json({ error: "Failed to generate exercises" });
    }
  });
`;

content = content.replace(
  'if (process.env.NODE_ENV !== "production") {',
  genaiCode + '\n  if (process.env.NODE_ENV !== "production") {'
);

fs.writeFileSync('server.ts', content, 'utf-8');
console.log('patched server.ts with genai route');
