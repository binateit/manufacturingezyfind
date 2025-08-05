const TRANSITIONS = {
    overlay: {
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive: 'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
            exit: 'opacity-100',
            exitActive: '!opacity-0 transition-opacity duration-150 ease-linear'
        }
    }
};

export const overlaypanel = {
    root: {
        className: 'p-0 border border-gray-300'
    },
    content: {
        className: 'p-0'
    },
    closeButton: {
        classnames: 'border border-red'
    },
    transition: TRANSITIONS.overlay
}