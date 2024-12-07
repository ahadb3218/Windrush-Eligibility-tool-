import { create } from 'zustand';
import { Question, QuizState, Result } from '../types';

const initialQuestions: Question[] = [
  {
    id: '1',
    text: 'Are you a citizen of a Commonwealth country?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': '1a',
      'No': '2'
    }
  },
  {
    id: '1a',
    text: 'Did you arrive in the UK before 1 January 1973?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': '1b',
      'No': '1c'
    }
  },
  {
    id: '1b',
    text: 'Have you lived in the UK continuously since arrival (a break of less than two years is acceptable)?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': 'result_eligible',
      'No': '1c'
    }
  },
  {
    id: '1c',
    text: 'Did you leave the UK for over two years but are now lawfully back in the UK?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': '1d',
      'No': 'result_not_eligible'
    }
  },
  {
    id: '1d',
    text: 'Do you have strong ties to the UK (e.g., family, work, property)?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': 'result_eligible',
      'No': 'result_not_eligible'
    }
  },
  {
    id: '2',
    text: 'Did you arrive in the UK before 1 January 1973 and have indefinite leave to remain?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': 'result_eligible',
      'No': '2b'
    }
  },
  {
    id: '2b',
    text: 'Did you arrive in the UK between 1 January 1973 and 31 December 1988?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': '2c',
      'No': '3'
    }
  },
  {
    id: '2c',
    text: 'Do you have settled status in the UK?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': 'result_eligible',
      'No': 'result_not_eligible'
    }
  },
  {
    id: '3',
    text: 'Are you the child or grandchild of a Commonwealth citizen who was settled in the UK before 1 January 1973, or had the Right of Abode and was ordinarily resident in the UK on 1 January 1973?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': '3a',
      'No': 'result_not_eligible'
    }
  },
  {
    id: '3a',
    text: 'Was your parent or grandparent ordinarily resident in the UK on 1 January 1973?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': '3b',
      'No': 'result_not_eligible'
    }
  },
  {
    id: '3b',
    text: 'Were you and your parent born in the UK, or did you arrive before turning 18?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': '3c',
      'No': 'result_not_eligible'
    }
  },
  {
    id: '3c',
    text: 'Have you lived continuously in the UK since your arrival or birth?',
    options: ['Yes', 'No'],
    nextQuestion: {
      'Yes': 'result_eligible',
      'No': 'result_not_eligible'
    }
  }
];

const initialResults: Result[] = [
  {
    id: 'result_eligible',
    title: 'You May Be Eligible for the Windrush Scheme',
    description: 'Based on your responses, you may be eligible for the Windrush Scheme. Please note that eligibility does not guarantee entitlement to compensation. Final decisions depend on further assessment and evidence. We recommend contacting the Windrush Help Team for further guidance and to begin your application process.'
  },
  {
    id: 'result_not_eligible',
    title: 'You May Not Meet the Eligibility Criteria',
    description: 'Based on your responses, you may not meet the current eligibility criteria for the Windrush Scheme. However, we recommend consulting the Windrush Help Team for further guidance, as there may be other circumstances or criteria that could affect your eligibility.'
  }
];

export const useQuizStore = create<QuizState>((set) => ({
  questions: initialQuestions,
  results: initialResults,
  setQuestions: (questions) => set({ questions }),
  setResults: (results) => set({ results }),
}));