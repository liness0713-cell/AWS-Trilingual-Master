
export interface TrilingualText {
  en: string;
  zh: string;
  ja: string; // Contains HTML <ruby> tags
}

export interface ExamDefinition {
  id: string;
  code: string;
  name: TrilingualText; // Changed from string to TrilingualText
  level: 'Foundational' | 'Associate' | 'Professional' | 'Specialty';
  description: string;
}

export interface StudySection {
  title: TrilingualText;
  weight: string; // e.g. "20%" or "15-20%"
  topics: StudyTopic[];
}

export interface StudyTopic {
  title: TrilingualText;
  content?: TrilingualText[]; // Changed from TrilingualText to TrilingualText[] (Array of blocks)
}

export interface QuizQuestion {
  id: string;
  question: TrilingualText;
  options: TrilingualText[];
  correctAnswerIndex: number;
  explanation: TrilingualText;
}

export type ViewMode = 'home' | 'exam-dashboard' | 'study-content' | 'quiz-mode';

export interface AppState {
  view: ViewMode;
  selectedExamId: string | null;
  selectedSectionIndex: number | null;
  selectedTopicIndex: number | null;
  showFurigana: boolean;
  apiKey: string | null;
}
