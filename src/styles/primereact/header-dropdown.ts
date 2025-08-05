import { DropdownPassThroughOptions } from 'primereact/dropdown';
  
  export const dropdownStyle: DropdownPassThroughOptions = {
    root: {
      className: 'w-full card-shadow border border-gray-300'
    },
    item: {
      className: 'py-1 border-b border-gray-300 px-3 cursor-pointer hover:bg-gray-100 text-sm'
    },
    input: {
      className: 'px-2 py-1'
    },
    trigger: {
      className: 'px-2 py-1'
    },
    wrapper: {
      className: 'bg-white text-[12px]'
    },
    list: {
      className: 'py-0 pr-2'
    },
    filterInput: {
      className: 'px-2 py-1 border border-gray-300 text-[12px] w-full'
    },
    header: {
      className: 'bg-white p-2 pb-0'
    },
    filterIcon: {
      className: 'absolute right-2 h-[12px] w-[12px] top-1/2 -translate-y-1/2'
    },
    emptyMessage: {
      className: 'p-2 text-gray-400'
    },
    panel: {
      className: 'max-h-[300px] overflow-y-auto scroll-smooth z-[9999] shadow-md border border-gray-300 border-b-0 bg-white rounded-md'
    }
  };
  