export interface Word {
  id: string;
  word: string;
  transcription: string;
  translation: string;
  category?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
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
