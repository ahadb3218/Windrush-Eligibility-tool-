import React, { useEffect, useRef } from 'react';
import { Volume2 } from 'lucide-react';
import { Question } from '../types';
import { useVoiceStore } from '../store/voiceStore';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: string) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  const { selectedVoice } = useVoiceStore();
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    speechSynthRef.current = new SpeechSynthesisUtterance();
    return () => {
      if (speechSynthRef.current) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSpeak = () => {
    if (speechSynthRef.current) {
      window.speechSynthesis.cancel();
      speechSynthRef.current.text = question.text;
      speechSynthRef.current.lang = selectedVoice;
      window.speechSynthesis.speak(speechSynthRef.current);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-300">{question.text}</h2>
        <button
          onClick={handleSpeak}
          className="p-2 text-yellow-500 hover:text-yellow-400 transition-colors"
          title="Listen to question"
        >
          <Volume2 className="h-6 w-6" />
        </button>
      </div>
      <div className="space-y-2">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="w-full p-4 text-left bg-gray-800 text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};