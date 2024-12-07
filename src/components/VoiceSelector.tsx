import React from 'react';
import { useVoiceStore } from '../store/voiceStore';

const voices = [
  { id: 'en-GB', label: 'British' },
  { id: 'en-US', label: 'American' },
  { id: 'en-NG', label: 'Nigerian' },
];

export const VoiceSelector: React.FC = () => {
  const { selectedVoice, setSelectedVoice } = useVoiceStore();

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Select Voice Accent
      </label>
      <div className="flex gap-4">
        {voices.map((voice) => (
          <button
            key={voice.id}
            onClick={() => setSelectedVoice(voice.id)}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedVoice === voice.id
                ? 'bg-yellow-500 text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {voice.label}
          </button>
        ))}
      </div>
    </div>
  );
};