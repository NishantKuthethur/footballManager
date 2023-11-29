import {create} from 'zustand';

export const useStore = create((set) => ({
  teamName: 'My Team',
  setTeamName: (name) => set({ teamName: name }),

  searchValue: '',
  setSearchValue: (val) => set({searchValue: val}),
}));