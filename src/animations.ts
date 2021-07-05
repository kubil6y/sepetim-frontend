export const backdropAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 0.3, transition: { duration: 0.75 } },
};

export const dropdownAnim = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeOut' } },
};

export const slider = {
  hidden: { x: '-130%', skew: '45deg' },
  show: {
    x: '100%',
    skew: '0deg',
    transition: { ease: 'easeOut', duration: 1 },
  },
};
