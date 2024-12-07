import React from 'react';
import { useAnalyticsStore } from '../../store/analyticsStore';
import { BarChart, Users, Clock } from 'lucide-react';

export const Analytics: React.FC = () => {
  const { completedQuizzes, lastCompletedAt } = useAnalyticsStore();

  return (
    <div className="bg-gray-900 p-6 rounded-lg mb-8">
      <h2 className="text-2xl font-bold text-yellow-500 mb-6 flex items-center">
        <BarChart className="mr-2 h-6 w-6" />
        Analytics Dashboard
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Users className="h-5 w-5 text-yellow-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-300">Total Completed Quizzes</h3>
          </div>
          <p className="text-3xl font-bold text-yellow-500">{completedQuizzes}</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Clock className="h-5 w-5 text-yellow-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-300">Last Completion</h3>
          </div>
          <p className="text-lg text-gray-300">
            {lastCompletedAt
              ? new Date(lastCompletedAt).toLocaleDateString('en-GB', {
                  dateStyle: 'full',
                })
              : 'No completions yet'}
          </p>
        </div>
      </div>
    </div>
  );
};