import re

with open('src/types.ts', 'r') as f:
    content = f.read()

new_types = """export type QuestionType = 'multiple_choice' | 'drag_and_drop' | 'fill_in_blank';

export interface QuizQuestion {
  id: string;
  type?: QuestionType;
  question: string;
  options?: string[];
  correctAnswerIndex?: number;
  correctSentence?: string[];
  correctAnswer?: string;
}"""

content = re.sub(r'export interface QuizQuestion \{[^\}]+\}', new_types, content)

with open('src/types.ts', 'w') as f:
    f.write(content)
