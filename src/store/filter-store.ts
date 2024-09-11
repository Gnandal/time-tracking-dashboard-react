import { create } from 'zustand'

interface Filter {
  name: string,
  checked: boolean
}

interface filterStore {
  filterState: Filter[];
  filterUpdate: (selectedIndex: Number) => void;
}

export const useFilterStore = create<filterStore>((set) => ({
  filterState: [
    { name: "Daily", checked: false },
    { name: "Weekly", checked: true },
    { name: "Monthly", checked: false }
  ],
  filterUpdate: (selectedIndex: Number) => {
    set((state) => {
      var updatedOptions = state.filterState.slice().map((filter, index) => {
        filter.checked = index === selectedIndex ? true : false;
        return filter;
      });
      
      return { filterState: [...updatedOptions] }
    })
  },
}))


export const getActiveFilterName = () => {
  const filters = useFilterStore((state) => state.filterState);
  return filters.find((filter) => filter.checked)?.name.toLocaleLowerCase();
}