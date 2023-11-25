import {create} from 'zustand';

export const useStore = create((set) => ({
  teamName: 'My Team',
  setTeamName: (name) => set({ teamName: name }),
}));