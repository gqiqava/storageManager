import { create } from "zustand";

export const useStore = create((set) => ({
  modalStatus: { visible: false, renderCase: null, data: null },
  reloadStages: false,
  reloadCriteria: false,

  setModalStatus: (isModalOpen, renderCase, data) => {
    set({
      modalStatus: { visible: isModalOpen, renderCase: renderCase, data: data },
    });
  },

  runReloadStages: () => {
    set((state) => ({ reloadStages: !state.reloadStages }));
  },

  runReloadCriteria: () => {
    set((state) => ({ reloadCriteria: !state.reloadCriteria }));
  },
}));
