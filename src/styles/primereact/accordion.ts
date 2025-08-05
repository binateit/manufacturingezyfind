const TRANSITIONS = {
    toggleable: {
      timeout: 500,
      classnames: {
        enter: 'max-h-0',
        enterActive:
          '!max-h-[1000px] overflow-hidden transition-[max-height] duration-500 ease-in',
        exit: 'max-h-[1000px]',
        exitActive:
          '!max-h-0 overflow-hidden transition-[max-height] duration-500 ease-out',
      }
    }
  };

export const accordion = {
    root: {
        className: 'border-0'
    },
    // accordiontab:{
    //   className:'relative p-0'
    // },
    accordiontab: {
        root: {
            className: 'border-b border-gray-300 mb-3 pb-3'
        },
        headerAction: {
            className: 'p-0 tab-header relative w-full block'
        },
        content: {
            className: 'bprder-0'
        }

    },
    transition: TRANSITIONS.toggleable
}