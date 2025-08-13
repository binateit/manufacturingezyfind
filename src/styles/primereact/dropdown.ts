// tailwindDropdownStyle.ts
import { DropdownPassThroughOptions, DropdownPassThroughMethodOptions } from 'primereact/dropdown';
import { classNames } from 'primereact/utils';

// const TRANSITIONS: DropdownPassThroughOptions['transition'] = {
//   overlay: {
//     enterFromClass: 'opacity-0 scale-95',
//     enterActiveClass: 'transition ease-out duration-150',
//     leaveActiveClass: 'transition ease-in duration-100',
//     leaveToClass: 'opacity-0 scale-95'
//   }
// };

export const dropdown: DropdownPassThroughOptions = {
  root: ({ props }: DropdownPassThroughMethodOptions) => ({
    className: classNames(
      'cursor-pointer inline-flex relative select-none',
      'bg-white border border-gray-400 transition-colors duration-200 ease-in-out',
      'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300',
      'w-full h-10',
      'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]',
      'dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
      { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
    )
  }),
  input: ({ props }: DropdownPassThroughMethodOptions) => ({
    className: classNames(
      'cursor-pointer block w-full flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
      'bg-transparent border-0 text-gray-800 dark:text-white/80',
      'p-3 transition duration-200 appearance-none font-sans text-base',
      'h-full flex items-center',
      'text-sm font-normal leading-none',
      'focus:outline-none focus:shadow-none',
      { 'pr-7': props.showClear }
    )
  }),
  trigger: {
    className: 'h-full flex items-center justify-center shrink-0 text-gray-500 w-12'
  },
  wrapper: {
    className: 'max-h-[200px] overflow-auto bg-white text-gray-700 border-0 shadow-lg dark:bg-gray-900 dark:text-white/80'
  },
  list: {
    className: 'list-none m-0'
  },
  item: ({ context }: DropdownPassThroughMethodOptions) => ({
    className: classNames(
      'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
      'm-0 p-2 border-0 transition-shadow duration-200',
      'dark:text-white/80 dark:hover:bg-gray-800',
      'hover:text-gray-700 hover:bg-gray-200 text-sm font-normal leading-none',
      {
        'text-gray-700': !context.focused && !context.selected,
        'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.selected,
        'bg-blue-400 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
        'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected,
        'opacity-60 select-none pointer-events-none cursor-default': context.disabled
      }
    )
  }),
  itemGroup: {
    className: 'm-0 p-3 text-gray-800 bg-white font-bold dark:bg-gray-900 dark:text-white/80 cursor-auto'
  },
  header: {
    className: 'p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40'
  },
  filterContainer: {
    className: 'relative'
  },
  filterInput: {
    className: classNames(
      'pr-7 pr-8 -mr-7 w-full h-8 font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 appearance-none',
      'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
      'hover:border-blue-500 focus:outline-none focus:outline-offset-0',
      'focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
    )
  },
  filterIcon: {
    className: 'absolute right-2 top-1/2 -translate-y-1/2 text-gray-500'
  },
  clearIcon: {
    className: 'text-gray-500 right-12 -mt-2 absolute top-1/2'
  },
  emptyMessage: {
    className: 'p-2 text-gray-400'
  },
  panel: {
    className: 'max-h-[300px] overflow-y-auto scroll-smooth z-index-9999 shadow-md border border-gray-300 bg-white'
  }
  //transition: TRANSITIONS
};
