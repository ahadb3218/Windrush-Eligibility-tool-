export interface Question {
  id: string;
  text: string;
  options: string[];
  nextQuestion?: {
    [key: string]: string;
  };
}

export interface Result {
  id: string;
  title: string;
  description: string;
}

export interface QuizState {
  questions: Question[];
  results: Result[];
  setQuestions: (questions: Question[]) => void;
  setResults: (results: Result[]) => void;
}

export interface UserResponse {
  questionId: string;
  answer: string;
}