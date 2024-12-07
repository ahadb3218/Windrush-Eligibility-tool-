import { create } from 'zustand';

interface VoiceState {
  selectedVoice: string;
  setSelectedVoice: (voice: string) => void;
}

export const useVoiceStore = create<VoiceState>((set) => ({
  selectedVoice: 'en-GB',
  setSelectedVoice: (voice) => set({ selectedVoice: voice }),
}));