export interface Word {
  id: string;
  word: string;
  transcription: string;
  translation: string;
  category?: string;
}

export type QuestionType = 'multiple_choice' | 'drag_and_drop' | 'fill_in_blank';

export interface QuizQuestion {
  id: string;
  type?: QuestionType;
  question: string;
  options?: string[];
  correctAnswerIndex?: number;
  correctSentence?: string[];
  correctAnswer?: string;
}

export interface Lesson {
  id: string;
  title: string;
  moduleId: number;
  theory: string[];
  words: Word[];
  quiz: QuizQuestion[];
}

export type ViewState = 'menu' | 'roadmap' | 'lesson_theory' | 'lesson_words' | 'lesson_quiz' | 'infinite_training' | 'dictionary' | 'messenger' | 'survival' | 'builder' | 'module_test' | 'module_test_result' | 'irregular_verbs';

export type QuestNode = {
  text: string;
  options: { text: string; nextScene: string; effect?: 'good' | 'bad' }[];
};

export type Quest = {
  id: string;
  title: string;
  moduleId: number;
  nodes: Record<string, QuestNode>;
};
