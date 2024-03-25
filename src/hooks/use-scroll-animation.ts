const getScrollAnimation = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const getScrollCard = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 1.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export { getScrollAnimation, getScrollCard };
