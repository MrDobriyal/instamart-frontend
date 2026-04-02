import { create } from 'zustand';

interface FilterState {
  sortBy: string;
  tags: string[];
  type: string;
  priceRange: [number, number] | null;
  setSortBy: (sort: string) => void;
  toggleTag: (tag: string) => void;
  setType: (type: string) => void;
  setPriceRange: (range: [number, number] | null) => void;
  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  sortBy: 'relevance',
  tags: [],
  type: '',
  priceRange: null,
  setSortBy: (sortBy) => set({ sortBy }),
  toggleTag: (tag) =>
    set((state) => ({
      tags: state.tags.includes(tag) ? state.tags.filter((t) => t !== tag) : [...state.tags, tag],
    })),
  setType: (type) => set({ type }),
  setPriceRange: (priceRange) => set({ priceRange }),
  clearFilters: () => set({ sortBy: 'relevance', tags: [], type: '', priceRange: null }),
}));
