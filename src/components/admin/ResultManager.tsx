import React from 'react';
import { Result } from '../../types';
import { Trash2, PlusCircle } from 'lucide-react';

interface ResultManagerProps {
  results: Result[];
  onUpdateResult: (index: number, field: keyof Result, value: string) => void;
  onAddResult: () => void;
  onDeleteResult: (index: number) => void;
}

export const ResultManager: React.FC<ResultManagerProps> = ({
  results,
  onUpdateResult,
  onAddResult,
  onDeleteResult,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Results</h2>
        <button
          onClick={onAddResult}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          <PlusCircle size={20} />
          Add Result
        </button>
      </div>

      {results.map((result, index) => (
        <div key={result.id} className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Result Title
                </label>
                <input
                  value={result.title}
                  onChange={(e) => onUpdateResult(index, 'title', e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter result title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={result.description}
                  onChange={(e) => onUpdateResult(index, 'description', e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter result description"
                />
              </div>
            </div>
            <button
              onClick={() => onDeleteResult(index)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
              title="Delete result"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};