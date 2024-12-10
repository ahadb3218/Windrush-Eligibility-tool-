import React from 'react';
import { FileDown } from 'lucide-react';
import { EmailResultsForm } from '../email/EmailResultsForm';
import { Result, UserResponse } from '../../types';
import { QuizResponse } from '../../services/email/types';
import { generateAndDownloadPDF } from '../../utils/pdfGenerator';
import { useAnalyticsStore } from '../../store/analyticsStore';

interface ResultDisplayProps {
  result: Result;
  responses: UserResponse[];
  onRestart: () => void;
  questions: { id: string; text: string }[];
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  result,
  responses,
  onRestart,
  questions,
}) => {
  const incrementCompletedQuizzes = useAnalyticsStore(
    (state) => state.incrementCompletedQuizzes
  );

  React.useEffect(() => {
    incrementCompletedQuizzes();
  }, [incrementCompletedQuizzes]);

  const getFormattedResponses = (): QuizResponse[] => {
    return responses.map(response => {
      const question = questions.find(q => q.id === response.questionId);
      return {
        question: question?.text || '',
        answer: response.answer,
      };
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-yellow-500">{result.title}</h2>
      <p className="text-gray-300 whitespace-pre-line">{result.description}</p>
      
      <EmailResultsForm
        result={result.title}
        responses={getFormattedResponses()}
      />
      
      <button
        onClick={onRestart}
        className="mt-4 w-full bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors"
      >
        Start New Assessment
      </button>
    </div>
  );
}