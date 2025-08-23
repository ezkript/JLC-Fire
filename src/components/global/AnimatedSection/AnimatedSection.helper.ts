export const getInitialPos = (direction: string) => {
  switch (direction) {
    case 'up':
      return { y: 50, opacity: 0 };
    case 'down':
      return { y: -50, opacity: 0 };
    case 'left':
      return { x: 50, opacity: 0 };
    case 'right':
      return { x: -50, opacity: 0 };
    default:
      return { y: 50, opacity: 0 };
  }
};

export const getAnimatePos = (direction: string) => {
  switch (direction) {
    case 'up':
    case 'down':
      return { y: 0, opacity: 1 };
    case 'left':
    case 'right':
      return { x: 0, opacity: 1 };
    default:
      return { y: 0, opacity: 1 };
  }
};
