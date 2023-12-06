import {create} from 'zustand';

export const useStore = create((set) => ({
  teamName: 'My Team',
  setTeamName: (name) => set({ teamName: name }),

  isTeamNameEdited: false,
  setIsTeamNameEdited: (isEdited) => set({isTeamNameEdited: isEdited}),

  searchValue: '',
  setSearchValue: (val) => set({searchValue: val}),

  showModal: false,
  setShowModal: (isVisible) => set({showModal: isVisible}),

  // Add new state for the roster
  roster: [],
  setRoster: (rosterData) => set({ roster: rosterData }),
  clearRoster: () => set({ roster: [] }),

  parsedPlayers: [],
  setParsedPlayers: (players) => set({ parsedPlayers: players }),

  summary: [],
  setSummary: (summaryData) => set({ summary: summaryData }),
  
  // Add new state for the import summary
  importSummary: null,
  setImportSummary: (summary) => set({ importSummary: summary }),

  // Add new state for the import error
  importError: null,
  setImportError: (error) => set({ importError: error }),

  //Formation
  checkFormationStarters: () => {
    set((state) => {
      const formation = {
        Goalkeeper: 1,
        Defender: 4,
        Midfielder: 3,
        Forward: 3,
      };
      let alert = { show: false, header: '', message: '' };

      // Count the starters in each position
      const starterCounts = state.roster.reduce((acc, player) => {
        // Normalize the Starter field to be boolean
        const isStarter = player.Starter === "Yes";
        if (isStarter) {
          const position = player.Position; // This should match the full role name
          acc[position] = (acc[position] || 0) + 1;
        }
        return acc;
      }, {});
      let formationError = false;
      // Check against the formation requirements
      for (const [position, requiredCount] of Object.entries(formation)) {
        const count = starterCounts[position] || 0;
        console.log(position);
        console.log(requiredCount);
        console.log(count);
        if (count > requiredCount) {
          alert = { show: true, header: 'There are too many starters', message: `Your team has too many starters for one or more of the positions in the 4-3-3 formation.` };
          formationError = true;
          break;
        } else if (count < requiredCount) {
          alert = { show: true, header: 'Not enough starters', message: `Your team doesn’t have enough starters  for one or more of the positions in the 4-3-3 formation` };
          formationError = true;
          break;
        }
      }

      if (formationError) {
        return { formationAlert: alert };
      } else {
        // Reset the alert if the formation is correct
        return { formationAlert: { show: false, header: '', message: '' } };
      }
    });
  },

  // Initial state for formation alert
  formationAlert: { show: false, header: '', message: '' },


  //Dialog states
  showActionDialog:false,
  setShowActionDialog: (isVisible) => set({showActionDialog: isVisible}),

  showConfirmationDialog: false,
  setShowConfirmationDialog: (isVisible) => set({showConfirmationDialog: isVisible}),

  showEditDialog: false,
  setShowEditDialog: (isVisible) => set({showEditDialog: isVisible}),
}));