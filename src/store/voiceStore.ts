import { create } from 'zustand';

interface VoiceState {
  selectedVoice: string;
  setSelectedVoice: (voice: string) => void;
}

export const useVoiceStore = create<VoiceState>((set) => ({
  selectedVoice: 'en-NG',
  setSelectedVoice: (voice) => set({ selectedVoice: voice }),
}));