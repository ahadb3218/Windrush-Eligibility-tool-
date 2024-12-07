import React from 'react';
import { useQuizStore } from '../store/quizStore';
import { Question, Result } from '../types';
import { QuestionManager } from './admin/QuestionManager';
import { ResultManager } from './admin/ResultManager';
import { Analytics } from './admin/Analytics';
import { AdminHeader } from './admin/AdminHeader';
import { v4 as uuidv4 } from 'uuid';

interface AdminPanelProps {
  onLogout: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const { questions, results, setQuestions, setResults } = useQuizStore();

  const handleQuestionUpdate = (index: number, field: keyof Question, value: string | string[]) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], [field]: value };
    setQuestions(newQuestions);
  };

  const handleResultUpdate = (index: number, field: keyof Result, value: string) => {
    const newResults = [...results];
    newResults[index] = { ...newResults[index], [field]: value };
    setResults(newResults);
  };

  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: uuidv4(),
      text: 'New Question',
      options: ['Option 1', 'Option 2', 'Option 3'],
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleDeleteQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleAddResult = () => {
    const newResult: Result = {
      id: uuidv4(),
      title: 'New Result',
      description: 'Enter result description here',
    };
    setResults([...results, newResult]);
  };

  const handleDeleteResult = (index: number) => {
    const newResults = results.filter((_, i) => i !== index);
    setResults(newResults);
  };

  return (
    <div className="min-h-screen bg-black">
      <AdminHeader onLogout={onLogout} />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <Analytics />
        <QuestionManager
          questions={questions}
          onUpdateQuestion={handleQuestionUpdate}
          onAddQuestion={handleAddQuestion}
          onDeleteQuestion={handleDeleteQuestion}
        />
        <ResultManager
          results={results}
          onUpdateResult={handleResultUpdate}
          onAddResult={handleAddResult}
          onDeleteResult={handleDeleteResult}
        />
      </div>
    </div>
  );
};