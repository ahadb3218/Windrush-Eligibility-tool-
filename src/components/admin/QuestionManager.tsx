import React from 'react';
import { Question } from '../../types';
import { PlusCircle, Trash2 } from 'lucide-react';

interface QuestionManagerProps {
  questions: Question[];
  onUpdateQuestion: (index: number, field: keyof Question, value: string | string[]) => void;
  onAddQuestion: () => void;
  onDeleteQuestion: (index: number) => void;
}

export const QuestionManager: React.FC<QuestionManagerProps> = ({
  questions,
  onUpdateQuestion,
  onAddQuestion,
  onDeleteQuestion,
}) => {
  const handleOptionUpdate = (questionIndex: number, optionIndex: number, value: string) => {
    const newOptions = [...questions[questionIndex].options];
    newOptions[optionIndex] = value;
    onUpdateQuestion(questionIndex, 'options', newOptions);
  };

  const handleAddOption = (questionIndex: number) => {
    const newOptions = [...questions[questionIndex].options, 'New Option'];
    onUpdateQuestion(questionIndex, 'options', newOptions);
  };

  const handleDeleteOption = (questionIndex: number, optionIndex: number) => {
    const newOptions = questions[questionIndex].options.filter((_, index) => index !== optionIndex);
    onUpdateQuestion(questionIndex, 'options', newOptions);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Questions</h2>
        <button
          onClick={onAddQuestion}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          <PlusCircle size={20} />
          Add Question
        </button>
      </div>
      
      {questions.map((question, questionIndex) => (
        <div key={question.id} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Question Text
              </label>
              <input
                value={question.text}
                onChange={(e) => onUpdateQuestion(questionIndex, 'text', e.target.value)}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Enter question text"
              />
            </div>
            <button
              onClick={() => onDeleteQuestion(questionIndex)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
              title="Delete question"
            >
              <Trash2 size={20} />
            </button>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Options</label>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex gap-2">
                <input
                  value={option}
                  onChange={(e) => handleOptionUpdate(questionIndex, optionIndex, e.target.value)}
                  className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder={`Option ${optionIndex + 1}`}
                />
                <button
                  onClick={() => handleDeleteOption(questionIndex, optionIndex)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  title="Delete option"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <button
              onClick={() => handleAddOption(questionIndex)}
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
            >
              <PlusCircle size={16} />
              Add Option
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};